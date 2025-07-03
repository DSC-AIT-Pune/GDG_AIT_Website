import React from 'react'
import Hamburger from '../assets/Home/Hamburger.svg'
import Logo from '../assets/Home/Group.png'
import TypingEffect from '../components/TypingEffect'
import StudentChapterCard from '../components/cards/StudentChapterCard'

function Home() {
  return (
    <div className='flex flex-col gap-y-14 py-6 rounded-xl justify-center w-[95vw] min-w-[95vw] items-center bg-primarybg'>
        <div className='flex flex-row w-full justify-between px-5 '>
            <img src={Logo} alt="Logo" />
            <img src={Hamburger} alt="Hamburger Menu" />
        </div>

        <TypingEffect/>
        <div className='flex flex-row w-full justify-between   '>
            <p className=' text-3xl tracking-wider font-seconday font-semibold'><span className='text-[#E94436]'>G</span><span className='text-[#4385F3]'>D</span><span className='text-[#109D58]'>S</span><span className='text-[#FABC05]'>C</span><br /><span>AIT PUNE</span></p>
        </div>
    </div>
  )
}

export default Home