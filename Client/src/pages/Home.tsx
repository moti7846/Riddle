import { Link } from "react-router";

export default function Home() {
  return (
    <>
      <h1>Welcome - home</h1>
      <main>
        <Link to={"/play"}>play</Link>
        <Link to={"/login"}>login</Link>
        <Link to={"/leaderboard"}>leaderboard</Link>
      </main>
    </>
  )
}


