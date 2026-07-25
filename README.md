# Public of Essence

경기도 시흥시 기반 청년·청소년 선교단체 **ESSENCE(에센스)** 의 공식 홈페이지입니다.
집회·수련회 일정과 지난 예배 아카이브, 단체 소개를 정적 사이트로 제공합니다.

🔗 **Live:** https://essence2016.netlify.app

<!-- 대표 스크린샷: docs/readme/hero.png 를 추가하면 아래 이미지가 표시됩니다 -->
![ESSENCE 홈페이지](docs/readme/hero.png)

## 목차

- [화면 미리보기](#화면-미리보기)
- [기술 스택](#기술-스택)
- [프로젝트 구조](#프로젝트-구조)
- [시작하기](#시작하기)
- [콘텐츠 수정 가이드](#콘텐츠-수정-가이드)
- [배포](#배포)

## 화면 미리보기

| 소개 (About) | 지난 집회 (Worship) |
| --- | --- |
| ![About](docs/readme/about.png) | ![Worship](docs/readme/worship.png) |

| 일정 (Schedule) | 자료실 (Resource) |
| --- | --- |
| ![Schedule](docs/readme/schedule.png) | ![Resource](docs/readme/resource.png) |

| 문의·후원 (Contact) | 집회 상세 (Worship Detail) |
| --- | --- |
| ![Contact](docs/readme/contact.png) | ![Worship Detail](docs/readme/worship-detail.png) |

## 기술 스택

| 구분 | 사용 기술 |
| --- | --- |
| 프레임워크 | [Next.js 16](https://nextjs.org/) (App Router, `output: "export"` 정적 export) |
| 언어 | TypeScript, React 19 |
| 스타일링 | styled-components (SSR 인라인) |
| 캐러셀 | embla-carousel (autoplay / fade) |
| 영상 | react-youtube |
| 이미지 호스팅 | Cloudinary (`f_auto`, `q_auto` 자동 최적화) |
| 배포 | Netlify (정적 호스팅) |

SSR 서버 없이 **빌드 타임에 모든 페이지를 완성된 HTML로 생성**(static export)해 SEO와 로딩 속도를 확보합니다.

## 프로젝트 구조

라우팅·SEO를 담당하는 `app/` 과 화면·컴포넌트를 담당하는 `src/` 를 분리했습니다.

```
app/                    # Next.js App Router — 라우팅 & SEO
  layout.tsx            # 전역 metadata, 파비콘/OG, GA
  page.tsx              # 홈 (/)
  about/ contact/ resource/
  worship/[slug]/       # 지난 예배 상세
  schedule/[slug]/      # 일정 상세
  sitemap.ts robots.ts  # 검색엔진용 자동 생성
  _lib/
    site.ts             # 사이트 URL·타이틀·설명, 페이지 metadata 헬퍼
    cloudinary.ts       # Cloudinary URL 생성 헬퍼

src/                    # 뷰 & 재사용 컴포넌트
  views/                # 페이지별 UI (HomePage, AboutPage, WorshipPage ...)
    */constants/        # ★ 페이지 콘텐츠 데이터 (아래 가이드 참고)
  Layout/               # Header, Footer, menu.ts (사이트 메뉴)
  Components/           # PageHero, EventDetail, PhotoGallery 등

public/                 # 정적 자산 (favicon, 아이콘, og-image, manifest)
docs/                   # 기획·마이그레이션 기록, README 이미지
```

## 시작하기

**요구사항:** Node.js 22 이상 (Next.js 16은 Node 20.9+ 필수)

```bash
npm install      # 의존성 설치
npm run dev      # 개발 서버 (http://localhost:3000)
npm run build    # 정적 사이트 빌드 → out/
```

| 스크립트 | 설명 |
| --- | --- |
| `npm run dev` | 개발 서버 실행 |
| `npm run build` | 정적 사이트 빌드 (`out/` 생성) |
| `npm run start` | 빌드 결과 로컬 실행 |

### 환경 변수

| 변수 | 설명 | 필수 |
| --- | --- | --- |
| `NEXT_PUBLIC_GA_ID` | Google Analytics 4 측정 ID. 설정 시에만 분석 스크립트 로드 | 선택 |

## 콘텐츠 수정 가이드

집회·일정 등 대부분의 콘텐츠는 **`src/views/*/constants/` 의 데이터 파일**만 수정하면 됩니다. 코드 로직을 건드릴 필요가 없습니다.

| 수정할 내용 | 파일 |
| --- | --- |
| 지난 예배 목록/상세 | `src/views/WorshipPage/constants/index.ts` (`worshipList`) |
| 일정(수련회·집회) | `src/views/SchedulePage/constants/index.ts` (`scheduleList`) |
| 홈 화면 콘텐츠 | `src/views/HomePage/constants/index.ts` |
| 사이트 메뉴 | `src/Layout/menu.ts` |
| 사이트 설명·SEO 문구 | `app/_lib/site.ts` |

### 이미지 추가 (Cloudinary)

이미지는 저장소에 넣지 않고 **Cloudinary에 업로드**한 뒤 `public ID` 만 데이터에 적습니다.

1. Cloudinary에 이미지를 업로드하고 `public ID` 를 확인합니다.
2. 포스터는 `cldImage("public-id", 800)`, 갤러리 사진은 `photos: [{ id: "public-id", alt: "설명" }]` 형태로 넣습니다.

```ts
// src/views/SchedulePage/constants/index.ts 예시
{
  slug: "2024-summer-camp",        // 상세 페이지 URL (/schedule/2024-summer-camp)
  title: "2024 여름 수련회",
  date: "2024.07.23 ~ 07.24",
  place: "나무들의 집",
  target: "중 • 고등부",
  image: cldImage("2024-summer-camp", 800),   // 포스터
  image_alt: "2024 여름 수련회 포스터",
  description: "…",
  topic: "REBUILD",
  verse: { text: "…", reference: "느헤미야 2:18" },  // 선택
  photos: [                                          // 선택 — 없으면 사진 섹션 미표시
    { id: "camp-2024-p1", alt: "현장 사진 1" },
  ],
}
```

## 배포

`main` 브랜치에 푸시하면 **Netlify가 자동으로 빌드·배포**합니다. (설정: [`netlify.toml`](netlify.toml))

- 빌드 명령: `npm run build` → 결과물 `out/` 디렉토리 배포
- Node 22 환경에서 빌드
