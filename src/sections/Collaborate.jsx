import React from 'react'
import Primarybtn from '../components/Primarybtn'
import CollabBG from '../assets/Collaborate/CollabBG.png'
import { Link } from 'react-router-dom'

function Collaborate() {
  return (
    <div className='relative flex mx-auto w-[95vw] flex-col lg:flex-row justify-center gap-y-8 lg:justify-between lg:px-16 md:py-16   lg:py-20 items-center rounded-xl bg-primarybg'>
        
        {/* Background */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundColor: '#f3f1e7',
            backgroundImage: `url(${CollabBG})`,
            backgroundRepeat: 'repeat',
            backgroundSize: 'auto',
            opacity: '5%',
          }}
        ></div>
        

        <div>
            <p className='text-black text-[clamp(1.75rem,8vw,3.875rem)] font-bold text-center lg:text-left'>Want To Collaborate<br/>Just Fill Out The Form</p>
        </div>
        <Link to="https://forms.gle/nCqwFKEs4zEgFtBd8" target='_blank'><Primarybtn label={"FILL THE FORM"}/></Link>

    </div>
  )
}

export default Collaborate