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


function Calender() {

    const events =[
            {icon: eventlogo, name:"", imgsrc: eventimg, date : "Date"},
            {icon: eventlogo, name:"", imgsrc: eventimg, date : "Date"},
            {icon: eventlogo, name:"", imgsrc: eventimg, date : "Date"},

        ]


  return (
    <div className='flex flex-col mx-auto gap-y-14 py-6 rounded-xl justify-center w-[95vw] min-w-[95vw] items-center bg-primarybg'>
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
            <div className='max-w-[945px] bg-center relative bg-no-repeat bg-[length:100%_100%] bgimage'>
                <p className='text-black absolute text-[14px] md:text-[18px] lg:text-[28px] lg:left-7 lg:top-3 font-bold top-2 left-4'>Upcoming Events</p>
                
                <div className='flex flex-row gap-4 lg:mx-4 my-[3%] mt-[7%] justify-evenly  items-center p-5'>
                    {events.map((event, index) => (
                        <div key={index} className="flex justify-center">
                        <UpcomingEvents className='' eventimage={event.imgsrc} date={event.date} />
                        </div>
                    ))}
                </div>
            </div>
            


        </div>

    </div>
  )
}

export default Calender