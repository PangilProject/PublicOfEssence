import type { Metadata } from "next";
import type { ReactNode } from "react";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import StyledComponentsRegistry from "./_lib/registry";
import SiteLayout from "@/Layout/SiteLayout";
import { SITE_URL, DEFAULT_TITLE, DEFAULT_DESCRIPTION } from "./_lib/site";

// GA4 측정 ID — 설정된 경우에만 분석 스크립트를 로드
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: "%s | Essence",
  },
  description: DEFAULT_DESCRIPTION,
  keywords: [
    "ESSENCE",
    "에센스",
    "시흥시",
    "다음세대",
    "복음화",
    "사역 단체",
    "예배",
    "집회",
    "학교 기도모임",
  ],
  manifest: "/manifest.json",
  icons: {
    // 구글 검색결과 파비콘은 48px 이상 정사각형 아이콘을 요구한다.
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/Img/icon-48.png", type: "image/png", sizes: "48x48" },
      { url: "/Img/icon-96.png", type: "image/png", sizes: "96x96" },
      { url: "/Img/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/Img/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/Img/icon-192.png", sizes: "192x192" }],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <StyledComponentsRegistry>
          <SiteLayout>{children}</SiteLayout>
        </StyledComponentsRegistry>
      </body>
      {GA_ID && <GoogleAnalytics gaId={GA_ID} />}
    </html>
  );
}
