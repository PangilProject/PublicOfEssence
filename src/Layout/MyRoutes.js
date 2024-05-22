import { Route, Routes } from "react-router-dom";
import HomePage from "../Pages/HomePage/HomePage"
import WorshipPage from "../Pages/WorshipPage/WorshipPage"
import LayoutOutlet from "./LayoutOutlet";
function MyRoutes() {
    
    return (
        <Routes>
            <Route element={<LayoutOutlet />}>
                <Route index path="/home" element={<HomePage/> }/>
                <Route path = "/worship" element={<WorshipPage/>}/>
            </Route>
        </Routes>
    );
}

export default MyRoutes;