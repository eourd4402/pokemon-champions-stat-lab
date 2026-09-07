# Pokémon Champions Stat Lab

웹/PWA와 Android 앱이 같은 `www` 코드를 사용하는 정리본입니다. 화면, 검색,
도감, 계산 기능은 모두 `www`에 한 번만 존재합니다.

## 처음 한 번 설정

1. `www/js/config.js`를 엽니다.
2. `dataBaseUrl`에 데이터 저장소의 Raw 주소를 입력합니다.

```js
dataBaseUrl: 'https://raw.githubusercontent.com/GITHUB_ID/pokemon-champions-data/main'
```

주소를 비워두면 가능한 자료는 기존 Showdown/PokeAPI 원본 주소를 사용합니다. 전체
도구 목록까지 사용하려면 데이터 저장소 주소를 반드시 입력해야 합니다.

## Android 실행

프로젝트를 영문 경로에 압축 해제하고 `START_ANDROID_STUDIO.bat`을 실행합니다.
Android Studio에서 직접 열 때는 이 폴더가 아니라 내부의 `android` 폴더를 엽니다.

## 파일 역할

- `www/index.html`: 화면 구조
- `www/css/styles.css`: 디자인
- `www/js/app.js`: 검색, 도감, 계산 등 실제 기능
- `www/js/config.js`: 데이터 저장소 주소
- `www/js/data-source.js`: 버전 확인, 다운로드, 오프라인 캐시, 원본 주소 대체
- `android`: Android 앱 껍데기와 아이콘

`node_modules`, APK, 빌드 폴더는 GitHub에 올리지 않습니다.
