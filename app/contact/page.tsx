import type { Metadata } from "next";
import ContactPage from "@/views/ContactPage/ContactPage";

export const metadata: Metadata = {
  title: "문의 | Essence",
  description: "ESSENCE(에센스)에 대한 일반 문의와 재정후원 문의 안내입니다.",
};

export default function Page() {
  return <ContactPage />;
}
