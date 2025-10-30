
import React from 'react'
import Sidebar from './sidebar'
import { Outlet } from 'react-router-dom'

const SidebarRootLayout = () => {
  return (
    <>
    <Sidebar/>
    <Outlet/>
    </>
  )
}

export default SidebarRootLayout