import React from 'react'
import { FaSignOutAlt } from "react-icons/fa";
import useLogout from '../../hooks/useLogout';

const LogOutButton = () => {
    const { loading, logout } = useLogout();
    return (
        <div className='mt-auto'>
            {
                !loading ?
                    (
                        <FaSignOutAlt onClick={logout} className='w-6 h-6 text-white cursor-pointer' />
                    )
                    :
                    (
                        <span className="loading loading-spinner"></span>
                    )
            }
        </div>
    )
}

export default LogOutButton