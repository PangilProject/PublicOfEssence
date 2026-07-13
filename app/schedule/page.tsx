import SchedulePage from "@/views/SchedulePage/SchedulePage";
import { buildPageMetadata } from "../_lib/site";

export const metadata = buildPageMetadata({
  title: "일정",
  description:
    "ESSENCE(에센스)의 수련회와 예배 일정 — 일시, 장소, 대상 정보를 안내합니다.",
  path: "/schedule",
});

export default function Page() {
  return <SchedulePage />;
}
