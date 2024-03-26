import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./index.css"
import { BrowserRouter } from 'react-router-dom'
import CustomRoute from './CustomRoute.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <App/>
  <BrowserRouter>
    <React.StrictMode>
      <CustomRoute />
    </React.StrictMode>
  </BrowserRouter>
)
