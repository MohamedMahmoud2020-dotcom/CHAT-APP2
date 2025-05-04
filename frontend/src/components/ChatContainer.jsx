import React from 'react'
import { X } from "lucide-react";
import { useChatStore } from '../store/useChatStore';
const ChatContainer = () => {
    const {selectedUser, setSelectedUser} = useChatStore();
  return (
    <div className='flex-3/4'>
        <div className='flex justify-between'>
            <div className='flex items-center gap-2'>
                <img className='w-8 h-8 rounded-full object-cover' src={selectedUser.profilePic} alt="" />
                <div className='flex flex-col'>
                    <span className="font-medium">{selectedUser.username}</span>
                    <span className='text-sm text-base-content/70'>Offline</span>
                </div>
            </div>
            <div>
                <X className='size-5 cursor-pointer' onClick={() => setSelectedUser(null)}/>
            </div>
        </div>
        <div>
        </div>
    </div>
  )
}

export default ChatContainer