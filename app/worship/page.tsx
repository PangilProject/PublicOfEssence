import type { Metadata } from "next";
import WorshipPage from "@/views/WorshipPage/WorshipPage";

export const metadata: Metadata = {
  title: "집회 | Essence",
  description:
    "2016년부터 이어온 ESSENCE(에센스)의 집회 기록 — 일자, 장소, 주제와 함께 지난 집회들을 소개합니다.",
};

export default function Page() {
  return <WorshipPage />;
}
