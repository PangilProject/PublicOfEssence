import ResourcePage from "@/views/ResourcePage/ResourcePage";
import { buildPageMetadata } from "../_lib/site";

export const metadata = buildPageMetadata({
  title: "자료",
  description:
    "ESSENCE(에센스)가 제공하는 신앙 자료 — 설교노트 등 예배와 묵상을 돕는 자료를 다운로드할 수 있습니다.",
  path: "/resource",
});

export default function Page() {
  return <ResourcePage />;
}
