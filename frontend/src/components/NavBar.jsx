import React from 'react'
import './NavBar.css'

function NavBar() {
  const menuitem = ['Home', 'About Us', 'Events', 'Team', 'Calender', 'Contact Us'];
  return (
    <div className='relative w-fit px-16 mt-0 pt-0 pb-4'>
        <img className='absolute top-0 left-1/2 -z-10 transform -translate-x-1/2' src="https://i.ibb.co/B27wCtBQ/navbg.png" alt="" />
            <ul>
                <div className='flex flex-row m-0 p-2 gap-9 leading-none text-[clamp(0.5rem,1.5vw,1.2rem)] text-nowrap text-white  '>
                    {menuitem.map((item, index) => {
                        const sectionId = item.toLowerCase();
                        return (
                            <li
                                key={index}
                                className='cursor-pointer hover:text-[#a1a095] transition-colors duration-300'
                                onClick={() => {
                                    const section = document.getElementById(sectionId);
                                    if (section) {
                                        section.scrollIntoView({ behavior: 'smooth' });
                                    }
                                }}
                            >
                                {item}
                            </li>
                        );
                    })}
                    
                </div>
            </ul>
    </div>
  )
}

export default NavBar