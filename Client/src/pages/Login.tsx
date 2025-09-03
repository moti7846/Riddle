import { useContext, useState } from "react";
import { UserContext } from "../App";

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(useContext(UserContext))
  const [msg, setMsg] = useState("")


  async function handleSubmit(e : React.FormEvent) {
    e.preventDefault();
    if (isLogin) {
      const response = await fetch("http://localhost:3200/player/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ username: userName, password: password })
      });
      if (response.status === 200) {
        const responseToken = await response.json()
        user.userName = userName;
        user.token = responseToken.token;
        user.role = responseToken.role;
        setUser({ ...user })
        setMsg("You have successfully connected.")
        return
      }
      const res = await response.json()
      setMsg(res.message || "Server error. Try later.")
    }
    else {
      const response = await fetch("http://localhost:3200/player/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ username: userName, password: password })
      });
      if (response.status === 201) {
        setMsg("The account has been created successfully, you can now log in.")
        return
      }
      const res = await response.json()
      setMsg(res.message || "Server error. Try later.")

    }
  }
  return (
    <div>
      <h1>hello {user.userName}</h1>
      <h1>{isLogin ? "Login" : "Signup"}</h1>
      <button onClick={() => setIsLogin(!isLogin)}>
        Switch to <strong>{isLogin ? "Signup" : "Login"}</strong>
      </button>
      <form onSubmit={handleSubmit}>
        <input type="text" required onChange={(e) => setUserName(e.target.value)} placeholder="User Name" />
        <input type="password" required onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
        <button type="submit">{isLogin ? "Login" : "Signup"}</button>
      </form>
      <p>{msg}</p>
    </div>
  )
}
