import React from 'react'
import "./Navbar.css"

const BelowNavbar = ({number,about}) => {
  return (
   <div>
       <div className='navbar-card'>
      <div>
         <h1 className='number'>{number}</h1>
      </div>
      <div className='card-bottom'> 
         <div className='about'>
           {about}
         </div>
         <div>
            <img src='/right-arrow.png'  className='right-arrow'/>
         </div>
      </div>
    </div>
   </div>
  )
}

export default BelowNavbar
