import React from 'react'
import Primarybtn from './Primarybtn'

function SideBar() {
  return (
    <div className='flex w-[95vw] flex-col text-white bg-black rounded-2xl'>
        <div>
            <img src="" alt="" />
            <img src="" alt="" />
        </div>
        <div className='flex flex-row '>
            <div>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Events</li>
                    <li>Team</li>
                    <li>Calender</li>
                    <li>Contact Us</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default SideBar