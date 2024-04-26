import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

import Home from './pages/home/Home'
import LogIn from './pages/login/LogIn'
import SignUp from './pages/signup/SignUp'
import { useAuthContext } from './context/AuthContext'

const App = () => {
  const { authUser } = useAuthContext();
  return (
    <div className='flex p-4 h-screen items-center justify-center'>
      <Routes>
        <Route path='/' element={authUser ? <Home /> : <Navigate to="/login" />} />
        <Route path='/login' element={authUser ? <Navigate to="/" /> : <LogIn />} />
        <Route path='/signup' element={authUser ? <Navigate to="/" /> : <SignUp />} />
      </Routes>
      <Toaster />
    </div>
  )
}

export default App