import { Route, Routes } from 'react-router'
import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import Play from './pages/Play'
import Leaderboard from './pages/Leaderboard'
import { createContext, useContext, useState} from 'react'
import Nav from './components/Nav'

export const UserContext = createContext<{ user : {userName: string, token: string, role: string} , setUser : any }>({ user : {userName: "guest", token: "", role: ""} , setUser : null});

export default function App() {
  const [user , setUser] = useState(useContext(UserContext))
  return (
    <>
    <UserContext.Provider value={{ ...user , setUser }}>
    <Nav />
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