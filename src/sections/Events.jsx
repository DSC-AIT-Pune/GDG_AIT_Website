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
import GenAI from '../assets/Events/GenAI.webp'
import EventData from '../Data/EventData.js'
import { Link } from 'react-router-dom'

function Events() {
    const events = [
        {icon: eventlogo, name:"Enliven Hackathon", imgsrc: enliven},
        {icon: eventlogo, name:"Google Solutions", imgsrc: solution},
        {icon: eventlogo, name:"Flutter Workshop", imgsrc: flutter},
        {icon: eventlogo, name:"Hacktober Fest", imgsrc: hacktober},
        {icon: eventlogo, name:"ML Study Jam", imgsrc: GenAI},
    ]

    return (
        <main className='relative flex flex-col gap-y-14 mx-auto py-6 rounded-xl justify-center w-[95vw] min-w-[95vw] items-center bg-primarybg z-5'>
            {/* Decorative background - hidden from screen readers */}
            <div
                className="absolute inset-0 -z-2"
                style={{
                backgroundColor: '#f3f1e7',
                backgroundImage: `url(${EventBG})`,
                backgroundRepeat: 'repeat',
                backgroundSize: 'auto',
                opacity: '5%',
                }}
                aria-hidden="true"
            ></div>

            <header className='flex flex-col w-full gap-y-6'>
                <h1 className='text-[#0F9D58] z-10 text-[clamp(1.75rem,8vw,6rem)] font-seconday text-center'>
                    OUR EVENTS
                </h1>
                
                {/* Event description section */}
                <section className='flex justify-center w-full px-4'>
                    <div className='max-w-4xl text-center'>
                        <p className='text-[clamp(0.875rem,2vw,1.125rem)] text-gray-600 leading-relaxed mb-6'>
                            Join us for exciting workshops, hackathons, and tech talks that bring together passionate developers, 
                            innovators, and tech enthusiasts. From hands-on coding sessions to industry insights, our events are 
                            designed to foster learning, networking, and collaboration within the Google Developer community at AIT Pune.
                        </p>
                    </div>
                </section>
            </header>

            <section className="flex w-[80%] flex-wrap justify-around gap-y-15 gap-x-15 md:px-4 mx-auto">
                {EventData.map((event, index) => (
                    <article key={index} className="flex justify-center">
                        <Link to={`/eventdetails/${event.id}`} aria-label={`View details about ${event.name}`}>
                            <EventCard eventlogo={event.icon} eventname={event.name} eventimage={event.imgsrc} />
                        </Link>
                    </article>
                ))}
            </section>
            
            <nav>
                <Primarybtn label={"EXPLORE EVENTS"}/>
            </nav>
        </main>
    )
}

export default Events