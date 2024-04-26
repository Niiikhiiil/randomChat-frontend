import { useState } from 'react'
import { useAuthContext } from '../context/AuthContext';
import toast from 'react-hot-toast';

const useLogout = () => {
    const [loading, setLoading] = useState(false);
    const { setAuthUser } = useAuthContext();

    const logout = async () => {
        setLoading(true);

        try {
            const res = await fetch("https://randomchat-api.vercel.app/api/auth/logout", {
                method: "POST",
                credentials: 'include',
                headers: { "Content-Type": "application/json" },
            })
            const data = await res.json();
            if (data.error) {
                throw new Error(data.error);
            }

            localStorage.removeItem("current-app-user");
            setAuthUser(null);
        } catch (error) {
            toast.error(error.message)
        } finally {
            toast.success("Log out successfully")
            setLoading(false);
        }

    }
    return { loading, logout }
}

export default useLogout

// 3:01:30