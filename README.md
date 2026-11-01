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
- `master` push 시 `.github/workflows/cloudflare-pages.yml`이 공개 파일만 모아 Cloudflare 프로덕션(`main`)에 배포한다. 수동 실행도 가능하다. GitHub Actions의 `CLOUDFLARE_API_TOKEN` secret은 해당 계정의 Cloudflare Pages Edit 권한을 사용한다.
- `robots.txt`는 크롤링을 허용하고 사이트맵을 안내한다. `404.html`로 없는 URL은 실제 404 응답을 반환한다.
- Google Search Console 소유권 확인 메타태그는 홈에서 유지한다. 사이트맵은 공개 페이지 3개만 포함한다.
- 새 주소 공개 후에도 기존 앱의 지원·정책 URL과 app-ads.txt는 유지하며, 앱·AdMob 설정은 별도 작업에서 변경한다.

2026-11-01 확인: Cloudflare 프로덕션 공개 및 Google Search Console HTML 태그 소유권 인증 완료. 사이트맵 제출 완료. 최초 사이트맵 상태는 ‘가져올 수 없음’이며, Google의 실제 URL 테스트와 색인 생성 요청 결과는 별도 확인이 필요하다. 공개 사이트맵·robots.txt와 소개·정책 canonical은 Chrome에서 확인했다.

## 한국어 / English

- 브라우저의 첫 선호 언어가 `ko` 또는 `ko-*`이면 한국어, 나머지는 `/en/` 영어 페이지를 표시한다. 국가나 IP는 조회하지 않는다.
- 상단 언어 전환은 `?lang=ko` / `?lang=en`을 사용하고 선택을 로컬 저장소에 기억한다. 저장소를 사용할 수 없어도 명시적 링크와 브라우저 언어 분기는 동작한다.
- 홈, 한자친구 소개·정책, MyFontMaker·주유주유소·남친만들기·HellDia 소개, 이전 앱 개인정보 안내를 두 언어로 제공한다. 실제 앱 화면은 원본 캡처를 유지한다.
- 나우플레잉·혼술남녀는 소개 목록에서 삭제했다. 기존 루트 정책 앵커는 유지하며 정책 본문은 `legacy-privacy/`로 옮겼다.
- `sitemap.xml`은 양쪽 언어의 대표 URL을 포함하고 각 페이지는 canonical·hreflang을 제공한다.
- 검증: `node tests/language.test.cjs` 및 `python3 tests/site_check.py`. 자동 배포도 같은 검사를 실행한다.

앱 카드와 개별 소개의 실제 아이콘 출처(2026-11-02): 나의폰트만들기·주유주유소·남친만들기·HellDia는 각 App Store ID 6792460497·1228934470·6766078049·865942771의 Apple Lookup API artworkUrl512다. 이미지는 로컬 assets에 보관한다.

2026-11-02 Apple Lookup API 확인: `com.malangsoft.customfontmaker`의 출시 이름은 **나의폰트만들기**, App Store ID는 `6792460497`, 공개 버전은 `1.1.2`다. 개발 중 표시와 TTF 내보내기 설명을 제거하고 공개 스토어의 실제 이름·설명·아이콘·링크로 맞췄다. 기존 `/myfontmaker/` 경로와 `#privacy-myfontmaker` 앵커는 유지한다.
