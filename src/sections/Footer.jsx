import React from 'react'
import logo from '../assets/logoGdsc.svg'
import linkedin from "../assets/Footer/linkedin.svg"
import fb from "../assets/Footer/fb.svg"
import insta from "../assets/Footer/insta.svg"
import twitter from "../assets/Footer/twitter.svg"
import address from "../assets/Footer/address.svg"
import mobile from "../assets/Footer/mobile.svg"
import email from "../assets/Footer/email.svg"

function Footer() {
  return (
    <div className='bg-primarybg w-[95vw] h-auto flex flex-col md:flex-row gap-y-8 justify-between px-3.5 md:pl-9 md:pb-7 align-top pt-[1.1675rem] pb-6 rounded-xl '>
        <div className='basis-1/3 flex flex-col justify-center gap-y-4 mt-[4px] '>
            {/* icon part */}
            <div className='flex flex-row gap-2 md:justify-start justify-center align-top'>
                <img className="w-10 md:w-[4.25rem] h-auto" src={logo} alt="Gdsc" />
                <div className='flex flex-col '>
                    <div>
                        <p className='text-[0.8125rem]  md:text-[1.1494rem]'>Google Developer Student Clubs</p>
                    </div>
                    <div>
                        <p className='text-[0.90rem] md:text-[1.3494rem]'>Army Institute of Technology, Pune</p>
                    </div>
                </div>
            </div>
            {/* text part */}
            <div className='w-full flex justify-center md:justify-start'>
                <p className='text-xs text-center md:text-start md:text-xl w-2/3 md:max-w-4/5 md:min-w-3/4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            </div>
            {/* icon part */}
            <div className='flex flex-row gap-6 md:gap-9 justify-center md:justify-start mt-4 '>
                <img className='h-6 md:h-8 w-auto' src={insta} alt="instagram" />
                <img className='h-6 md:h-8 w-auto' src={twitter} alt="twitter" />
                <img className='h-6 md:h-8 w-auto' src={fb} alt="facebook" />
                <img className='h-6 md:h-8 w-auto' src={linkedin} alt="linkedin" />
            </div>
        </div>
        <div className='basis-2/3 flex justify-around md:items-center flex-row gap-2 text-[0.3763rem]'>
            {/* explore */}
            <div className='flex flex-col gap-3'>
                <div>
                    <p className='text-xl md:text-[2.5rem]' >Explore</p>
                </div>
                <div>
                    <ul className='list-disc list-inside space-y-1.5 md:space-y-3 text-xs md:text-xl'>
                        <li >Home</li>
                        <li>About</li>
                        <li>Events</li>
                        <li>Team</li>
                    </ul>
                </div>
            </div>
            {/* quick links */}
            <div className='flex flex-col gap-3'>
                <div>
                    <p className='text-xl md:text-[2.5rem]'>Quick Links</p>
                </div>
                <div>
                    <ul className='list-disc list-inside space-y-1.5 md:space-y-3 text-xs md:text-xl'>
                        <li>Privacy</li>
                        <li>Terms & Conditions</li>
                        <li>Upcoming Events</li>
                        <li>GDSC Chapter</li>
                    </ul>
                </div>
            </div>
            {/* get in touch (appropriately 😁) */}
            <div className='flex flex-col gap-3'>
                <div>
                    <p className='text-xl md:text-[2.5rem]'>Get in Touch</p>
                </div>
                <div className='flex flex-col gap-2 md:gap-6 '>
                    <div className='flex flex-row gap-1 justify-start items-center text-xs md:text-xl'> 
                        <img src={address} alt="" />
                        <p>Home</p>
                    </div>
                    <div className='flex flex-row gap-1 justify-start items-center text-xs md:text-xl'>
                        <img src={mobile} alt="" />
                        <p>Mob NO</p>
                    </div>
                    <div className='flex flex-row gap-1 justify-start items-center text-xs md:text-xl'>
                        <img src={email} alt="" />
                        <p>Email</p>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer