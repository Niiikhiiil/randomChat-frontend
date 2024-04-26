import { useEffect, useState } from 'react'
import useConversation from '../zustand/useConversation';
import toast from 'react-hot-toast';

const useGetMessages = () => {
    const [loading, setLoading] = useState(false);
    const { messages, setMessages, selectedConversation } = useConversation();

    useEffect(() => {
        const getMessage = async () => {
            setLoading(true)
            try {
                const res = await fetch(`https://randomchat-api.vercel.app/api/messages/${selectedConversation?._id}`, {
                    method: "GET",
                    credentials:'include',
                })
                const data = await res.json();
                if (data.error) {
                    throw new Error(data.error)
                }
                setMessages(data);
            } catch (error) {
                toast.error(error)
            } finally {
                setLoading(false)
            }
        }
        if (selectedConversation?._id) getMessage();
    }, [selectedConversation, setMessages])

    return { loading, messages }
}

export default useGetMessages