import React, { useEffect } from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'
import { LuMessagesSquare } from "react-icons/lu";
import useConversation from '../../zustand/useConversation';
import { useAuthContext } from '../../context/AuthContext';

const MessageContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  useEffect(() => {
    // if i want to  logout or refresh it will be deselected 
    return () => setSelectedConversation(null);
  }, [setSelectedConversation])

  return (
    <div className='md:min-w-[450px] flex flex-col'>
      {
        !selectedConversation ?
          <NoChatSelected />
          :
          <>
            {/* header  */}
            <div className='px-4 bg-neutral-950  py-2 mb-2 items-center justify-center flex'>
              <span className='label-text text-slate-200 mr-auto'>To:</span>
              <span className='font-bold text-gray-50 mr-auto'>{selectedConversation?.fullName.toUpperCase()}</span>
            </div>
            <Messages />
            <MessageInput />
          </>
      }
    </div>
  )
}

export default MessageContainer



const NoChatSelected = () => {
  const { authUser } = useAuthContext();
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p>WelCome 👋 {authUser?.fullName} </p>
        <p>Select a chat to start messaging</p>
        <LuMessagesSquare className='text-3xl md:text-6xl text-center' />
      </div>
    </div>
  )
}