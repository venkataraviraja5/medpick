import React from 'react'
import "./Navbar.css"
import BelowNavbar from './BelowNavbar'

const NavBar = () => {
  return (
      <div>
        <div style={{display:"flex"}}>
        <div className='left-navbar'>
           <img src='/left-arrow.png' className='sidearrow-image'/>
           <p className='incidents'>Incidents</p>
        </div>
        <div className='right-navbar'>
            <p className='right-item'><img src="/user1.png" className='user-img'/>Non Bio Medical</p>
            <p className='selectdiv'>
                <select className='selectBox'>
                  <option>Nellore</option>
                </select>
            </p>
            <img src='/scanner.png' className='right-img'/>
            <img src='/bell.png' className='right-img'/>
            <img src='/user2.png' className='user2-img'/>
        </div>
        </div>
        <div className='flex-cards'>
            <BelowNavbar number = "04" about="Incident Reported"/>
            <BelowNavbar number = "06" about="Check In"/>
            <BelowNavbar number = "03/05" about="Services Open"/>
        </div>
      </div>
  )
}

export default NavBar
