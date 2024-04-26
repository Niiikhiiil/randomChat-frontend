import React from 'react'
import useConversation from '../../zustand/useConversation';
import { useSocketContext } from '../../context/SocketContext';

const Conversation = ({ conversation, emoji, lastIdx }) => {

  const { selectedConversation, setSelectedConversation } = useConversation(); //from zustand

  const isSelected = selectedConversation?._id === conversation?._id; //for conversation hover or click classname

  const { onlineUsers } = useSocketContext(); //from socketcontext

  const isOnline = onlineUsers.includes(conversation._id);

  return (
    <>
      <div
        className={`flex gap-2 rounded-md items-center font-thin p-2 py-1 cursor-pointer  hover:bg-gray-900 hover:text-white ${isSelected ? "bg-gray-950 text-white" : "text-slate-100"}`}
        onClick={() => setSelectedConversation(conversation)}
      >

        <div className={`avatar ${isOnline && "online"}`}>
          <div className="w-12 rounded-full">
            <img src={conversation?.profilePic} alt="user avatar" />
          </div>
        </div>
        <div className="flex flex-1 flex-col  hover:text-white">
          <div className="flex gap-3 justify-between">
            <p className=' font-medium text-wrap '>{conversation?.fullName.toUpperCase()}</p>
            <span className='text-xl'>{emoji}</span>
          </div>
        </div>
      </div>

      {/* we dont want divider after last conversation  */}
      {!lastIdx &&
        <div className='divider my-0 py-0 h-1' />
      }
    </>
  )
}

export default Conversation

// 2:10