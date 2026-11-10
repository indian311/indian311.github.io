# Current site decisions — 2026-11-01

- 2026-11-02: Order published app cards by initial App Store release date, newest first: 나의폰트만들기 → 남친만들기 → 주유주유소 → HellDia for Diablo 3. Use releaseDate, not currentVersionReleaseDate. HanjaFriend remains a separate unreleased feature.

- User removed #nowplaying and Solo Drink Guide from app listings, requested short pages for remaining apps and browser-language-based Korean/English pages. Keep existing policy anchors and archive removed app notices. Explicit language selection overrides the browser preference.

- User selected https://malangsoft.pages.dev/ as the primary URL and requested Google discovery. Use Cloudflare Pages Direct Upload, canonical metadata, sitemap and Search Console verification. Keep the GitHub Pages site compatible with existing app URLs.

- User authorized production deployment of the Malangsoft renewal on 2026-11-01.
- Korean copy, ivory/coral home, purple HanjaFriend book character.
- Static HTML/CSS, no external fonts, analytics or advertising scripts.
- Preserve existing app descriptions, store/support links, privacy anchors and app-ads.txt.
- HanjaFriend uses actual app captures only; no fabricated reviews, counts or download links.
- HanjaFriend is awaiting App Store review per handoff; store and AdMob URL settings are managed separately after publication.
- Production content lives at the root and hanjafriend/. Exclude design-preview/ from Pages.
- This renewal supersedes the English personal-site direction recorded below.

---

# Site Decisions

This file records the current product and content decisions for the Sangyoon Woo app support site.

## Purpose

- The site is a personal app page and official support destination for mobile apps by Sangyoon Woo.
- It should feel like a quiet independent developer website, not a blog or marketing landing page.
- The site should stay lightweight, static, and easy to maintain.

## Tone

- Use concise English copy with a calm, professional voice.
- Avoid hype, jokes, playful wording, exaggerated claims, and trend-driven language.
- Keep the visual identity white-based, restrained, and mature.

## Structure

- Header brand: `Sangyoon Woo`.
- Navigation: `Apps`, `Support`, `Privacy`, `Contact`.
- Main sections: intro, applications, support, privacy, footer.
- `index.html` is the source of truth for app listings, support links, and privacy notices.
- `assets/styles.css` contains all styling. Avoid unnecessary external libraries.

## App List

Current order:

1. `MyFontMaker` - in development.
2. `남친만들기 - 캠퍼스 연애 시뮬레이션`.
3. `GasGasStation`.
4. `HellDia for Diablo 3`.
5. `혼술남녀`.
6. `#nowplaying - quickly post`.

Use official store names where available. If an app has not been released yet, show a restrained status label such as `In development` instead of inventing store links.

## Platform Wording

- Do not describe the portfolio as iOS-only.
- Some apps are available on both iOS and Android.
- Use broader wording such as `mobile apps`, `applications`, `platform`, and `app stores`.

## Support

- Contact email: `indian311@icloud.com`.
- Support requests should ask for app name, platform, device model, OS version, and a brief issue description.

## Privacy

- Keep privacy copy minimal and app-specific.
- The website itself does not use analytics, advertising scripts, account registration, or tracking cookies.
- For MyFontMaker, mention local project storage and optional export, backup, purchase, and advertising features without overstating policy details.

## Repository Notes

- This repository was originally forked from `mmistakes/minimal-mistakes`, but the site content has been replaced with a lightweight static support site.
- The GitHub `forked from` label is repository metadata and cannot be removed by code changes. Detaching the fork requires GitHub Support or recreating the repository.

## 2026-11-11: Flower Pig public pages

- 기존 정적 사이트·GitHub Pages 호환·Cloudflare canonical 구조 안에 난다난다꽃돼지의 한국어/영어 소개·지원·개인정보 페이지를 추가한다. 새로운 호스팅 서비스는 만들지 않는다.
- 공개 브랜드는 말랑소프트, 문의는 기존 `indian311@icloud.com`을 사용한다. 플랫폼 순위 설정과 스토어 배포는 준비 중으로 표시하고 다운로드·TestFlight 공개 링크를 만들지 않는다.
- 기존 출시 앱의 출시일 정렬을 유지하고 미출시 게임 카드는 그 뒤에 둔다. 이미지에는 실제 게임 아이콘과 캡처를 사용한다.
