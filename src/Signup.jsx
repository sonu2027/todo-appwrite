import React, { useState } from 'react'
import authService from './appwrite/auth.js'

function Signup({ setLoginStatus }) {

    const [email, setEmail]=useState("")
    const [password, setPassword]=useState("")
    const [names, setNames]=useState("")

    return (
        <div className='flex justify-center items-center h-screen'>
            <div className='bg-white px-4 py-5 rounded-sm'>
                <div className='mb-3 text-3xl text-blue-600'>ToDo</div>

                <input value={names} onChange={(e)=>setNames(e.target.value)} className='rounded-sm mb-4 w-60 h-9  placeholder-gray-900 focus:outline-none pl-1 caret-slate-900 bg-gray-400 text-black' type="text" placeholder="Full name" /><br />

                <input value={email} onChange={(e)=>setEmail(e.target.value)}  className='rounded-sm mb-4 w-60 h-9  placeholder-gray-900 focus:outline-none pl-1 caret-slate-900 bg-gray-400 text-black' type="email" placeholder="Email" name="" id="" />
                <br />

                <input value={password} onChange={(e)=>setPassword(e.target.value)} className='rounded-sm w-60 h-9 focus:outline-none placeholder-gray-900 pl-1 caret-slate-900 bg-gray-400 text-white' type="password" placeholder="password" />
                <br />

                <button onClick={()=>authService.createAccount({email, password, names})} className={"bg-blue-600 px-3 rounded-sm py-1 text-white mt-4 w-60"}>Signup</button>

                <div className='text-white'>or</div>
                <div>
                    <span className='text-black font-medium'>
                        Have an account? &nbsp;
                    </span>
                    <button onClick={() => setLoginStatus(true)} className='text-sky-400 font-medium'>Login</button>
                </div>
            </div>
        </div>
    )
}

export default Signup