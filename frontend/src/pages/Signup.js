import { useState } from "react";

function Signup() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");  // ✅ 추가
    const [lastName, setLastName] = useState("");  // ✅ 추가

    const handleSignup = async () => {
        try {
            const response = await fetch("http://localhost:8080/api/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, email, password, firstName, lastName }),
            });

            if (response.ok) {
                alert("회원가입 성공! 로그인 해주세요.");
                window.location.href = "/login";
            } else {
                const data = await response.json();
                alert(`회원가입 실패: ${data.message}`);
            }
        } catch (error) {
            alert("서버 오류! 나중에 다시 시도해주세요.");
            console.error(error);
        }
    };

    return (
        <div>
            <h2>회원가입</h2>
            <input type="text" placeholder="사용자명" value={username} onChange={(e) => setUsername(e.target.value)} />
            <input type="email" placeholder="이메일" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="비밀번호" value={password} onChange={(e) => setPassword(e.target.value)} />
            <input type="text" placeholder="이름" value={firstName} onChange={(e) => setFirstName(e.target.value)} />  {/* ✅ 추가 */}
            <input type="text" placeholder="성" value={lastName} onChange={(e) => setLastName(e.target.value)} />  {/* ✅ 추가 */}
            <button onClick={handleSignup}>가입하기</button>
        </div>
    );
}

export default Signup;
