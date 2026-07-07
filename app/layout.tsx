import type { Metadata } from "next";
import type { ReactNode } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./globals.css";
import StyledComponentsRegistry from "./_lib/registry";

// 페이지별 세부 metadata는 Phase 4에서 확장
export const metadata: Metadata = {
  metadataBase: new URL("https://essenceworship.netlify.app"),
  title: "Essence",
  description: "경기도 시흥시 고등학교 기독교 동아리 연합 Essence 공식 사이트",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
