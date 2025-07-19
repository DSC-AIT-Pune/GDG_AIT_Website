import React from 'react'
import EventCard from '../components/cards/EventCard'
import eventlogo from '../assets/Events/event-logo.svg'
import eventimage from '../assets/Events/event-image.svg'
import Primarybtn from '../components/Primarybtn'
import './Calender.css'
import carved from '../assets/Calender/carved.svg'
import UpcomingEvents from '../components/cards/UpcomingEvents'
import eventimg from '../assets/Events/event-image.svg'
import CalenderComp from '../components/CalenderComp'
import CalenderBG from '../assets/Calender/CalenderBG.png'
import eventdata from '../Data/UpcomingEvent.js'


function Calender() {


  return (
    <div className='relative flex flex-col mx-auto gap-y-14 py-6 rounded-xl justify-center w-[95vw] min-w-[95vw] items-center bg-primarybg'>
        <div
            className="absolute inset-0 z-0"
            style={{
            backgroundColor: '#f3f1e7',
            backgroundImage: `url(${CalenderBG})`,
            backgroundRepeat: 'repeat',
            backgroundSize: 'auto',
            opacity: '5%',
            }}
        ></div>
        <div className='flex flex-col w-full'  >
            <div >
                <p className='text-[#0F9D58] text-[clamp(1.75rem,8vw,6rem)] font-seconday text-center'>Yearly Calender</p>
            </div>
            <div className='flex flex-col justify-center items-center w-full'>
                <p className='text-[clamp(0.15rem,2.2vw,1rem)] w-4/5 text-center '> Here are the upcoming events we will have with their scheduled dates throughout the year.</p>
            </div>
        </div>
        <div className="flex flex-col xl:flex-row xl:w-full justify-evenly items-center gap-y-9 ">
            <div>
                <CalenderComp/>
            </div>
            <div className="w-full max-w-[945px] bg-white rounded-xl shadow-lg p-4 md:p-6 lg:p-8">
      <p className="text-black text-[16px] md:text-[18px] lg:text-[28px] font-bold mb-4 lg:mb-6">Upcoming Events</p>
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 justify-center items-center">
        {eventdata.map((event, index) => (
          <div
            key={index}
            className="flex justify-center w-full max-w-[95vw] sm:max-w-[80vw] md:max-w-[60vw] lg:max-w-xs"
          >
            <UpcomingEvents eventimage={event.imgsrc} date={event.deadline} />
          </div>
        ))}
      </div>
    </div>
        </div>

    </div>
  )
}

export default Calender