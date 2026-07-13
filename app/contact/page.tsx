import ContactPage from "@/views/ContactPage/ContactPage";
import { buildPageMetadata } from "../_lib/site";

export const metadata = buildPageMetadata({
  title: "문의",
  description: "ESSENCE(에센스)에 대한 일반 문의와 재정후원 문의 안내입니다.",
  path: "/contact",
});

export default function Page() {
  return <ContactPage />;
}
