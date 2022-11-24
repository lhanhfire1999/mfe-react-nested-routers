import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header'

const Layout = () => {
  return (
    <>
      <Header signedIn={null} onSignOut={null} />
      <Outlet />
    </>
  )
}

export default Layout
