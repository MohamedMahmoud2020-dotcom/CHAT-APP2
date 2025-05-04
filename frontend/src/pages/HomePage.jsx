import React from 'react'
import NoChatSelected from '../components/NoChatSelected'
import Sidebar from '../components/Sidebar'
import ChatContainer from '../components/ChatContainer'
import { useChatStore } from '../store/useChatStore'

const HomePage = () => {
  const {selectedUser} = useChatStore();
  return (
    <div className='mx-64 my-4 p-2 bg-base-200 flex max-h-3/4'>
      <Sidebar/>
      {!selectedUser ? <NoChatSelected/> : <ChatContainer/>}
    </div>
  )
}

export default HomePage