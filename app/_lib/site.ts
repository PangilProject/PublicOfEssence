import type { Metadata } from "next";

export const SITE_URL = "https://essence2016.netlify.app";
export const SITE_NAME = "ESSENCE";
export const DEFAULT_TITLE = "ESSENCE(에센스)";
export const DEFAULT_DESCRIPTION =
  "ESSENCE(에센스)는 시흥시 다음세대의 복음화를 위해 청년과 청소년이 모인 사역 단체입니다. 학교와 일상에 십자가를 세우는 세대를 세워갑니다.";

export const SOCIAL_LINKS = {
  facebook: "https://www.facebook.com/profile.php?id=100064473554394",
  youtube: "https://www.youtube.com/channel/UCwzG4MH4hI9GUm9iJcq0sLQ",
  instagram: "https://www.instagram.com/essence_2015/",
  linktree: "https://linktr.ee/ESSENCE_since2016",
};

interface PageMetadataInput {
  /** 페이지 제목 — 생략하면 사이트 기본 타이틀 사용 (홈) */
  title?: string;
  description: string;
  /** 라우트 경로 (예: "/about") — canonical과 og:url에 사용 */
  path: string;
  /** OG 이미지 절대 URL — 생략하면 기본 /og-image.jpg 사용 */
  image?: string;
}

/**
 * 페이지별 metadata 생성 헬퍼.
 * openGraph는 상위 metadata와 병합되지 않고 통째로 교체되므로
 * 페이지마다 title/description/url/images를 모두 채워서 반환한다.
 */
export function buildPageMetadata({
  title,
  description,
  path,
  image,
}: PageMetadataInput): Metadata {
  const canonical = path === "/" ? "/" : `${path}/`;
  const ogTitle = title ? `${title} | Essence` : DEFAULT_TITLE;
  const ogImages = image
    ? [{ url: image, alt: ogTitle }]
    : [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "ESSENCE 로고" }];

  return {
    ...(title ? { title } : {}),
    description,
    alternates: { canonical },
    openGraph: {
      type: "website",
      locale: "ko_KR",
      siteName: SITE_NAME,
      url: canonical,
      title: ogTitle,
      description,
      images: ogImages,
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
      images: [image ?? "/og-image.jpg"],
    },
  };
}
