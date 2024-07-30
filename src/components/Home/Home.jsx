import React from 'react'
import "./Home.css"
import NavBar from '../Navbar/NavBar'
import BelowNavbar from '../Navbar/BelowNavbar'
import Body from '../Body/Body'

const Home = () => {
  return (
    <div className='home'>
      <NavBar />
       <div className='flex-cards'>
            <BelowNavbar number = "04" about="Incident Reported"/>
            <BelowNavbar number = "06" about="Check In"/>
            <BelowNavbar number = "03/05" about="Services Open"/>
        </div>
        <Body />
    </div>
  )
}

export default Home
