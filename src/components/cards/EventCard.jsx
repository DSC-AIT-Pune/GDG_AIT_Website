// import React from 'react'

// import Primarybtn from '../Primarybtn'

// function EventCard({eventimage, eventlogo}) {
//   return (
//     <div className='flex flex-row gap-2 justify-center items-center w-full max-w-[450px] border-solid py-4 px-3.5 border-black border-[0.0625rem] bg-transparent rounded-xl'>
//         <div className='flex flex-col w-full gap-y-5 justify-center items-center'>
//             <div>
//                 <img className='w-14 md:w-20 h-auto' src={eventlogo} alt="hello" />
//             </div>
//             <div>
//                 <Primarybtn/>
//             </div>
//         </div>
//         <div className='flex justify-center w-full items-center'>
//             <img className='h-auto w-full max-w-[250px] md:max-w-[250px] lg:max-w-[250px] rounded-xl' src={eventimage} alt="" />
//         </div>
//     </div>
//   )
// }

// export default EventCard

import React from 'react'
import Primarybtn from '../Primarybtn'

function EventCard({ eventimage, eventlogo }) {
  return (
    <div className="flex flex-row gap-2 justify-center items-center border border-black py-4 px-3.5 bg-transparent rounded-xl w-[90vw] sm:w-[400px] md:w-[450px]">
      <div className="flex flex-col gap-y-5 justify-center items-center flex-shrink-0 w-[40%]">
        <img className="w-14 md:w-20 h-auto" src={eventlogo} alt="logo" />
        <Primarybtn label="FLUTTER STUDY JAMS"/>
      </div>

      <div className="flex justify-center items-center w-[60%]">
        <img
          className="h-auto w-full max-w-[250px] rounded-xl"
          src={eventimage}
          alt="event"
        />
      </div>
    </div>
  )
}

export default EventCard
