import React, { useState } from 'react'
import NavBar from '../NavBar'
import { Outlet } from 'react-router'
import Footer from '../Footer'

export default function Layout() {
   const [query, setQuery] = useState("");

  function handleSearch(value) {
    setQuery(value);
  }
  return (
    <>
    <NavBar  onSearch={handleSearch}></NavBar>
    <Outlet context={{query}}></Outlet>
    <Footer></Footer>
    </>
  )
}
