# 말랑소프트

모바일 앱 소개·지원 사이트. 대표 주소는 https://malangsoft.pages.dev/ 이며 Cloudflare Pages Direct Upload로 배포한다. GitHub Pages는 `master` 루트를 계속 제공하되 canonical은 대표 주소를 가리킨다.

- `index.html`: 홈, 기존 앱 링크, 지원 및 기존 개인정보 앵커.
- `hanjafriend/index.html`: 한자친구 소개와 실제 기기 화면.
- `hanjafriend/privacy.html`: 한자친구 개인정보처리방침.
- `assets/site.css`: 운영 스타일. 기존 `assets/styles.css`는 이전 경로 호환을 위해 보관.
- `app-ads.txt`: 기존 광고 설정 유지.
- `design-preview/malangsoft/`: noindex 시안 기록. `_config.yml`에서 공개 빌드 제외.

로컬 확인: `python3 -m http.server 8769 --bind 127.0.0.1`

한자친구 정책 원문: `/Users/sywoo/Github/hanja_mania/docs/privacy-policy.ko.md`.
현재 앱 상태 표시는 2026-11-01 인계의 App Store 심사 대기를 기준으로 한다.

## Cloudflare Pages / 검색

- 프로젝트: `malangsoft`, 계정 ID: `a66272275956383a6c9355d2dc66b99c`.
- 공개 파일: `index.html`, `404.html`, `hanjafriend/*.html`, `assets/*`, `app-ads.txt`, `robots.txt`, `sitemap.xml`.
- 위 파일만 ZIP 루트에 넣고 Cloudflare Pages 프로젝트의 새 프로덕션 배포에 업로드한다. 저장소 전체나 `design-preview/`는 업로드하지 않는다.
- 현재 GitHub push는 GitHub Pages만 자동 갱신한다. Cloudflare는 직접 업로드가 필요하다. 자동화 시 Pages 쓰기 권한을 가진 배포 자격 증명을 별도로 연결한다.
- `robots.txt`는 크롤링을 허용하고 사이트맵을 안내한다. `404.html`로 없는 URL은 실제 404 응답을 반환한다.
- Google Search Console 소유권 확인 메타태그는 홈에서 유지한다. 사이트맵은 공개 페이지 3개만 포함한다.
- 새 주소 공개 후에도 기존 앱의 지원·정책 URL과 app-ads.txt는 유지하며, 앱·AdMob 설정은 별도 작업에서 변경한다.
