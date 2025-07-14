import React from 'react'
import Primarybtn from '../Primarybtn'
import Secondarybtn from '../Secondarybtn'

function EventCard({ eventimage, eventlogo, eventname = "FLUTTER STUDY JAMS" }) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 sm:gap-2 justify-center items-center border border-black p-4 sm:py-4 sm:px-3.5 bg-transparent rounded-xl w-full max-w-[90vw] sm:max-w-[400px] md:max-w-[450px] lg:max-w-[500px]">
      {/* Left section with logo and button */}
      <div className="flex flex-col gap-y-3 sm:gap-y-5 justify-center items-center w-full sm:w-[40%]">
        <img 
          className="w-16 h-16 sm:w-14 sm:h-14 md:w-20 md:h-20 lg:w-24 lg:h-24 object-contain" 
          src={eventlogo} 
          alt="logo" 
        />
        <div className="w-full max-w-[200px] sm:max-w-none">
          <Secondarybtn label={eventname}/>
        </div>
      </div>
      
      {/* Right section with event image */}
      <div className="flex justify-center items-center w-full sm:w-[60%]">
        <img
          className="h-auto w-full max-w-[280px] sm:max-w-[200px] md:max-w-[250px] lg:max-w-[280px] rounded-xl object-cover aspect-square sm:aspect-auto"
          src={eventimage}
          alt="event"
        />
      </div>
    </div>
  )
}

export default EventCard