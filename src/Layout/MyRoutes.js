import { Routes, Route } from "react-router-dom";
import { lazy } from "react";
import LayoutOutlet from "./LayoutOutlet";
import ResourcePage from "../Pages/ResourcePage/ResourcePage";

const HomePage = lazy(() => import("../Pages/HomePage/HomePage"));
const AboutPage = lazy(() => import("../Pages/AboutPage/AboutPage"));
const WorshipPage = lazy(() => import("../Pages/WorshipPage/WorshipPage"));
const ContactPage = lazy(() => import("../Pages/ContactPage/ContactPage"));
const SchedulePage = lazy(() => import("../Pages/SchedulePage/SchedulePage"));

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
