import React from 'react'
import Primarybtn from '../components/Primarybtn'

function Collaborate() {
  return (
    <div className='flex w-[95vw] flex-col lg:flex-row justify-center gap-y-8 lg:justify-between lg:px-16 md:py-16   lg:py-20 items-center rounded-xl bg-primarybg'>
        <div>
            <p className='text-black text-[clamp(1.75rem,8vw,3.875rem)] font-bold text-center lg:text-left'>Want To Collaborate<br/>Just Fill Out The Form</p>
        </div>
        <div className=''><Primarybtn label={"FILL THE FORM"}/></div>
    </div>
  )
}

export default Collaborate