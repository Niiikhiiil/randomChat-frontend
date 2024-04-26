import React from 'react'
import useConversation from '../../zustand/useConversation';
import { useAuthContext } from '../../context/AuthContext';
import { extractTime } from '../../utils/extractTime';

const Message = ({ message }) => {
    const { authUser } = useAuthContext();
    const { selectedConversation } = useConversation();
    const fromMe = message?.senderId === authUser._id;
    const chatClassname = fromMe ? "chat-end" : "chat-start"
    const profilePic = fromMe ? authUser?.profilePic : selectedConversation?.profilePic;
    const bubbleBgColor = fromMe ? 'bg-transparent border border-amber-100 text-orange-100' : " bg-amber-100 text-slate-900";

    const shakeClass = message.shouldShake ? "shake" : ""
    return (
        <div className={`chat ${chatClassname} ` }>
            <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                    <img
                        src={profilePic}
                        alt="bubble component"
                    />
                </div>
            </div>
            <div className={`chat-bubble  ${bubbleBgColor} ${shakeClass} pb-1`}>{message?.message}</div>
            <div className="chat-footer opacity-100 text-xs flex gap-1 items-center">
                {extractTime(message?.createdAt)}
            </div>
        </div>
    )
}

export default Message