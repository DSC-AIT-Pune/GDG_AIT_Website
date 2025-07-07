import React from 'react'
import logo from '../assets/logoGdsc.svg'
import linkedin from "../assets/Footer/linkedin.svg"
import fb from "../assets/Footer/fb.svg"
import insta from "../assets/Footer/insta.svg"
import twitter from "../assets/Footer/twitter.svg"
import address from "../assets/Footer/addSvg.svg"
import mobile from "../assets/Footer/mobSvg.svg"
import email from "../assets/Footer/mailSvg.svg"

function Footer() {
  return (
    <div className='bg-primarybg w-[95vw] mx-auto h-auto flex flex-col lg:flex-row gap-y-8 justify-between mt-16 md:mt-0 lg:mt-0 px-3.5 md:pl-9 md:pb-7 align-top pt-[1.1675rem] pb-6 rounded-b-xl md:rounded-xl border-t-4 border-black'>
        <div className='basis-1/3 flex flex-col justify-center gap-y-4 mt-[4px] '>
            {/* icon part */}
            <div className='flex flex-row gap-2 lg:justify-start justify-center align-top'>
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
            <div className='w-full flex justify-center lg:justify-start'>
                <p className='text-xs text-center lg:text-start md:text-xl w-2/3 lg:max-w-4/5 lg:min-w-3/4'>Tech-driven student community focused on learning, building, and solving real-world challenges.</p>
            </div>
            {/* icon part */}
            <div className='flex flex-row gap-6 md:gap-9 justify-center lg:justify-start mt-4 '>
                {/*Instagram */}
                <a 
                href="https://www.instagram.com/gdsc_aitpune?igsh=b21kMDRzZ3h2dHh2" 
                target="_blank" 
                rel="noopener noreferrer"
                >
                <img className='h-6 md:h-8 w-auto' src={insta} alt="instagram" />
                </a>

                {/*Twitter */}
                {/* <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                >
                <img className='h-6 md:h-8 w-auto' src={twitter} alt="twitter" />
                </a> */}

                {/*Facebook */}
                {/* <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                >
                <img className='h-6 md:h-8 w-auto' src={fb} alt="Facebook" />
                </a> */}

                {/*Linkedin */}
                <a 
                href="https://www.linkedin.com/company/gdsc-aitpune/" 
                target="_blank" 
                rel="noopener noreferrer"
                >
                <img className='h-6 md:h-8 w-auto' src={linkedin} alt="linkedin" />
                </a>
            </div>
        </div>
        <div className='basis-2/3 flex justify-around lg:items-start flex-row gap-2 text-[0.3763rem]'>
            {/* explore */}
            <div className='flex flex-col gap-3'>
                <div>
                    <p className='text-xl md:text-[2.5rem]' >Explore</p>
                </div>
                <div>
                    <ul className='list-disc list-inside space-y-1.5 md:space-y-3 text-xs md:text-xl'>
                        <li
                            className='cursor-pointer hover:text-[#a1a095] transition-colors duration-300'
                            onClick={() => {
                            const section = document.getElementById('home');
                            if (section) {
                                section.scrollIntoView({ behavior: 'smooth' });
                            }
                            }}
                        >
                            Home
                        </li>
                        <li
                            className='cursor-pointer hover:text-[#a1a095] transition-colors duration-300'
                            onClick={() => {
                            const section = document.getElementById('about us');
                            if (section) {
                                section.scrollIntoView({ behavior: 'smooth' });
                            }
                            }}
                        >
                            About
                        </li>
                        <li
                            className='cursor-pointer hover:text-[#a1a095] transition-colors duration-300'
                            onClick={() => {
                            const section = document.getElementById('events');
                            if (section) {
                                section.scrollIntoView({ behavior: 'smooth' });
                            }
                            }}
                        >
                            Events
                        </li>
                        <li
                            className='cursor-pointer hover:text-[#a1a095] transition-colors duration-300'
                            onClick={() => {
                            const section = document.getElementById('team');
                            if (section) {
                                section.scrollIntoView({ behavior: 'smooth' });
                            }
                            }}
                        >
                            Team
                        </li>
                    </ul>

                </div>
            </div>
            {/* get in touch (appropriately 😁) */}
            <div className='flex flex-col gap-3'>
                <div>
                    <p className='text-xl md:text-[2.5rem]'>Get in Touch</p>
                </div>
                <div className='flex flex-col gap-2 md:gap-6 '>
                    <div className='flex flex-row gap-3 justify-start items-center text-xs md:text-xl'> 
                        <img className='h-10 w-auto' src={address} alt="" />
                        <p className='text-base'>Army Institute of Technology, Pune <br />Maharashtra - 411015</p>
                    </div>
                    <div className='flex flex-row gap-1 justify-start items-center text-xs md:text-xl'>
                        <img className='h-10 w-auto' src={mobile} alt="" />
                        <p className='text-base'>Mobile:- 9649959730</p>
                    </div>
                    <div className='flex flex-row gap-1 justify-start items-center text-xs md:text-xl'>
                        <img className='h-10 w-auto' src={email} alt="" />
                        <p className='text-base'>Email</p>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer