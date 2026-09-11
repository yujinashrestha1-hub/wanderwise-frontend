import React from 'react'
import AppNavbar from '../components/common/AppNavbar'
import Footer from '../components/landingComponents/Footer'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
    <div>
        <AppNavbar />
        <Outlet />
        <Footer />

    </div>
  )
}

export default AppLayout