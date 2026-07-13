import { Routes, Route } from "react-router-dom";
import { lazy } from "react";
import LayoutOutlet from "./LayoutOutlet";
import ResourcePage from "../views/ResourcePage/ResourcePage";

const HomePage = lazy(() => import("../views/HomePage/HomePage"));
const AboutPage = lazy(() => import("../views/AboutPage/AboutPage"));
const WorshipPage = lazy(() => import("../views/WorshipPage/WorshipPage"));
const ContactPage = lazy(() => import("../views/ContactPage/ContactPage"));
const SchedulePage = lazy(() => import("../views/SchedulePage/SchedulePage"));

function MyRoutes() {
  return (
    <Routes>
      <Route element={<LayoutOutlet />}>
        <Route index path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/worship" element={<WorshipPage />} />
        <Route path="/schedule" element={<SchedulePage />} />
        <Route path="/resource" element={<ResourcePage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Route>
    </Routes>
  );
}

export default MyRoutes;
