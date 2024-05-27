import { Route, Routes } from "react-router-dom";
import HomePage from "../Pages/HomePage/HomePage"
import WorshipPage from "../Pages/WorshipPage/WorshipPage"
import LayoutOutlet from "./LayoutOutlet";
import AboutPage from "../Pages/AboutPage/AboutPage";
import ContactPage from "../Pages/ContactPage/ContactPage";
function MyRoutes() {
    
    return (
        <Routes>
            <Route element={<LayoutOutlet />}>
                <Route index path="/" element={<HomePage />} />
                <Route path = "/about" element={<AboutPage/>} />
                <Route path="/worship" element={<WorshipPage />} />
                <Route path = "/contact" element={<ContactPage/>}/>
            </Route>
        </Routes>
    );
}

export default MyRoutes;