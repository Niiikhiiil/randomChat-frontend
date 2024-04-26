import React, { useState } from 'react'
import GenderCheckBox from './GenderCheckBox'
import { Link } from 'react-router-dom'
import useSignup from '../../hooks/useSignup.js'


const SignUp = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  })

  const { loading, signup } = useSignup();

  const handleCheckBoxChange = (gender) => {
    setInputs({ ...inputs, gender })
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs);
  }

  return (
    <div className=' flex flex-col items-center justify-center min-w-96 mx-auto shadow-2xl'>
      <div className='w-full p-6 shadow-2xl border border-x rounded-md '>

        <h1 className='text-3xl font-semibold text-center text-gray-300'>
          Sign Up
          <span className='font-bold text-orange-200'> ChatApp</span>
        </h1>

        <form >
          <div>
            <label className="label p-2">
              <span className='label-text text-base text-slate-400'>Full Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter your full name..."
              className="input  w-full h-10 focus:border-none focus:outline-dotted focus:outline-white bg-transparent border border-white text-white"
              value={inputs.fullName}
              onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
            />
          </div>

          <div>
            <label className="label p-2">
              <span className='label-text text-base text-slate-400'>Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter username..."
              className="input  w-full h-10 focus:border-none focus:outline-dotted focus:outline-white bg-transparent border border-white text-white"
              value={inputs.username}
              onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
            />
          </div>

          <div>
            <label className="label">
              <span className='label-text text-base text-slate-400'>Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter passowrd..."
              className="input  w-full h-10 focus:border-none focus:outline-dotted focus:outline-white bg-transparent border border-white text-white"
              value={inputs.password}
              onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
            />
          </div>

          <div>
            <label className="label">
              <span className='label-text text-base text-slate-400'>Confirm password</span>
            </label>
            <input
              type="password"
              placeholder="Enter passowrd..."
              className="input  w-full h-10 focus:border-none focus:outline-dotted focus:outline-white bg-transparent border border-white text-white"
              value={inputs.confirmPassword}
              onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
            />
          </div>

          {/* gender code goes here  */}
          <GenderCheckBox onCheckBoxChange={handleCheckBoxChange} selectedGender={inputs.gender} />

          <Link to='/login' className='text-sm text-gray-200 hover:underline hover:text-blue-600 mt-1 inline-block'>
            Already have an account?
          </Link>

          <div>
            <button className="btn btn-block btn-sm mt-2 text-black " onClick={handleSubmit} disabled={loading}>
              {loading ? <span className='loading loading-spinner'></span> : "Sign Up"}
            </button>
          </div>
        </form>
      </div>

    </div>
  )
}

export default SignUp