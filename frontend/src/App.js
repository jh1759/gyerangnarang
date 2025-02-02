import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import LogoutButton from "./components/LogoutButton";
import ProtectedRoute from "./components/ProtectedRoute";  // ✅ 보호된 라우트 추가

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const user = localStorage.getItem("user");
        setIsAuthenticated(!!user);  // `user`가 있으면 true, 없으면 false
    }, []);

    return (
        <Router>
            <div>
                <h1>계랑나랑</h1>
                {isAuthenticated && <LogoutButton />} {/* 로그인 상태일 때만 로그아웃 버튼 표시 */}
            </div>
            <Routes>
                {/* ✅ 로그인 상태에서 로그인/회원가입 페이지로 이동 시 홈으로 리디렉트 */}
                <Route path="/signup" element={isAuthenticated ? <Navigate to="/" /> : <Signup />} />
                <Route path="/login" element={isAuthenticated ? <Navigate to="/" /> : <Login />} />

                {/* ✅ 보호된 페이지 (로그인한 유저만 접근 가능) */}
                <Route path="/" element={<ProtectedRoute><h1>홈페이지</h1></ProtectedRoute>} />
            </Routes>
        </Router>
    );
}

export default App;
