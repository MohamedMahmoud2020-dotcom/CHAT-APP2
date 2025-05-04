import React from 'react'
import { MessageSquare } from "lucide-react";

const NoChatSelected = () => {
  return (
    <div className='flex flex-col gap-4 justify-center items-center flex-3/4'>
        <div className='p-2 rounded-lg bg-primary/10'>
            <MessageSquare className='text-primary'/>
        </div>
        <h1 className='text-2xl font-bold'>Welcome to Chatty!</h1>
        <p className="text-base-content/60">select a conversation from the sidebar to start chatting</p>
    </div>
  )
}

export default NoChatSelected