import React from 'react'
import { Outlet } from 'react-router-dom'
export const LayoutApp = () => {
  return (
    <main className='App'>
      <Outlet/>
    </main>
  )
}
