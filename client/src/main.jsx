import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { RouterProvider } from 'react-router-dom'

import Routes from './routes/Routes.jsx'
import AuthProvider from './provider/AuthProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <AuthProvider><RouterProvider router={Routes}></RouterProvider> </AuthProvider>
   {/* <RouterProvider router={Routes}></RouterProvider> */}
   {/* <h1 className='text-3xl font-bold underline text-center mt-10'>Hello world!</h1> */}
  
    

  </StrictMode>,
)
