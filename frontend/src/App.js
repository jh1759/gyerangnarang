import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import LogoutButton from "./components/LogoutButton";

function App() {
    return (
        <Router>
            <div>
                <h1>계랑나랑</h1>
                <LogoutButton /> {/* 로그아웃 버튼 추가 */}
            </div>
            <Routes>
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<h1>홈페이지</h1>} />
            </Routes>
        </Router>
    );
}

export default App;
