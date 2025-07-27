import React from 'react'
import Primarybtn from '../components/Primarybtn'
import CollabBG from '../assets/Collaborate/CollabBG.png'
import { Link } from 'react-router-dom'

function Collaborate() {
  return (
    <section className='relative flex mx-auto w-[95vw] flex-col lg:flex-row justify-center gap-y-8 lg:justify-between lg:px-16 md:py-16 lg:py-20 items-center rounded-xl bg-primarybg'>
        
        {/* Decorative background - hidden from screen readers */}
        <div
          className="absolute inset-0 z-0 opacity-[3%] md:opacity-5"
          style={{
            backgroundColor: '#f3f1e7',
            backgroundImage: `url(${CollabBG})`,
            backgroundRepeat: 'repeat',
            backgroundSize: 'auto',
          }}
          aria-hidden="true"
        ></div>
        
        {/* Main content */}
        <article className='text-center lg:text-left'>
            <h2 className='text-black text-[clamp(1.75rem,8vw,3.875rem)] font-bold'>
                Want To Collaborate<br/>Just Fill Out The Form
            </h2>
        </article>
        
        {/* Call-to-action button */}
        <nav>
            <Link to="https://forms.gle/nCqwFKEs4zEgFtBd8" target='_blank' rel="noopener noreferrer">
                <Primarybtn label={"FILL THE FORM"}/>
            </Link>
        </nav>

    </section>
  )
}

export default Collaborate