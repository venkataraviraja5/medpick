import React from 'react'
import './Sidebar.css'


const SideBar = () => {
  return (
    <div className='sidebar'>
      <div>
        <img src='/logo.png' className='icon'/>
      </div>
      <div className='sidebar-items'>
        <div className='sidebarFlex'>
            <img src='/dashboard.png' className='sidebarImg'/> <p className='name'>Dashboard</p>
        </div>
        <div className='sidebarFlex'>
            <img src='/assests.png' className='sidebarImg'/> <p className='name'><select className='sidebarSelect'><option>Assets</option></select></p>
        </div>
        <div className='sidebarFlex'>
            <img src='/incidents.png' className='sidebarImg'/> <p className='name'>Incidents</p>
        </div>
        <div className='sidebarFlex'>
            <img src='/services.png' className='sidebarImg'/> <p className='name'>Services</p>
        </div>
        <div className='sidebarFlex'>
            <img src='/request.png' className='sidebarImg'/> <p className='name'>Request</p>
        </div>
        <div className='sidebarFlex'>
            <img src='/users.png' className='sidebarImg'/> <p className='name'><select className='sidebarSelect'><option>Users</option></select></p>
        </div>
        <div className='sidebarFlex'>
            <img src='/request.png' className='sidebarImg'/> <p className='name'><select className='sidebarSelect'><option>Reports</option></select></p>
        </div>
      </div>
      <div className='contact'>
       <div className='contactFlex'>
         <img src='/contact.png' /> <p>Contact</p>
       </div>
       <div className='contactFlex'>
         <img src='/logout.png' /> <p>Log Out</p>
       </div>
      </div>
    </div>
  )
}

export default SideBar
