import React from 'react'
import EventCard from '../components/cards/EventCard'
import eventlogo from '../assets/Events/event-logo.svg'
import eventimage from '../assets/Events/event-image.svg'


function Events() {

    const events =[
        {icon: eventlogo, name:"", imgsrc: eventimage},
        {icon: eventlogo, name:"", imgsrc: eventimage},
        {icon: eventlogo, name:"", imgsrc: eventimage},
        {icon: eventlogo, name:"", imgsrc: eventimage},
        {icon: eventlogo, name:"", imgsrc: eventimage},
        {icon: eventlogo, name:"", imgsrc: eventimage},
        {icon: eventlogo, name:"", imgsrc: eventimage},
        {icon: eventlogo, name:"", imgsrc: eventimage},
        {icon: eventlogo, name:"", imgsrc: eventimage},
        {icon: eventlogo, name:"", imgsrc: eventimage},

    ]

  return (
    <div className='flex flex-col gap-y-14 py-6 rounded-xl justify-center w-[95vw] items-center bg-primarybg'>
        <div className='flex flex-col gap-y-3.5 '  >
            <div >
                <p className='text-[#0F9D58] text-3xl font-seconday text-center'>OUR EVENTS</p>
            </div>
            <div className='flex justify-center'>
                <p className='text-xs w-3/5 text-center '>Lorem ipsum dolor sit amet consectetur nobis odit. Lorem ipsum dolor sit amet.</p>
            </div>
        </div>
        <div className="flex flex-wrap justify-center gap-6 px-4  max-w-3xl mx-auto">
        {events.map((event, index) => (
            <div key={index} className="flex justify-center w-full">
            <EventCard eventlogo={event.icon} eventimage={event.imgsrc} />
            </div>
        ))}
        </div>
    </div>
  )
}

export default Events