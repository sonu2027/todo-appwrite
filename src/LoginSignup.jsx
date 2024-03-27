import React, { useState } from 'react'
import Login from './Login'
import Signup from './Signup'

function LoginSignup() {

    const [loginStatus, setLoginStatus] = useState(true)

    return (
        <>
            {
                loginStatus ?
                    <Login setLoginStatus={setLoginStatus}/>
                    :
                    <Signup setLoginStatus={setLoginStatus}/>
            }
        </>
    )
}

export default LoginSignup