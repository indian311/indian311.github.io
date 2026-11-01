# 말랑소프트 웹 개편 시안

사용자 요청에 따라 기존 개인 개발자 지원 사이트를 말랑소프트 브랜드로 정리한 로컬 시안이다. 현재 공개되는 루트 index.html·assets/styles.css·app-ads.txt는 변경하지 않았다. 로컬 브랜치는 draft/malangsoft-hanjafriend이며 배포하지 않는다.

- index.html: 말랑소프트 홈, 한자친구 소개 카드, 기존 앱 목록, 문의.
- hanjafriend/index.html: 한자친구 상세, 아이폰·아이패드·Duo 기기별 실제 화면, 학습 방법, FAQ.
- hanjafriend/privacy.html: 한자친구 데이터·광고 처리 방침 시안.
- assets/site.css: 프레임워크나 외부 폰트 없는 반응형 스타일.
- assets/hanjafriend-*.png: 한자친구 소스 저장소의 실제 앱 원본 캡처 및 아이콘.

홈은 아이보리·코랄, 한자친구는 보라색과 책 친구 캐릭터를 쓴다. 앱 화면 내부를 편집하거나 가짜 기능을 추가하지 않는다. 광고는 홍보 이미지·소개 문구에서 제외한다. 한자친구가 아직 출시되지 않았으므로 가짜 다운로드 링크나 리뷰·사용자 수를 넣지 않았다. 기존 앱 카드의 문자/기호 타일은 시안용 그래픽이며 실제 앱 아이콘이라고 주장하지 않는다. 기존 사이트의 앱 설명·스토어 링크를 유지했다.

개인정보 문서의 원문은 hanjafriend 저장소 docs/privacy-policy.ko.md에 있다. 실제 공개 전 최신 정책과 맞춰 복사하고, 공개 URL을 앱과 AdMob에 연결한다. 이 시안의 파일 경로를 곧바로 운영 URL로 안내하지 않는다.

미리보기:

```sh
python3 -m http.server 8768 --bind 127.0.0.1 --directory design-preview/malangsoft
```

브라우저에서 http://localhost:8768/ 를 연다. 로컬 시안은 noindex이며 홈페이지에 광고·분석 스크립트를 추가하지 않았다. 2026-11-01 갱신 후 3개 페이지를 320·390·768·1024·1440px 폭에서 검사해 가로 넘침과 깨진 이미지가 없음을 확인했다. 모바일·태블릿·데스크톱 화면을 시각 검토하고, 내부 파일·앵커와 FAQ 4개의 펼침도 확인했다. 외부 스토어 링크의 실제 응답 및 실기기 Safari는 이번에 재검증하지 않았다. 사진은 한자친구 저장소 docs/site-preview/에도 보관한다.

실제 적용 시 루트 경로로 옮기고 _config.yml과 메타데이터, 운영 페이지의 기존 개인정보 앵커·메일 링크를 이어야 한다. 기존 DECISIONS.md의 영문 개인 사이트 방침은 이전 운영 기준이며 이번 브랜드 변경은 사용자의 새 요청에 따른 시안이다. root 설정/개인정보 앵커 변경과 배포는 시안 검토 뒤 별도 진행한다.


## 2026-11-01 인계 후 갱신

- 한자친구 iOS 1.0(4): 인계 기준 2026-11-01 22:02 KST 제출, Waiting for Review, 승인 후 자동 출시 예정. 홈과 소개의 상태를 심사 대기로 표시했다. App Store ID는 6829421664, Bundle ID는 kr.hanjafriend.app이며 아직 다운로드 링크는 추가하지 않았다.
- 캡처는 앱 저장소를 수정하지 않고 `/Users/sywoo/Github/hanja_mania/app-store/raw/`의 최신 PNG를 그대로 복사했다. `hanjafriend-writing.png`는 `iphone/02-compare.png`, `hanjafriend-statistics.png`는 `iphone/05-statistics.png`, `hanjafriend-ipad.png`는 `ipad/02-compare.png`, Duo 두 장은 각 기기 폴더의 `02-compare.png`다. 아이콘은 기존 것을 유지했다.
- 개인정보 본문은 `docs/privacy-policy.ko.md`와 공백·마크업을 제외한 텍스트가 일치한다. FAQ의 기록 보관 설명에도 같은 iCloud 계정의 CloudKit 동기화와 조건을 반영했다.
- 루트 index.html·assets/styles.css·app-ads.txt·_config.yml은 변경하지 않았다. 운영 배포와 App Store·AdMob URL 변경은 진행하지 않았다.

## 운영 반영 승인

2026-11-01 사용자가 운영 배포를 요청했다. 시안을 루트와 `hanjafriend/`로 반영하며 기존 개인정보 앵커·지원 링크·app-ads.txt를 보존한다. 이 폴더는 시안 이력으로 유지하고 Pages 빌드에서 제외한다.
