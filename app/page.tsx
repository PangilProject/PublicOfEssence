import HomePage from "@/views/HomePage/HomePage";
import {
  buildPageMetadata,
  DEFAULT_DESCRIPTION,
  DEFAULT_TITLE,
  SITE_URL,
  SOCIAL_LINKS,
} from "./_lib/site";

export const metadata = buildPageMetadata({
  description: DEFAULT_DESCRIPTION,
  path: "/",
});

// 검색엔진에 조직 정보를 전달하는 구조화 데이터 (schema.org Organization)
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "ESSENCE",
  alternateName: ["에센스", "시흥시 다음세대 기도모임"],
  url: SITE_URL,
  logo: `${SITE_URL}/Img/Essence_Logo_Black_Red.png`,
  description: DEFAULT_DESCRIPTION,
  foundingDate: "2016",
  address: {
    "@type": "PostalAddress",
    addressLocality: "시흥시",
    addressRegion: "경기도",
    addressCountry: "KR",
  },
  sameAs: [
    SOCIAL_LINKS.facebook,
    SOCIAL_LINKS.youtube,
    SOCIAL_LINKS.instagram,
    SOCIAL_LINKS.linktree,
  ],
};

// 홈은 히어로가 애니메이션 텍스트뿐이라 크롤러용 h1을 시각적으로 숨겨 제공
const srOnly: React.CSSProperties = {
  position: "absolute",
  width: "1px",
  height: "1px",
  padding: 0,
  margin: "-1px",
  overflow: "hidden",
  clip: "rect(0, 0, 0, 0)",
  whiteSpace: "nowrap",
  border: 0,
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <h1 style={srOnly}>{DEFAULT_TITLE}</h1>
      <HomePage />
    </>
  );
}
