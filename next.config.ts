import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 정적 export: 모든 페이지를 빌드 타임에 완성된 HTML로 생성 (SEO 핵심)
  output: "export",
  // Netlify 정적 호스팅의 디렉토리 매칭과 일치 (/about → /about/index.html)
  trailingSlash: true,
  compiler: {
    // styled-components SSR: 빌드 HTML에 스타일 인라인 (FOUC 방지)
    styledComponents: true,
  },
  images: {
    // static export에는 이미지 최적화 서버가 없으므로 비활성화 (이미지는 빌드 전 사전 최적화)
    unoptimized: true,
  },
};

export default nextConfig;
