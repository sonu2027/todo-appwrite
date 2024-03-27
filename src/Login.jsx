import React, { useState } from 'react'
import authService from './appwrite/auth'
import App from './App'
import { login } from './store/authSlice'
import { useDispatch, useSelector } from 'react-redux'
import { FaRegCircleXmark } from "react-icons/fa6";

function Login({ setLoginStatus }) {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const dispatch = useDispatch();
    const status = useSelector((s) => s.auth.status)
    const userData = useSelector((s) => s.auth.userData)
    console.log("status and userid in login ", status, userData);

    const [loginRes, setLoginRes] = useState([true, ""])

    const handleLogin = async () => {
        if (email.length < 1 || password.length < 1) {
            setEmail("")
            setPassword("")
            setLoginRes([false, "Input filed should not be empty"])
            setTimeout(() => {
                setLoginRes([true, ""])
            }, 3000)
            return
        }
        await authService.login({ email, password })
            .then((res) => {
                setEmail("")
                setPassword("")
                dispatch(login(res.userId))
                console.log("Status for login is: ", res, res.userId);
            })
            .catch((error) => {
                setLoginRes([false, "Wrong email and password"])
                setEmail("")
                setPassword("")
                setTimeout(() => {
                    setLoginRes([true, ""])
                }, 3000)
                console.log("Login Failed", error);
            })
    }
    return (
        <>
            {
                status ?
                    <App />
                    :
                    <div className='flex justify-center items-start pt-24 h-screen'>

                        {
                            !loginRes[0] &&
                            <div className='bg-gray-700 px-2 py-1 fixed top-6 right-2 flex justify-between items-center gap-x-2'>
                                <FaRegCircleXmark className='text-red-500 text-4xl gap-x-2 rounded-full' />
                                <div className=' text-white text-2xl '>{loginRes[1]}</div>
                            </div>
                        }

                        <div className='bg-white px-4 py-5 rounded-sm'>

                            <div className='mb-3 text-3xl text-blue-600'>ToDo</div>

                            <input value={email} onChange={(e) => setEmail(e.target.value)} className='rounded-sm mb-4 w-60 h-9  placeholder-gray-900 focus:outline-none pl-1 caret-slate-900 bg-gray-400 text-black' type="email" placeholder="Email" name="" id="" />
                            <br />

                            <input value={password} onChange={(e) => setPassword(e.target.value)} className='rounded-sm w-60 h-9 focus:outline-none placeholder-gray-900 pl-1 caret-slate-900 bg-gray-400 text-white' type="password" placeholder="password" />
                            <br />

                            <button onClick={handleLogin} className={"bg-blue-600 px-3 rounded-sm py-1 text-white mt-4 w-60"}>Login</button>

                            <div className='text-white'>or</div>

                            <div>
                                <span className='text-black font-medium'>
                                    Don't have an account? &nbsp;
                                </span>
                                <button onClick={() => setLoginStatus(false)} className='text-sky-400 font-medium'>Signup</button>
                            </div>
                        </div>
                    </div>
            }
        </>


    )
}

export default Login