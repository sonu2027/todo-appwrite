import React from 'react'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import App from './App'
import AddTask from './AddTask'
import LoginSignup from './LoginSignup'

function CustomRoute() {
    return (
        <Routes>
            <Route path='/' element={<LoginSignup />} />
            {/* <Route path='/:userData?' element={<App />} /> */}
            <Route path='/addtask/:documentId?' element={<AddTask />} />
        </Routes>
    )
}

export default CustomRoute