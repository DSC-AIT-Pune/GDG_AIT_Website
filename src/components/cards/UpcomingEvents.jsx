import React from 'react'
import Arrow from '../Arrow'


function UpcomingEvents({eventimage, date}) {
  return (
    <div className="flex scale-90 flex-col border-1 border-black border-solid rounded-xl md:p-3 p-2 lg:p-4 gap-y-2 w-full max-w-[95vw] sm:max-w-[80vw] md:max-w-[65vw] lg:max-w-[500px]">
      <div>
        <img
          className="h-[210px] w-auto sm:h-[230px] md:h-[200px] lg:h-[260px] xl:h-[250px] mx-auto"
          src={eventimage}
          alt=""
        />
      </div>
      <div className="flex flex-row justify-between items-center md:px-[6px]">
        <div>
          <p className="text-[clamp(18px,2.2vw,1.7rem)] lg:text-[2rem]">{date}</p>
        </div>
        <div className="h-[20px] w-[20px] md:h-[25px] md:w-[25px] lg:h-[30px] lg:w-[30px] flex justify-center items-center">
          <Arrow />
        </div>
      </div>
    </div>
  );
}

export default UpcomingEvents;