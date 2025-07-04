import React from 'react'
import './NavBar.css'
import navbg from '../assets/Home/navbg.svg'

function NavBar() {
  return (
    <div className='relative w-fit px-16 mt-0 pt-0 pb-4'>
        <img className='absolute top-0 left-1/2 -z-10 transform -translate-x-1/2' src={navbg} alt="" />
            <ul>
                <div className='flex flex-row m-0 p-2 gap-9 leading-none text-[clamp(0.5rem,1.5vw,1.2rem)] text-nowrap text-white  '>
                    <li >Home</li>
                    <li>About Us</li>
                    <li>Events</li>
                    <li>Team</li>
                    <li>Calender</li>
                    <li>Contact Us</li>
                    
                </div>
            </ul>
    </div>
  )
}

export default NavBar