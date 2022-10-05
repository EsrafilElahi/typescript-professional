import { Routes, Route } from "react-router-dom"
import AdminPage from "./Admin"
import BlogPage from "./Blogs"
import HomePage from "./Home"
export default function Pages() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/blogs" element={<BlogPage />} />
            <Route path="/dashboard" element={<AdminPage />} />
        </Routes>
    )
}