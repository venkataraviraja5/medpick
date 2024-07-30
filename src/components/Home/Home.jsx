import React from 'react'
import "./Home.css"
import NavBar from '../Navbar/NavBar'
import BelowNavbar from '../Navbar/BelowNavbar'
import Body from '../Body/Body'

const Home = () => {
  return (
    <div className='home'>
      <NavBar />
        <Body />
    </div>
  )
}

export default Home
