import React from 'react'
import { LogOut, MessageSquare, Settings, User } from "lucide-react";
import { useAuthStore } from '../store/useAuthStore';

const Navbar = () => {
    const {authUser, logout} = useAuthStore();
  return (
    <nav className='flex justify-between items-center px-12 py-1'>
        <div className='flex justify-center items-center gap-2'> 
            <div className='p-1.5 rounded-xl bg-primary/10 max-w-fit'>
                <MessageSquare className='size-6 text-primary'/>
            </div>
            <h1 className='text-2xl'>Chatty</h1>
        </div>
        <div className='flex gap-4'>
            <a className='flex justify-center items-center gap-2 transition-colors cursor-pointer' href="/settings">
                <Settings/>
                Settings
            </a>
            {authUser && <><a className='flex justify-center items-center gap-2 transition-colors cursor-pointer' href="/profile">
                <User/>
                Profile
            </a>
            <a className='flex justify-center items-center gap-2 transition-colors cursor-pointer' onClick={logout}>
                <LogOut/>
                LogOut
            </a>
            </>}
        </div>
    </nav>
  )
}

export default Navbar