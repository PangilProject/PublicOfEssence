import type { Metadata } from "next";
import Link from "next/link";
import image404 from "@/assets/images/Image404.png";

export const metadata: Metadata = {
  title: "페이지를 찾을 수 없습니다 | Essence",
};

export default function NotFound() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
        padding: "60px 0",
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={image404.src}
        alt="404 - 페이지를 찾을 수 없습니다"
        style={{ maxWidth: "300px", width: "100%" }}
      />
      <h1 style={{ fontSize: "24px" }}>페이지를 찾을 수 없습니다</h1>
      <Link href="/" style={{ color: "#ff6347", textDecoration: "none" }}>
        홈으로 돌아가기
      </Link>
    </div>
  );
}
