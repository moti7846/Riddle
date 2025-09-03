import { useContext } from "react"
import { UserContext } from "../App"

export default function Nav() {
    const {userName} = useContext(UserContext)
  return (
    <>
    <nav>{userName}</nav>

    </>
  )
}
