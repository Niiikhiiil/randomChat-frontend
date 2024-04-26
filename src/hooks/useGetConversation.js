import { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

const useGetConversation = () => {
    const [loading, setLoading] = useState(false);
    const [conversations, setConvesations] = useState([]);

    useEffect(() => {
        const getConversations = async () => {
            setLoading(true);
            try {
                const res = await fetch("https://randomchat-api.vercel.app/api/users", { credentials: 'include' });
                const data = await res.json();
                if (data.error) {
                    throw new Error(data.error);
                }
                setConvesations(data)
            } catch (error) {
                toast.error(error.message);
            } finally {
                setLoading(false);
            }
        }
        getConversations();
    }, [])

    return { loading, conversations };

}

export default useGetConversation