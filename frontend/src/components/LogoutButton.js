import { useNavigate } from "react-router-dom";

function LogoutButton({ setIsAuthenticated }) {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("user"); // 저장된 사용자 정보 삭제
        setIsAuthenticated(false); // ✅ 상태 즉시 업데이트
        alert("로그아웃 되었습니다.");
        navigate("/login"); // ✅ 로그인 페이지로 이동
    };

    return (
        <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded-md">
            로그아웃
        </button>
    );
}

export default LogoutButton;
