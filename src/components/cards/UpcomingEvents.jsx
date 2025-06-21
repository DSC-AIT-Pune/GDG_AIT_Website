import React from 'react'
import Arrow from '../Arrow'


function UpcomingEvents({eventimage, date}) {
  return (
    <div className='flex  flex-col border-1 border-black border-solid rounded-xl md:p-3 p-2 lg:p-4 gap-y-2'>
        <div>
            <img className='h-[75px] w-auto md:h-[120px] lg:h-[250px]' src={eventimage} alt="" />
        </div>
        <div className='flex flex-row justify-between items-center md:px-[6px]'>
            <div><p className='text-[clamp(16px,1.9vw,1.5rem)]'>{date}</p></div>
            <div className='h-[20px] w-[20px] md:h-[25px] md:w-[25px] lg:h-[30px] lg:w-[30px] flex justify-center items-center'>
                <Arrow/>
            </div>
        </div>
    </div>
  )
}

export default UpcomingEvents