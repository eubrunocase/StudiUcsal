import { AboutUs } from "../pages/AboutUs/index.jsx"
import { Contact } from "../pages/Contact/index.jsx"
import { Courses } from "../pages/Courses/index.jsx"
import { Register } from "../pages/Register/index.jsx"
import { Home } from "../pages/Home/index.jsx"
import { Route, Routes } from "react-router-dom"

export function AppRoutes() {
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/register" element={<Register />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/aboutus" element={<AboutUs />} />
        </Routes>
    )
}