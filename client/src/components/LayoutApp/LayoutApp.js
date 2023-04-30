import React from 'react'
import { Outlet } from 'react-router-dom'
export const LayoutApp = ({children}) => {
  return (
    <main className='App'>
      <Outlet/>
      <div>
        {children}
      </div>
    </main>
  )
}
