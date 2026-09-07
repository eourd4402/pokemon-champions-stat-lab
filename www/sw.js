const APP_CACHE = 'pokemon-champions-app-v19-0';
const RUNTIME_CACHE = 'pokemon-champions-runtime-v1';

const APP_FILES = [
  './',
  './index.html',
  './css/styles.css',
  './js/config.js',
  './js/data-source.js',
  './js/app.js',
  './app-version.json',
  './manifest.webmanifest',
  './icons/icon-180.png',
  './icons/icon-192.png',
  './icons/icon-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(APP_CACHE).then(cache => cache.addAll(APP_FILES)));
});

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys
      .filter(key => ![APP_CACHE, RUNTIME_CACHE, 'pokemon-champions-shared-data-v1'].includes(key))
      .map(key => caches.delete(key)));
    await self.clients.claim();
  })());
});

self.addEventListener('message', event => {
  if (event.data?.type === 'SKIP_WAITING') self.skipWaiting();
});

async function appNetworkFirst(request, fallback) {
  try {
    const response = await fetch(request, { cache: 'no-store' });
    if (response?.ok) {
      const cache = await caches.open(APP_CACHE);
      await cache.put(request, response.clone());
    }
    return response;
  } catch (_) {
    return (await caches.match(request)) || (fallback ? await caches.match(fallback) : undefined);
  }
}

async function runtimeCacheFirst(request) {
  const cache = await caches.open(RUNTIME_CACHE);
  const cached = await cache.match(request);
  if (cached) return cached;
  const response = await fetch(request);
  if (response?.ok || response?.type === 'opaque') await cache.put(request, response.clone());
  return response;
}

self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);

  if (request.mode === 'navigate') {
    event.respondWith(appNetworkFirst(request, './index.html'));
  } else if (url.origin === self.location.origin) {
    event.respondWith(appNetworkFirst(request));
  } else {
    event.respondWith(runtimeCacheFirst(request));
  }
});
