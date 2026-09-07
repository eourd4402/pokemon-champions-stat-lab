(() => {
  'use strict';

  const config = window.APP_CONFIG || {};
  const baseUrl = String(config.dataBaseUrl || '').replace(/\/+$/, '');
  const manifestName = config.dataManifest || 'manifest.json';
  const cacheName = 'pokemon-champions-shared-data-v1';
  const versionPrefix = 'pokemon-champions-data-version:';

  const sources = Object.freeze({
    showdownPokedex: {
      path: 'data/showdown-pokedex.json',
      fallback: 'https://play.pokemonshowdown.com/data/pokedex.json'
    },
    showdownMoves: {
      path: 'data/showdown-moves.json',
      fallback: 'https://play.pokemonshowdown.com/data/moves.json'
    },
    showdownItems: {
      path: 'data/showdown-items.json',
      fallback: ''
    },
    championsMoves: {
      path: 'data/champions-moves.ts',
      fallback: 'https://raw.githubusercontent.com/smogon/pokemon-showdown/master/data/mods/champions/moves.ts'
    },
    championsItems: {
      path: 'data/champions-items.ts',
      fallback: 'https://raw.githubusercontent.com/smogon/pokemon-showdown/master/data/mods/champions/items.ts'
    },
    speciesNamesCsv: {
      path: 'data/pokemon_species_names.csv',
      fallback: 'https://raw.githubusercontent.com/PokeAPI/pokeapi/master/data/v2/csv/pokemon_species_names.csv'
    },
    movesCsv: {
      path: 'data/moves.csv',
      fallback: 'https://raw.githubusercontent.com/PokeAPI/pokeapi/master/data/v2/csv/moves.csv'
    },
    moveNamesCsv: {
      path: 'data/move_names.csv',
      fallback: 'https://raw.githubusercontent.com/PokeAPI/pokeapi/master/data/v2/csv/move_names.csv'
    },
    itemsCsv: {
      path: 'data/items.csv',
      fallback: 'https://raw.githubusercontent.com/PokeAPI/pokeapi/master/data/v2/csv/items.csv'
    },
    itemNamesCsv: {
      path: 'data/item_names.csv',
      fallback: 'https://raw.githubusercontent.com/PokeAPI/pokeapi/master/data/v2/csv/item_names.csv'
    },
    abilitiesCsv: {
      path: 'data/abilities.csv',
      fallback: 'https://raw.githubusercontent.com/PokeAPI/pokeapi/master/data/v2/csv/abilities.csv'
    },
    abilityNamesCsv: {
      path: 'data/ability_names.csv',
      fallback: 'https://raw.githubusercontent.com/PokeAPI/pokeapi/master/data/v2/csv/ability_names.csv'
    },
    legacyKoreanNames: {
      path: 'data/korean_names.txt',
      fallback: 'https://raw.githubusercontent.com/jayckaiser/korean-pokemon/master/korean_pokemon/names/ko.txt'
    }
  });

  let manifestPromise;

  const cacheRequest = key => new Request(
    new URL(`./__shared_data_cache__/${encodeURIComponent(key)}`, location.href).href
  );

  async function openCache() {
    if (!('caches' in window)) return null;
    try { return await caches.open(cacheName); } catch (_) { return null; }
  }

  async function getManifest() {
    if (!baseUrl) return null;
    if (!manifestPromise) {
      manifestPromise = fetch(`${baseUrl}/${manifestName}?t=${Date.now()}`, { cache: 'no-store' })
        .then(response => {
          if (!response.ok) throw new Error(`data manifest ${response.status}`);
          return response.json();
        })
        .catch(() => null);
    }
    return manifestPromise;
  }

  function savedVersion(key) {
    try { return localStorage.getItem(`${versionPrefix}${key}`) || ''; } catch (_) { return ''; }
  }

  function saveVersion(key, version) {
    try { localStorage.setItem(`${versionPrefix}${key}`, version); } catch (_) {}
  }

  async function fetchNetwork(url) {
    const response = await fetch(url, { cache: 'no-store' });
    if (!response.ok) throw new Error(`${url} ${response.status}`);
    return response;
  }

  async function fetchData(key) {
    const source = sources[key];
    if (!source) throw new Error(`Unknown data key: ${key}`);

    const [manifest, cache] = await Promise.all([getManifest(), openCache()]);
    const file = manifest?.files?.[key];
    const path = typeof file === 'string' ? file : (file?.path || source.path);
    const version = String(file?.version || manifest?.dataVersion || 'upstream');
    const cached = cache ? await cache.match(cacheRequest(key)) : null;

    if (cached && savedVersion(key) === version) return cached.clone();

    const primaryUrl = baseUrl ? `${baseUrl}/${path}` : source.fallback;
    try {
      if (!primaryUrl) throw new Error(`No data URL configured for ${key}`);
      const response = await fetchNetwork(primaryUrl);
      if (cache) await cache.put(cacheRequest(key), response.clone());
      saveVersion(key, version);
      return response;
    } catch (primaryError) {
      if (cached) return cached.clone();
      if (baseUrl && source.fallback) return fetchNetwork(source.fallback);
      throw primaryError;
    }
  }

  window.PokeData = Object.freeze({
    fetch: fetchData,
    manifest: getManifest,
    isConfigured: Boolean(baseUrl)
  });
})();
