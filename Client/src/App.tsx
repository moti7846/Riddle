import { Route, Routes } from 'react-router'
import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import Play from './pages/Play'
import Leaderboard from './pages/Leaderboard'

export default function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/play' element={<Play />} />
        <Route path='/login' element={<Login />} />
        <Route path='/leaderboard' element={<Leaderboard />} />
      </Routes>
    </div>
  )
}