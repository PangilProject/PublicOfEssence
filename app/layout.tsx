import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import StyledComponentsRegistry from "./_lib/registry";
import SiteLayout from "@/Layout/SiteLayout";
import { SITE_URL, DEFAULT_TITLE, DEFAULT_DESCRIPTION } from "./_lib/site";

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
    "기도모임",
    "다음세대",
    "예배",
    "선교단체",
    "학교 기도모임",
  ],
  manifest: "/manifest.json",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <StyledComponentsRegistry>
          <SiteLayout>{children}</SiteLayout>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
