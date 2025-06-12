import React from 'react'
import TeamBar from '../components/TeamBar'
import IntroCard from '../components/cards/IntroCard'


function Team() {

    const team = [
        {
        message: "my names is arshia",
        position: "GDSC LEAD",
        instagram: "insta@123"
        },
        {
        message: "my names is arshia",
        position: "GDSC LEAD",
        instagram: "insta@123"
        },
        {
        message: "my names is arshia",
        position: "GDSC LEAD",
        instagram: "insta@123"
        },
        {
        message: "my names is arshia",
        position: "GDSC LEAD",
        instagram: "insta@123"
        },
        {
        message: "my names is arshia",
        position: "GDSC LEAD",
        instagram: "insta@123"
        },
        {
        message: "my names is arshia",
        position: "GDSC LEAD",
        instagram: "insta@123"
        },
    ]


  return (
    <div className='flex flex-col justify-center gap-y-14 py-6 rounded-xl w-[95vw] bg-primarybg'>
        <div className='flex justify-center font-seconday text-[clamp(1.75rem,8vw,6rem)] text-[#E94436] '>
            <p>MEET OUR TEAM</p>
        </div>
        <div className='flex justify-center'>
            <TeamBar/>
        </div>

        {/* instead of this create a slider  */}

        {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-84 gap-x-58 px-4 mx-auto place-items-center">
        {team.map((item, index) => (
            <IntroCard
            key={index}
            position={item.position}
            message={item.message}
            instagram={item.instagram}
            />
        ))}
        </div> */}

        <div></div>
    </div>
  )
}

export default Team