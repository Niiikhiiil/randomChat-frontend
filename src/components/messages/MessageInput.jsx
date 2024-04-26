import React, { useState } from 'react'
import { GrSend } from "react-icons/gr";
import useSendMessage from '../../hooks/useSendMessage';

const MessageInput = () => {
    const [message, setMessage] = useState("");
    const { loading, sendMessage } = useSendMessage();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!message) return;
        await sendMessage(message)
        setMessage("")
    }
    return (
        <form className='px-4 my-3 ' onSubmit={handleSubmit}>
            <div className="w-full relative">
                <input
                    type="text"
                    placeholder='Send a message'
                    className='border focus:border-collapse focus:outline-none text-sm rounded-lg block w-full p-2.5 bg-transparent border-gray-600 text-slate-950 placeholder:text-slate-900'
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <button type="submit" className='absolute focus:outline-none inset-y-0 end-0 flex items-center pe-3 text-white'>
                    {loading ? <div className='loading loading-dots'></div> : <GrSend />}
                </button>
            </div>
        </form>
    )
}

export default MessageInput