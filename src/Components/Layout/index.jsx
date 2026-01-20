import React from 'react'
import NavBar from '../NavBar'
import { Outlet } from 'react-router'
import Footer from '../Footer'

export default function Layout() {
  return (
    <>
    <NavBar></NavBar>
    <Outlet></Outlet>
    <Footer></Footer>
    </>
  )
}
