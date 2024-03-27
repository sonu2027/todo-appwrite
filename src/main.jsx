import React from 'react'
import ReactDOM from 'react-dom/client'
import "./index.css"
import { BrowserRouter } from 'react-router-dom'
import CustomRoute from './CustomRoute.jsx'
import { Provider } from 'react-redux'
import store from './store/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <App/>
  <BrowserRouter>
    <React.StrictMode>
      <Provider store={store}>
      <CustomRoute />
      </Provider>
    </React.StrictMode>
  </BrowserRouter>
)
