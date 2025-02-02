import { useState } from "react";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        try {
            const response = await fetch("http://localhost:8080/api/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });

            if (response.ok) {
                const data = await response.json();
                alert("로그인 성공!");
                localStorage.setItem("user", JSON.stringify(data));
                window.location.href = "/";
            } else {
                alert("로그인 실패! 이메일 또는 비밀번호를 확인해주세요.");
            }
        } catch (error) {
            alert("서버 오류! 나중에 다시 시도해주세요.");
            console.error(error);
        }
    };

    return (
        <div>
            <h2>로그인</h2>
            <input type="email" placeholder="이메일" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="비밀번호" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleLogin}>로그인</button>
        </div>
    );
}

export default Login;
