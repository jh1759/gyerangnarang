import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa"; // ✅ 아이콘 추가

function Signup() {
    const [username, setUsername] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSignup = async () => {
        try {
            const response = await fetch("http://localhost:8080/api/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, firstName, lastName, email, password }),
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
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-purple-500">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">회원가입</h2>
                <div className="space-y-4">
                    <div className="relative">
                        <FaUser className="absolute left-3 top-3 text-gray-400" />
                        <input
                            type="text"
                            placeholder="사용자명"
                            className="w-full pl-10 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="relative">
                        <FaUser className="absolute left-3 top-3 text-gray-400" />
                        <input
                            type="text"
                            placeholder="이름 (First Name)"
                            className="w-full pl-10 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    </div>
                    <div className="relative">
                        <FaUser className="absolute left-3 top-3 text-gray-400" />
                        <input
                            type="text"
                            placeholder="성 (Last Name)"
                            className="w-full pl-10 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </div>
                    <div className="relative">
                        <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
                        <input
                            type="email"
                            placeholder="이메일"
                            className="w-full pl-10 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="relative">
                        <FaLock className="absolute left-3 top-3 text-gray-400" />
                        <input
                            type="password"
                            placeholder="비밀번호"
                            className="w-full pl-10 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button
                        onClick={handleSignup}
                        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition font-semibold"
                    >
                        회원가입
                    </button>
                    <p className="mt-4 text-center text-gray-600">
                        이미 계정이 있으신가요? <a href="/login" className="text-blue-500 font-semibold">로그인</a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Signup;
