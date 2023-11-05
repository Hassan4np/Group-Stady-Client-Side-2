import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Mybrowser } from './Componenets/Mainpage/Router/Router.jsx'
import { RouterProvider, } from "react-router-dom";
import AuthProvider from './Componenets/Mainpage/AuthProvider.jsx/AuthProvider';
import { QueryClient, QueryClientProvider, useQuery, } from '@tanstack/react-query';

const queryClient = new QueryClient()


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='max-w-screen-xl mx-auto'>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <RouterProvider router={Mybrowser} />
        </AuthProvider>
      </QueryClientProvider>
    </div>
  </React.StrictMode>,
)
