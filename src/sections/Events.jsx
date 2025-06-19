import React from 'react'
import EventCard from '../components/cards/EventCard'
import eventlogo from '../assets/Events/event-logo.svg'
import eventimage from '../assets/Events/event-image.svg'
import Primarybtn from '../components/Primarybtn'


function Events() {

    const events =[
        {icon: eventlogo, name:"", imgsrc: eventimage},
        {icon: eventlogo, name:"", imgsrc: eventimage},
        {icon: eventlogo, name:"", imgsrc: eventimage},
        {icon: eventlogo, name:"", imgsrc: eventimage},


    ]

  return (
    <div className='flex flex-col gap-y-14 py-6 rounded-xl justify-center w-[95vw] min-w-[95vw] items-center bg-primarybg'>
        <div className='flex flex-col w-full'  >
            <div >
                <p className='text-[#0F9D58] text-[clamp(1.75rem,8vw,6rem)] font-seconday text-center'>OUR EVENTS</p>
            </div>
            <div className='flex justify-center w-full'>
                <p className='text-[clamp(0.15rem,3vw,1rem)] w-3/5 text-center  '>Lorem ipsum dolor sit amet consectetur nobis odit. Lorem ipsum dolor sit amet.</p>
            </div>
        </div>
        <div className="flex flex-wrap justify-evenly gap-y-9  md:px-4 mx-auto">
        {events.map((event, index) => (
            <div key={index} className="flex justify-center">
            <EventCard eventlogo={event.icon} eventimage={event.imgsrc} />
            </div>
        ))}
        </div>
        <div>
            <Primarybtn label={"EXPLORE EVENTS"}/>

        </div>
    </div>
  )
}

export default Events