import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import LogoutButton from "./components/LogoutButton";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem("user"));

    useEffect(() => {
        const checkAuth = () => {
            setIsAuthenticated(!!localStorage.getItem("user"));
        };

        window.addEventListener("storage", checkAuth); // ✅ localStorage 변경 감지
        return () => window.removeEventListener("storage", checkAuth);
    }, []);

    return (
        <Router>
            <div>
                <h1>계랑나랑</h1>
                {isAuthenticated && <LogoutButton setIsAuthenticated={setIsAuthenticated} />} {/* ✅ 상태 업데이트 */}
            </div>
            <Routes>
                <Route path="/signup" element={isAuthenticated ? <Navigate to="/" /> : <Signup />} />
                <Route path="/login" element={isAuthenticated ? <Navigate to="/" /> : <Login />} />
                <Route path="/logout" element={<Navigate to="/login" />} />
                <Route path="/" element={<ProtectedRoute><h1>홈페이지</h1></ProtectedRoute>} />
            </Routes>
        </Router>
    );
}

export default App;
