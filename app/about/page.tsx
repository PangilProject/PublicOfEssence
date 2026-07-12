import type { Metadata } from "next";
import AboutPage from "@/views/AboutPage/AboutPage";

export const metadata: Metadata = {
  title: "소개 | Essence",
  description:
    "ESSENCE(에센스)는 시흥시 중·고등학교 기도모임에서 시작된 선교단체입니다. 소개, 사역, 비전을 확인하세요.",
};

export default function Page() {
  return <AboutPage />;
}
