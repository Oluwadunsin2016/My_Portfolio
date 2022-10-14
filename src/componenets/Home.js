import React from 'react'
import Banner from './Banner'
import Contact from './Contact'
import Footer from './Footer'
import NavBar from './NavBar'
import Project from './Project'
import Skills from './Skills'

export const Home = () => {
  return (
    <>
     <NavBar/>
      <Banner/>
      <Skills/>
      <Project/>
      <Contact/>
      <Footer/>
    </>
  )
}
