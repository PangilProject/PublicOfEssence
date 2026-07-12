import type { Metadata } from "next";
import ResourcePage from "@/views/ResourcePage/ResourcePage";

export const metadata: Metadata = {
  title: "자료 | Essence",
  description:
    "ESSENCE(에센스)가 제공하는 신앙 자료 — 설교노트 등 예배와 묵상을 돕는 자료를 다운로드할 수 있습니다.",
};

export default function Page() {
  return <ResourcePage />;
}
