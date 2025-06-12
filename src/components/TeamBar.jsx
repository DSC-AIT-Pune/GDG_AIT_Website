import React from 'react'

function TeamBar() {
  return (
    <div className='bg-black text-white text-[clamp(0.5313rem,2.6vw,1.25rem)] py-[0.625rem] w-[75vw] lg:w-[55vw] rounded-[1.25rem]'>
        <ul className='flex flex-row justify-around flex-nowrap px-4 list-none'>
            <li>Faculty Member</li>
            <li>Mentor</li>
            <li>Lead</li>
            <li>Core Members</li>
        </ul>
    </div>
  )
}

export default TeamBar