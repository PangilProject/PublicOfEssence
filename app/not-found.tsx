import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "페이지를 찾을 수 없습니다 | Essence",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        minHeight: "60vh",
        padding: "80px 20px",
      }}
    >
      <p
        style={{
          fontSize: "clamp(80px, 20vw, 160px)",
          fontWeight: 800,
          lineHeight: 1,
          letterSpacing: "-0.04em",
          color: "#ff6347",
          margin: 0,
        }}
      >
        404
      </p>
      <h1
        style={{
          fontSize: "clamp(20px, 5vw, 28px)",
          fontWeight: 700,
          margin: "24px 0 12px",
        }}
      >
        페이지를 찾을 수 없습니다
      </h1>
      <p
        style={{
          color: "#666",
          fontSize: "15px",
          lineHeight: 1.6,
          maxWidth: 420,
          margin: "0 auto 32px",
        }}
      >
        요청하신 페이지가 사라졌거나 주소가 변경되었을 수 있습니다.
        <br />
        아래 버튼을 눌러 홈으로 돌아가 주세요.
      </p>
      <Link
        href="/"
        style={{
          display: "inline-block",
          padding: "14px 30px",
          background: "#ff6347",
          color: "#fff",
          borderRadius: 999,
          textDecoration: "none",
          fontWeight: 600,
          fontSize: "15px",
        }}
      >
        홈으로 돌아가기
      </Link>
    </main>
  );
}
