import React from 'react'
import Footer from '../sections/Footer';
import { useNavigate, useParams } from 'react-router-dom';
import EventData from '../Data/EventData.js';

import Primarybtn from '../components/Primarybtn';


function EventDetails() {

    const {id} = useParams();
    const data = EventData.find(item => item.id === parseInt(id));
    if (!data) {
        return <div>Event not found</div>;
    }

    const navigate = useNavigate();


    return (
        <>
            <div className='relative flex flex-col gap-y-14 mx-auto py-6 rounded-xl justify-center w-[95vw] items-center mt-8 bg-primarybg mb-8'>
                
                {/* Background */}
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        backgroundColor: '#f3f1e7',
                        backgroundImage: `url("https://i.ibb.co/BKd2MfkQ/EventsBG.png)`,
                        backgroundRepeat: 'repeat',
                        backgroundSize: 'auto',
                        opacity: '5%',
                    }}
                ></div>

                <div className='w-full flex z-10 flex-row justify-between lg:px-14 px-6  '>
                    
                    <img className='lg:h-17  w-auto lg' src="https://i.ibb.co/WNnV0H6Y/logoGdsc.png" alt="GDG Logo" />
                    
                    
                    <button onClick={() => {console.log('Back button clicked'); navigate(-1)}}><img className='lg:h-17 h-14 cursor-pointer w-auto' src="https://i.ibb.co/C5hFYjVX/backbtn.png" alt="Back Button" /></button>
                </div>

                {/* Title */}
                <div className='flex flex-col w-full z-10'>
                    <div>
                        <p className='text-[#0F9D58] text-[clamp(1.75rem,8vw,6rem)] font-seconday text-center mb-4'>EVENT DETAILS</p>
                    </div>
                </div>

                {/* Main Content Container */}
                <div className='w-full max-w-7xl mx-auto px-4 z-10'>
                    
                    {/* Hero Section with Image and Quick Details */}
                    <div className='bg-white rounded-2xl p-8 shadow-xl border border-gray-200 mb-8'>
                        <div className='flex flex-col lg:flex-row gap-8'>
                            
                            {/* Left Side - Image */}
                            <div className='flex-1 flex justify-center'>
                                <img 
                                    src={data.imgsrc} 
                                    alt={data.name}
                                    className='w-full max-w-lg h-auto object-cover rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300'
                                />
                            </div>

                            {/* Right Side - Event Info */}
                            <div className='flex-1 flex flex-col justify-center'>
                                <h1 className='text-[clamp(2rem,5vw,4rem)] font-seconday text-[#E94436] mb-6 leading-tight'>
                                    {data.name}
                                </h1>
                                
                                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-8'>
                                    <div className='bg-gray-50 rounded-lg p-4'>
                                        <h3 className='text-sm font-bold text-gray-500 uppercase tracking-wide mb-2'>Deadline</h3>
                                        <p className='text-lg font-semibold text-gray-800'>{data.deadline}</p>
                                    </div>
                                    
                                    <div className='bg-gray-50 rounded-lg p-4'>
                                        <h3 className='text-sm font-bold text-gray-500 uppercase tracking-wide mb-2'>Prize Pool</h3>
                                        <p className='text-lg font-semibold text-gray-800'>{data.PriePool}</p>
                                    </div>
                                </div>

                                {/* Registration Button */}
                                <div className='flex justify-start'>
                                    <a 
                                        href={data.link} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className='transform hover:scale-105 transition-transform duration-200'
                                    >
                                        {/* <Primarybtn label={"REGISTER NOW"} /> */}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Details Grid */}
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8'>
                        
                        {/* Eligibility */}
                        <div className='bg-white rounded-xl p-6 shadow-lg border border-gray-200'>
                            <h3 className='text-[clamp(1.25rem,3vw,2rem)] font-seconday text-[#4385F3] mb-4 flex items-center'>
                                <span className='w-3 h-3 bg-[#4385F3] rounded-full mr-3'></span>
                                Eligibility
                            </h3>
                            <p className='text-gray-700 leading-relaxed'>{data.Eligibility}</p>
                        </div>

                        {/* Timeline */}
                        <div className='bg-white rounded-xl p-6 shadow-lg border border-gray-200'>
                            <h3 className='text-[clamp(1.25rem,3vw,2rem)] font-seconday text-[#FABC05] mb-4 flex items-center'>
                                <span className='w-3 h-3 bg-[#FABC05] rounded-full mr-3'></span>
                                Timeline
                            </h3>
                            <p className='text-gray-700 leading-relaxed'>{data.Timeline}</p>
                        </div>
                    </div>

                    {/* Description */}
                    <div className='bg-white rounded-xl p-8 shadow-lg border border-gray-200'>
                        <h3 className='text-[clamp(1.5rem,4vw,3rem)] font-seconday text-[#109D58] mb-6 flex items-center'>
                            <span className='w-4 h-4 bg-[#109D58] rounded-full mr-4'></span>
                            About This Event
                        </h3>
                        <div className='prose prose-gray max-w-none'>
                            <p className='text-gray-700 text-lg leading-relaxed mb-6'>{data.description}</p>
                        </div>
                        
                        {/* Bottom CTA */}
                        <div className='flex justify-center pt-6 border-t border-gray-200'>
                            <a 
                                href={data.link} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className='transform hover:scale-105 transition-transform duration-200'
                            >
                                <Primarybtn label={"JOIN THE EVENT"} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default EventDetails