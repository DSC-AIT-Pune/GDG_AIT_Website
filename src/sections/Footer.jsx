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
    <div className='bg-primarybg w-[95vw] h-auto flex flex-row gap-2 justify-between px-[13px] align-top pt-[1.1675rem] pb-[0.375rem] rounded-xl'>
        <div className='basis-1/3 flex flex-col gap-2 mt-[4px]'>
            {/* icon part */}
            <div className='flex flex-row gap-2 justify-start align-top'>
                <img className="w-[1.1875rem] h-auto" src={logo} alt="Gdsc" />
                <div className='flex flex-col '>
                    <div>
                        <p className='text-[0.3125rem]'>Google Developer Student Clubs</p>
                    </div>
                    <div>
                        <p className='text-[0.30rem] '>Army Institute of Technology, Pune</p>
                    </div>
                </div>
            </div>
            {/* text part */}
            <div>
                <p className='text-[0.4052rem] w-full'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            </div>
            {/* icon part */}
            <div className='flex flex-row gap-3 mt-[1.5rem]'>
                <img className='h-[7.032px] w-auto' src={insta} alt="instagram" />
                <img className='h-[7.032px] w-auto' src={twitter} alt="twitter" />
                <img className='h-[7.032px] w-auto' src={fb} alt="facebook" />
                <img className='h-[7.032px] w-auto' src={linkedin} alt="linkedin" />
            </div>
        </div>
        <div className='basis-2/3 flex justify-around flex-row gap-2 text-[0.3763rem]'>
            {/* explore */}
            <div className='flex flex-col gap-3'>
                <div>
                    <p className='text-[0.7237rem]' >Explore</p>
                </div>
                <div>
                    <ul className='list-disc list-inside space-y-1'>
                        <li>Home</li>
                        <li>About</li>
                        <li>Events</li>
                        <li>Team</li>
                    </ul>
                </div>
            </div>
            {/* quick links */}
            <div className='flex flex-col gap-3'>
                <div>
                    <p className='text-[0.7237rem]'>Quick Links</p>
                </div>
                <div>
                    <ul className='list-disc list-inside space-y-1'>
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
                    <p className='text-[0.7237rem] '>Get in Touch</p>
                </div>
                <div className='flex flex-col gap-[0.405rem]'>
                    <div className='flex flex-row gap-1 justify-start items-center'> 
                        <img src={address} alt="" />
                        <p>Home</p>
                    </div>
                    <div className='flex flex-row gap-1 justify-start items-center'>
                        <img src={mobile} alt="" />
                        <p>Mob NO</p>
                    </div>
                    <div className='flex flex-row gap-1 justify-start items-center'>
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