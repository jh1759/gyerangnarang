import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ setIsAuthenticated }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const response = await fetch("http://localhost:8080/api/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });

            if (response.ok) {
                const data = await response.json();
                localStorage.setItem("user", JSON.stringify(data));
                setIsAuthenticated(true); // ✅ 로그인 후 즉시 상태 업데이트
                navigate("/");
            } else {
                alert("로그인 실패! 이메일 또는 비밀번호를 확인해주세요.");
            }
        } catch (error) {
            alert("서버 오류! 나중에 다시 시도해주세요.");
            console.error(error);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-96">
                <h2 className="text-2xl font-bold text-center mb-6">로그인</h2>
                <input
                    type="email"
                    placeholder="이메일"
                    className="w-full px-4 py-2 border rounded-md mb-4"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="비밀번호"
                    className="w-full px-4 py-2 border rounded-md mb-4"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button
                    onClick={handleLogin}
                    className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
                >
                    로그인
                </button>
                <p className="mt-4 text-center">
                    계정이 없으신가요? <a href="/signup" className="text-blue-500">회원가입</a>
                </p>
            </div>
        </div>
    );
}

export default Login;
