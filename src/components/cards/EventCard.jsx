import React from 'react'

import Primarybtn from '../Primarybtn'

function EventCard({eventimage, eventlogo}) {
  return (
    <div className='flex flex-row gap-2 justify-center items-center p-2 bg-transparent border-solid border-black border-2'>
        <div className='flex flex-col gap-2 justify-center items-center'>
            <div>
                <img src={eventlogo} alt="" />
            </div>
            <div>
                <Primarybtn/>
            </div>
        </div>
        <div className='flex justify-center items-center'>
            <img className='h-[98.44px] w-auto rounded-sm' src={eventimage} alt="" />
        </div>
    </div>
  )
}

export default EventCard