import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSignup = async () => {
        try {
            const response = await fetch("http://localhost:8080/api/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, email, password }),
            });

            if (response.ok) {
                alert("회원가입 성공! 로그인 해주세요.");
                navigate("/login");
            } else {
                alert("회원가입 실패! 다시 시도해주세요.");
            }
        } catch (error) {
            alert("서버 오류! 나중에 다시 시도해주세요.");
            console.error(error);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-96">
                <h2 className="text-2xl font-bold text-center mb-6">회원가입</h2>
                <input
                    type="text"
                    placeholder="사용자명"
                    className="w-full px-4 py-2 border rounded-md mb-4"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
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
                    onClick={handleSignup}
                    className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition"
                >
                    회원가입
                </button>
                <p className="mt-4 text-center">
                    이미 계정이 있으신가요? <a href="/login" className="text-blue-500">로그인</a>
                </p>
            </div>
        </div>
    );
}

export default Signup;
