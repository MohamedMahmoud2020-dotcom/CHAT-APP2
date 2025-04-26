import React, { useState } from 'react'
import AuthImagePattern from '../components/AuthImagePattern'
import { Eye, EyeOff, Loader2, Lock, Mail, MessageSquare, User } from "lucide-react";
import toast from 'react-hot-toast';
import { useAuthStore } from '../store/useAuthStore';

const LogInPage = () => {
  const [showPassword, setShowPassword] = useState(false)
  const {login, isLogin} = useAuthStore()
  const [loginForm, setLoginForm] = useState({
    email:"",
    password:""
  })
  const validateForm = () => {
    if(!loginForm.email.trim()) return toast.error("Email is required");
    if(!/\S+@\S+\.\S+/.test(loginForm.email)) return toast.error("Invalid Email Format");
    if(!loginForm.password.trim()) return toast.error("Password is required");
    return true
  }

  const submitLoginForm = (e) => {
    e.preventDefault()
    const success = validateForm()
    if(success){
      login(loginForm)
    }
  }
  return (
    <div className='min-h-screen grid grid-cols-2'>
      <div className='flex justify-center flex-col items-center'>
        <div className='p-1.5 rounded-xl bg-primary/10 max-w-fit'>
          <MessageSquare className='size-6 text-primary'/>
        </div>
        <h1 className='text-2xl font-bold mt-2'>Create Account</h1>
        <p className="text-base-content/60 mb-6">Get started with your free account</p>
        <form onSubmit={submitLoginForm} className='w-1/2'>
          <label htmlFor="email" className="label"><span className="label-text font-medium">Email</span></label>
          <div className='relative mb-4'>
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none z-10">
              <Mail className='size-5 text-base-content/40'/>
            </div>
            <input type="email" placeholder="John@email.com" className="input w-full pl-10" value={loginForm.email} onChange={(e) => setLoginForm({...loginForm, email:e.target.value})}/>
          </div>
          <label htmlFor="password" className="label"><span className="label-text font-medium">Full Name</span></label>
          <div className='relative mb-4'>
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none z-10">
              <Lock className='size-5 text-base-content/40'/>
            </div>
            <input type={showPassword ? "text" : "password"} placeholder="123456" className="input w-full pl-10" value={loginForm.password} onChange={(e) => setLoginForm({...loginForm, password:e.target.value})}/>
            <button onClick={() => setShowPassword(!showPassword)} type='button' className="absolute inset-y-0 right-0 pr-3 flex items-center z-10 cursor-pointer">
              {showPassword ? <Eye className='size-5 text-base-content/40 '/> : <EyeOff className='size-5 text-base-content/40 '/>}
            </button> 
          </div>
          <button type='submit' className='py-2 w-full btn btn-primary hover:text-black' disabled={isLogin}>{isLogin ? <><Loader2 className="size-5 animate-spin" /> Loading...</>: "Log In"}</button>
        </form>
        <p className='mt-4'><span>Don't have an account? </span><a href="/signup" className='text-primary underline'>Create an account</a></p>
      </div>
      <AuthImagePattern title="Join our community" subtitle="Connect with friends, share moments, and stay in touch with your loved ones."/>
    </div>
  )
}

export default LogInPage