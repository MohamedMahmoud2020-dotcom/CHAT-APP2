import React, { useEffect, useState } from 'react'
import { Image, Send, X } from "lucide-react";
import { useChatStore } from '../store/useChatStore';
import { useAuthStore } from '../store/useAuthStore';
const ChatContainer = () => {
    const {selectedUser, setSelectedUser, sendMessage, getMessages, messages} = useChatStore();
    const {authUser} = useAuthStore()
    const [messageData, setMessageData] = useState({
        text:"",
        image:""
    })
    const handleSendMessage = async (userId, messageData) => {
        try {
          await sendMessage(userId, messageData);      // Send message to backend
          await getMessages(userId);      // Refetch messages immediately after
        } catch (error) {
          console.error("Failed to send message", error);
        }
      };
      useEffect(() => {
        if (selectedUser) {
          getMessages(selectedUser._id);
        }
      }, [selectedUser]);
  return (
    <div className='flex-3/4 flex flex-col px-4 max-h-full min-h-full'>
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
        <div className='flex-3/5 max-h-11/12 overflow-y-auto mt-2'>
            {messages.map((message) => (
                <div className=''>
                    <div className={`chat ${message.senderId == authUser._id ? "chat-end" : "chat-start"}`}>
                        <div className="chat-image avatar">
                            <div className="w-10 rounded-full">
                            <img
                                alt="Tailwind CSS chat bubble component"
                                src={message.senderId == authUser._id ? authUser.profilePic : selectedUser.profilePic !== "" ? selectedUser.profilePic : "./images.jpeg"}
                            />
                            </div>
                        </div>
                        <div className="chat-header">
                            <time className="text-xs opacity-50">12:45</time>
                        </div>
                        <div className="chat-bubble">{message.text}</div>
                    </div>
                </div>
            ))}
        </div>
        <div className='flex justify-between items-center'>
            <input className='input w-11/12' type="text" placeholder='type a message...' value={messageData.text} onChange={(e) => setMessageData({...messageData, text: e.target.value})}/>
            <Image className='size-5 cursor-pointer'/>
            <Send className='size-5 cursor-pointer' onClick={() => handleSendMessage(selectedUser._id, messageData)}/>
        </div>
    </div>
  )
}

export default ChatContainer