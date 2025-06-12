import React from 'react'

import Primarybtn from '../Primarybtn'

function EventCard({eventimage, eventlogo}) {
  return (
    <div className='flex flex-row gap-2 justify-center items-center w-full max-w- border-solid py-4 px-3.5 border-black border-[0.0625rem] bg-transparent rounded-xl'>
        <div className='flex flex-col w-full gap-y-5 justify-center items-center'>
            <div>
                <img className='w-14 h-auto' src={eventlogo} alt="hello" />
            </div>
            <div>
                <Primarybtn/>
            </div>
        </div>
        <div className='flex justify-center w-full items-center'>
            <img className='h-auto w-full max-w-[250px] md:max-w-[250px] lg:max-w-[250px]  rounded-xl' src={eventimage} alt="" />
        </div>
    </div>
  )
}

export default EventCard