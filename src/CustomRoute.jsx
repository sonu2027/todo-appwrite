import React from 'react'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import App from './App'
import AddTask from './AddTask'

function CustomRoute() {
    return (
        <Routes>
            <Route path='/' element={<App />} />
            <Route path='/addtask/:documentId?' element={<AddTask />} />
        </Routes>
    )
}

export default CustomRoute