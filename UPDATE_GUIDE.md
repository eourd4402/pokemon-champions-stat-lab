# 업데이트 방법

## 데이터만 바꿀 때

`pokemon-champions-data` 저장소의 데이터 파일과 `manifest.json` 버전을 갱신합니다.
앱과 웹은 실행할 때 새 버전을 확인하고, 새 데이터를 내려받아 오프라인 캐시에 보관합니다.
APK를 다시 만들 필요가 없습니다.

## 검색·필터·계산·화면 기능을 바꿀 때

1. `www` 내부 파일을 수정합니다.
2. GitHub에 올리면 웹은 GitHub Pages 작업으로 갱신됩니다.
3. Android 앱에는 다음 명령으로 같은 `www`를 복사합니다.

```bat
npm install
npx cap sync android
npx cap open android
```

4. `android/app/build.gradle`의 `versionCode`와 `versionName`을 올립니다.
5. Android Studio에서 APK 또는 AAB를 만듭니다.

## 아이콘·권한 등 Android만 바꿀 때

`android` 폴더를 수정하고 새 APK/AAB를 만듭니다. 데이터 저장소와 웹 코드는 수정하지 않습니다.
