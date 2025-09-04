import { useContext } from "react"
import { UserContext } from "../App"
import { useNavigate } from "react-router"

export default function Nav() {
    const {user} = useContext(UserContext)
    const navigate = useNavigate()
  return (
    <div className="nav">
      <span id="user-welcome-nav">{user.userName}</span>
      <button onClick={() => navigate("/")}>Home</button>
      <button onClick={() => navigate("/login")}>Login</button>
      <button onClick={() => navigate("/leaderboard")}>Leaderboard</button>
    </div>
  )
}
