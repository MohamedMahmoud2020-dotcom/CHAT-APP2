import React, { useEffect } from 'react'
import { Users } from "lucide-react";
import { useAuthStore } from "../store/useAuthStore";
import { useChatStore } from '../store/useChatStore.js';
const Sidebar = () => {
    const {users, getUsers, setSelectedUser} = useChatStore()
    const { onlineUsers } = useAuthStore();
    useEffect(() => {
        getUsers();
    }, [getUsers])
  return (
    <aside className='flex-1/4 max-h-full'>
        <div>
            <div className='flex  items-center mb-2'>
                <Users/>
                <span>Contacts</span>
            </div>
            <div className='flex items-center gap-2'>
                <input type="checkbox"></input>
                <span className="text-sm">show online only</span>
                <span className="text-xs text-zinc-500">(0 online)</span>
             </div>
        </div>
        <div className='max-h-11/12 overflow-y-auto'>
        {
            users.map((user) => (
                <div className='flex gap-2 mt-4 cursor-pointer' onClick={() => setSelectedUser(user)}>
                    <div className='relative'>
                        <img src={user.profilePic || './images.jpeg'} alt="" className='w-8 h-8 rounded-full object-cover'/>
                        {onlineUsers.includes(user._id) &&  <span className='w-2.5 h-2.5 bg-green-500 rounded-full absolute bottom-2 right-0'></span>}
                    </div>
                    <div className='flex flex-col'>
                        <span className="font-medium truncate">{user.username}</span>
                        <span className="text-xs text-zinc-500">{onlineUsers.includes(user._id) ? "online" : "offline" }</span>
                    </div>
                </div>
            ))
        }
                
        </div>
    </aside>
  )
}

export default Sidebar