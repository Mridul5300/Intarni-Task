import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider} from "react-router-dom";
import router from './RouterProvider/Main Route';


ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-6xl mx-auto'>
    <React.StrictMode>
    
  <RouterProvider router={router} />
  </React.StrictMode>,
  </div>
)
