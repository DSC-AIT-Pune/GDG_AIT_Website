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

    const events =[
            {icon: eventlogo, name:"", imgsrc: eventimg, date : "Date"},
            {icon: eventlogo, name:"", imgsrc: eventimg, date : "Date"},
            {icon: eventlogo, name:"", imgsrc: eventimg, date : "Date"},

        ]


  return (
    <div className='relative flex flex-col mx-auto gap-y-14 py-6 rounded-xl justify-center w-[95vw] min-w-[95vw] items-center bg-primarybg'>
        
        {/* Background */}
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
                <p className='text-[clamp(0.15rem,2.2vw,1rem)] w-4/5 text-center  '>Lorem ipsum dolor sit amet consectetur nobis odit. Lorem ipsum dolor sit amet.</p>
                <p className='text-[clamp(0.15rem,2.2vw,1rem)] w-4/5 text-center  '>Lorem ipsum dolor sit amet consectetur nobis odit. Lorem ipsum dolor sit amet.</p>
            </div>
        </div>
        <div className="flex flex-col xl:flex-row xl:w-full justify-evenly items-center gap-y-9 ">
            <div>
                <CalenderComp/>
            </div>
            <div className='max-w-[945px]  bg-cente h-full relative bg-no-repeat bg-[length:100%_100%] bgimage'>
                <p className='text-black absolute text-[16px] md:text-[18px] lg:text-[28px] lg:left-7 lg:top-3 font-bold top-1 left-4'>Upcoming Events</p>
                <div className='h-2'></div>
                <div className='flex flex-col lg:flex-row gap-10 lg:gap-10  lg:mx-4 lg:my-[3%] lg:mt-[7%] justify-evenly items-center p-5'>
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