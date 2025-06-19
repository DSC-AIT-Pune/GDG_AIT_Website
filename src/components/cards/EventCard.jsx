

import React from 'react'
import Primarybtn from '../Primarybtn'
import Secondarybtn from '../Secondarybtn'

function EventCard({ eventimage, eventlogo }) {
  return (
    <div className="flex flex-row gap-2 justify-center items-center border border-black py-4 px-3.5 bg-transparent rounded-xl w-[90vw] sm:w-[400px] md:w-[450px]">
      <div className="flex flex-col gap-y-5 justify-center items-center flex-shrink-0 w-[40%]">
        <img className="w-14 md:w-20 h-auto" src={eventlogo} alt="logo" />
        <Secondarybtn label="FLUTTER STUDY JAMS"/>
      </div>

      <div className="flex justify-center items-center w-[60%]">
        <img
          className="h-auto w-full max-w-[250px] rounded-xl"
          src={eventimage}
          alt="event"
        />
      </div>
    </div>
  )
}

export default EventCard
