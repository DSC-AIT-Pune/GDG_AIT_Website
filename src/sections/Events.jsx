import React from 'react'
import EventCard from '../components/cards/EventCard'
import eventlogo from '../assets/Events/event-logo.svg'
import eventimage from '../assets/Events/event-image.svg'
import Primarybtn from '../components/Primarybtn'
import EventBG from '../assets/Events/EventsBG.png'
import enliven from '../assets/Events/enliven.webp'
import solution from '../assets/Events/solution.webp'
import flutter from '../assets/Events/flutter.webp'
import hacktober from '../assets/Events/hacktober.jpg'


function Events() {

    const events =[
        {icon: eventlogo, name:"Enliven", imgsrc: enliven},
        {icon: eventlogo, name:"", imgsrc: solution},
        {icon: eventlogo, name:"", imgsrc: flutter},
        {icon: eventlogo, name:"", imgsrc: hacktober},


    ]

  return (
    <div className='relative flex flex-col gap-y-14 mx-auto py-6 rounded-xl justify-center w-[95vw] min-w-[95vw] items-center bg-primarybg'>


        {/* Background */}
        <div
            className="absolute inset-0 z-0"
            style={{
            backgroundColor: '#f3f1e7',
            backgroundImage: `url(${EventBG})`,
            backgroundRepeat: 'repeat',
            backgroundSize: 'auto',
            opacity: '5%',
            }}
        ></div>


        <div className='flex flex-col w-full'  >
            <div >
                <p className='text-[#0F9D58] z-10 text-[clamp(1.75rem,8vw,6rem)] font-seconday text-center'>OUR EVENTS</p>
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