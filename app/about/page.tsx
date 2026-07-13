import AboutPage from "@/views/AboutPage/AboutPage";
import { buildPageMetadata } from "../_lib/site";

export const metadata = buildPageMetadata({
  title: "소개",
  description:
    "ESSENCE(에센스)는 시흥시 중·고등학교 기도모임에서 시작된 선교단체입니다. 소개, 사역, 비전을 확인하세요.",
  path: "/about",
});

export default function Page() {
  return <AboutPage />;
}
