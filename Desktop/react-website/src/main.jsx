import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AppProvider } from './Context.jsx'
import LocomotiveScroll from 'locomotive-scroll'

const scroll = new LocomotiveScroll();
ReactDOM.createRoot(document.getElementById('root')).render(


  <AppProvider>

  <React.StrictMode>
    <App />
  </React.StrictMode>,
  </AppProvider>
)
