import React, { useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx'
import HomePage from "./pages/HomePage.jsx"
import SignUpPage from "./pages/SignUpPage.jsx"
import LogInPage from "./pages/LogInPage.jsx"
import SettingsPage from "./pages/SettingsPage.jsx"
import ProfilePage from "./pages/ProfilePage.jsx"
import { useAuthStore } from './store/useAuthStore.js'
import { Routes, Route, Navigate } from 'react-router-dom'
import {Loader} from "lucide-react"
import { Toaster } from 'react-hot-toast';
function App() {
  const {authUser, checkAuth, isCheckingAuth} = useAuthStore();
  useEffect(() => {
    checkAuth();
  }, [checkAuth])

  if(!authUser && isCheckingAuth){
    return (
      <div className='flex items-center justify-center h-screen'>
          <Loader className="size-10 animate-spin"/>
      </div>
    )
  }
  
  return (
    <div>
      <Toaster/>
      <Navbar/>
      <Routes>
        <Route path="/" element={authUser ? <HomePage/> : <Navigate to="/login"/>}/>
        <Route path="/signup" element={!authUser ? <SignUpPage/> : <Navigate to="/"/>}/>
        <Route path="/login" element={!authUser ? <LogInPage/> : <Navigate to="/"/>}/>
        <Route path="/settings" element={<SettingsPage/>}/>
        <Route path="/profile" element={authUser ? <ProfilePage/> : <Navigate to="/login"/>}/>
      </Routes>
    </div>
  )
}

export default App
