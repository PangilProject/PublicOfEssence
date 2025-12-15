import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import LayoutOutlet from "./LayoutOutlet";

/**
 * 🔹 페이지 컴포넌트들을 lazy 로딩으로 변경
 * 각 페이지는 실제로 해당 경로에 접근할 때만 JS chunk가 다운로드됨
 */
const HomePage = lazy(() => import("../Pages/HomePage/HomePage"));
const AboutPage = lazy(() => import("../Pages/AboutPage/AboutPage"));
const WorshipPage = lazy(() => import("../Pages/WorshipPage/WorshipPage"));
const ContactPage = lazy(() => import("../Pages/ContactPage/ContactPage"));
const SchedulePage = lazy(() => import("../Pages/SchedulePage/SchedulePage"));

function MyRoutes() {
  return (
    /**
     * 🔹 Suspense
     * - lazy 로딩되는 컴포넌트가 로드되기 전까지 fallback UI를 보여줌
     * - 전역 로딩 컴포넌트로 교체해도 좋음
     */
    <Suspense fallback={<div>페이지를 불러오는 중입니다...</div>}>
      <Routes>
        <Route element={<LayoutOutlet />}>
          <Route index path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/worship" element={<WorshipPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/schedule" element={<SchedulePage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default MyRoutes;
