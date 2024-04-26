import React, { useEffect, useRef } from 'react'
import Message from './Message'
import useGetMessages from '../../hooks/useGetMessages'
import MessageSkeleton from '../skeletons/MessageSkeleton';
import useListenMessages from '../../hooks/useListenMessages';

const Messages = () => {

    const { loading, messages } = useGetMessages();
    useListenMessages();
    const inputRef = useRef()
    
    useEffect(() => {
        setTimeout(() => {
            return inputRef.current?.scrollIntoView({ behavior: "smooth" })
        }, 100)
    }, [messages])

    return (
        <div className='px-4 flex-1 overflow-auto'>
            {!loading &&
                messages.length > 0 &&
                messages.map((message) => {
                    return <div key={message._id} ref={inputRef}>
                        <Message message={message} />
                    </div>
                })
            }

            {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}
            {
                !loading && messages.length === 0 && (
                    <p className='text-center text-white'>Send a Message to start a Conversation</p>
                )
            }
        </div >
    )
}

export default Messages

// 3:54:08