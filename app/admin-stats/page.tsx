import type { Metadata } from "next";

// 숨긴 관리자용 통계 페이지 — 검색 색인 차단(메뉴·sitemap에도 미노출)
export const metadata: Metadata = {
  title: "방문 통계",
  robots: { index: false, follow: false },
};

// Looker Studio 대시보드 삽입 URL
const EMBED_URL =
  "https://lookerstudio.google.com/embed/reporting/60689056-2760-416e-bb2d-d864d65c977f/page/kIV1C";

export default function AdminStatsPage() {
  return (
    <main
      style={{
        maxWidth: 1200,
        margin: "0 auto",
        padding: "32px 20px 48px",
      }}
    >
      <h1 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: 8 }}>
        ESSENCE 방문 통계
      </h1>
      <p style={{ color: "#666", fontSize: "0.9rem", marginBottom: 24 }}>
        Google Analytics 기반 방문자·유입 경로 대시보드입니다.
      </p>

      <div
        style={{
          position: "relative",
          width: "100%",
          height: "82vh",
          minHeight: 560,
          borderRadius: 12,
          overflow: "hidden",
          boxShadow: "0 2px 16px rgba(0,0,0,0.08)",
        }}
      >
        <iframe
          title="ESSENCE 방문 통계 대시보드"
          src={EMBED_URL}
          style={{ width: "100%", height: "100%", border: 0 }}
          allowFullScreen
        />
      </div>
    </main>
  );
}
