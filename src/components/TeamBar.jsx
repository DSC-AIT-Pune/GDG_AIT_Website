import React from 'react'

function TeamBar({ selected, setSelectedCategory }) {
  const categories = [ 'Mentors', 'Leads & Domain Heads','Alumni'];

  return (
    <div className='z-10 bg-black text-white text-[clamp(0.5313rem,2.6vw,1.25rem)] py-[0.625rem] w-[75vw] lg:w-[55vw] rounded-[1.25rem]'>
        <ul className='flex flex-row justify-around items-center flex-nowrap px-4 list-none'>
          {
            categories.map((cat)=>(
              <li
              key={cat}
              onClick={()=>setSelectedCategory(cat)}
              className={`cursor-pointer  rounded-full transition-all duration-200 ${selected === cat ? 'underline  font-bold' : ''}`}
              >
                {cat}
              </li>

            ))
          }
        </ul>
    </div>
  )
}

export default TeamBar