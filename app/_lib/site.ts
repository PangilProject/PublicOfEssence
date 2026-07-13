import type { Metadata } from "next";

export const SITE_URL = "https://essenceworship.netlify.app";
export const SITE_NAME = "ESSENCE";
export const DEFAULT_TITLE = "Essence — 시흥시 다음세대 기도모임";
export const DEFAULT_DESCRIPTION =
  "ESSENCE(에센스)는 경기도 시흥시 중·고등학교 기도모임에서 시작된 선교단체입니다. 그리스도인의 본질을 기억하며 다음세대와 함께 예배합니다.";

export const SOCIAL_LINKS = {
  facebook: "https://www.facebook.com/profile.php?id=100064473554394",
  youtube: "https://www.youtube.com/channel/UCwzG4MH4hI9GUm9iJcq0sLQ",
  instagram: "https://www.instagram.com/essence_2016/",
  linktree: "https://linktr.ee/ESSENCE_since2016",
};

interface PageMetadataInput {
  /** 페이지 제목 — 생략하면 사이트 기본 타이틀 사용 (홈) */
  title?: string;
  description: string;
  /** 라우트 경로 (예: "/about") — canonical과 og:url에 사용 */
  path: string;
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
}: PageMetadataInput): Metadata {
  const canonical = path === "/" ? "/" : `${path}/`;
  const ogTitle = title ? `${title} | Essence` : DEFAULT_TITLE;

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
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: "ESSENCE 로고",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
      images: ["/og-image.jpg"],
    },
  };
}
