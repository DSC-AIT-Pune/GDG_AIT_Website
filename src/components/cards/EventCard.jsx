

import React from 'react'
import Primarybtn from '../Primarybtn'
import Secondarybtn from '../Secondarybtn'
import EventBtn from '../EventBtn'

function EventCard({ eventimage,eventname, eventlogo }) {
  return (
    <div className="flex flex-col gap-y-8 justify-center items-center border p-6 bg-white shadow-lg rounded-xl ">


      <div className="flex justify-center items-center w-[260px] md:w-[300px] lg:w-[330px]">
        <img
          className="h-auto w-full border-black border-solid border-1 rounded-xl"
          src={eventimage}
          alt="event"
        />
      </div>

            <div className="flex flex-col gap-y-5 justify-center items-center flex-shrink-0 w-[40%]">
        <EventBtn label={eventname}/>
      </div>
    </div>
  )
}

export default EventCard
