import React from 'react'
import EventCard from '../components/cards/EventCard'
import eventlogo from '../../assets/Events/event-logo.svg'
import eventimage from '../../assets/Events/event-image.svg'


function Events() {

    const events =[
        {icon: eventlogo, name:"", imgsrc: eventimage},
        {icon: eventlogo, name:"", imgsrc: eventimage},
        {icon: eventlogo, name:"", imgsrc: eventimage},
        {icon: eventlogo, name:"", imgsrc: eventimage},
        {icon: eventlogo, name:"", imgsrc: eventimage},
        {icon: eventlogo, name:"", imgsrc: eventimage},
        {icon: eventlogo, name:"", imgsrc: eventimage},
    ]

  return (
    <div className='flex flex-col gap-3 justify-center items-center'>
        <div>
            <div>
                <p>OUR EVENTS</p>
            </div>
            <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque vero cum dolorum optio nobis odit. Lorem ipsum dolor sit amet.</p>
            </div>
        </div>
        <div>
            {
                event.map((event)=>(

                ))

            }
        </div>
    </div>
  )
}

export default Events