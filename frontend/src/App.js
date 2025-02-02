import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import LogoutButton from "./components/LogoutButton";

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const user = localStorage.getItem("user");
        if (user) {
            setIsAuthenticated(true);
        } else {
            setIsAuthenticated(false);
        }
    }, []);

    return (
        <Router>
            <div>
                <h1>계랑나랑</h1>
                {isAuthenticated && <LogoutButton />} {/* 로그인 상태일 때만 표시 */}
            </div>
            <Routes>
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={isAuthenticated ? <Navigate to="/" /> : <Login />} />
                <Route path="/" element={isAuthenticated ? <h1>홈페이지</h1> : <Navigate to="/login" />} />
            </Routes>
        </Router>
    );
}

export default App;
