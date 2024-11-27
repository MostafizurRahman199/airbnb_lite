import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import MyProvider from './Provider/MyPrivider.jsx'
import { Router, RouterProvider } from 'react-router-dom'
import router from './Route/Routes.jsx'




createRoot(document.getElementById('root')).render(
  <StrictMode>
   <MyProvider>
        <RouterProvider router={router}></RouterProvider>
    </MyProvider>
  </StrictMode>,
)
