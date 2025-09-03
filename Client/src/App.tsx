import { Route, Routes } from 'react-router'
import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import Play from './pages/Play'
import Leaderboard from './pages/Leaderboard'
import { createContext} from 'react'
import Nav from './components/Nav'

export const UserContext = createContext<{ userName: string, token: string, role: string }>({ userName: "guest", token: "", role: "" });

export default function App() {
  return (
    <>
    <Nav />
    <UserContext.Provider value={{ userName: "guest", token: "", role: "" }}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/play' element={<Play />} />
        <Route path='/login' element={<Login />} />
        <Route path='/leaderboard' element={<Leaderboard />} />
      </Routes>
    </UserContext.Provider>
    </>
  )
}