import React from 'react'
import { Outlet } from 'react-router-dom'
import { NavBar, Header, Footer } from '../Blocks'

const Weblayout = () => {
  return (
    <>
    <NavBar  />
    <main class="main-wrap">
    <Header />
    <Outlet  />
    </main>
    <Footer />
    </>
  )
}

export default Weblayout