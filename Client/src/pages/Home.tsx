import { Link } from "react-router";

export default function Home() {
  return (
    <div>
      <h1>Welcome - home</h1>
      <Link to={"/play"}>play</Link>
      <Link to={"/login"}>login</Link>
      <Link to={"/leaderboard"}>leaderboard</Link>
    </div>
  )
}
