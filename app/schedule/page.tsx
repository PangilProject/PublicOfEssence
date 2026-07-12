import type { Metadata } from "next";
import SchedulePage from "@/views/SchedulePage/SchedulePage";

export const metadata: Metadata = {
  title: "일정 | Essence",
  description:
    "ESSENCE(에센스)의 수련회와 예배 일정 — 일시, 장소, 대상 정보를 안내합니다.",
};

export default function Page() {
  return <SchedulePage />;
}
