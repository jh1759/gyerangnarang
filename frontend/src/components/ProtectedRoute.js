import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
    const isAuthenticated = localStorage.getItem("user");

    if (!isAuthenticated) {
        return <Navigate to="/login" />;  // 로그인 안 되어 있으면 로그인 페이지로 리디렉트
    }

    return children;
}

export default ProtectedRoute;
