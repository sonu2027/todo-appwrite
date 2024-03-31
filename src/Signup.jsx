import React, { useState } from 'react'
import authService from './appwrite/auth.js'
import { IoCheckmarkOutline } from "react-icons/io5";

function Signup({ setLoginStatus }) {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [names, setNames] = useState("")

    const [accounCreationRes, setAccounCreationRes] = useState(false)

    const handleSignUp = async () => {
        await authService.createAccount({ email, password, names }).then((res) => {
            console.log("Account creation successfully");
            setEmail("")
            setPassword("")
            setNames("")
            setAccounCreationRes(true)
            setTimeout(() => {
                setAccounCreationRes(false)
            }, 3000)
        })
            .catch((error) => {
                console.log("account craetion failed", error);
            })
    }

    return (
        <div className='flex justify-center items-start pt-24 h-screen'>
            {
                accounCreationRes &&
                <div className='bg-gray-700 px-2 py-1 fixed top-6 right-2 flex justify-between items-center gap-x-2'>
                    <IoCheckmarkOutline className='text-white text-4xl gap-x-2 bg-green-500' />
                    <div className=' text-white text-2xl '>Account created successfully</div>
                </div>
            }

            <div className='bg-white px-4 py-5 rounded-md'>
                <div className='mb-3 text-3xl text-blue-600'>ToDo</div>

                <input value={names} onChange={(e) => setNames(e.target.value)} className='rounded-md border-gray-300 border-solid border-2 mb-4 w-60 h-9  placeholder-gray-900 focus:outline-blue-400 pl-1 caret-slate-900 text-black' type="text" placeholder="Full name" /><br />

                <input value={email} onChange={(e) => setEmail(e.target.value)} className='rounded-md border-gray-300 border-solid border-2 mb-4 w-60 h-9  placeholder-gray-900 focus:outline-blue-400 pl-1 caret-slate-900 text-black' type="email" placeholder="Email" name="" id="" />
                <br />

                <label className='text-blue-500' htmlFor="">Password must contain 8 character</label><br />

                <input value={password} onChange={(e) => setPassword(e.target.value)} className='rounded-md border-gray-300 border-solid border-2 w-60 h-9 focus:outline-blue-400 placeholder-gray-900 pl-1 caret-slate-900 text-black' type="password" placeholder="password" />
                <br />

                <button onClick={handleSignUp} className={"bg-blue-600 px-3 rounded-md py-1 text-white mt-4 w-60"}>Signup</button>

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