import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useLogin from '../../hooks/useLogin';

const LogIn = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const { loading, login } = useLogin();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(username, password);
    }
    return (
        <div className=' flex flex-col items-center justify-center min-w-96 mx-auto shadow-2xl'>
            <div className='w-full p-6 shadow-2xl border border-x rounded-md  '>

                <h1 className='text-3xl font-semibold text-center text-gray-300'>
                    Log In
                    <span className=' font-bold text-orange-200'> ChatApp</span>
                </h1>

                <form onSubmit={handleSubmit}>
                    <div>
                        <label className="label p-2">
                            <span className='label-text text-base text-slate-400'>Username</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter username..."
                            className="input  w-full h-10 focus:border-none focus:outline-dotted focus:outline-white bg-transparent border border-white text-white"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="label">
                            <span className='label-text text-base text-slate-400'>Password</span>
                        </label>
                        <input
                            type="password"
                            placeholder="Enter password..."
                            className="input  w-full h-10 focus:border-none focus:outline-dotted focus:outline-white bg-transparent border border-white text-white"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <Link to='/signup' className='text-sm text-gray-200  hover:underline hover:text-blue-600 mt-2 inline-block'>
                        {"Don't"} have an account? 
                    </Link>
                    <div>
                        <button className="btn btn-block btn-sm mt-2 text-black " disabled={loading}>
                            {loading ? (
                                <span className='loading loading-spinner'></span>
                            ) : "Login"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LogIn