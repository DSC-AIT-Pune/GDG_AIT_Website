import React from 'react'


function Primarybtn() {

    
    

  return (
    <div className='flex justify-center items-center rounded-full w-fit relative h-fit
     bg-white border-[0.0513rem] border-black border-solid'>
        <div className='w-[60%] mr-4 ml-1 h-auto flex justify-start items-center'>
            <p className='text-[0.5rem] py-1.5 pr-5 text-center font-bold  translate-y-[0.5px]'>FLUTTER STUDY JAMS</p>
        </div>
        
        <div className='absolute flex border-l-[0.0513rem] border-black border-solid  justify-center items-center right-0 top-1/2 transform -translate-y-[50%] rounded-full h-full aspect-square   bg-blue-300 z-5 '>
            <svg className='w-5 h-auto ' xmlns="http://www.w3.org/2000/svg" width="7" height="7" viewBox="0 0 7 7" fill="none">
                <path d="M6.42563 3.68537C6.5634 3.5476 6.5634 3.32423 6.42563 3.18646L4.18056 0.941388C4.04279 0.80362 3.81942 0.80362 3.68165 0.941388C3.54388 1.07916 3.54388 1.30252 3.68165 1.44029L5.67727 3.43591L3.68165 5.43153C3.54388 5.5693 3.54388 5.79267 3.68165 5.93044C3.81942 6.06821 4.04279 6.06821 4.18056 5.93044L6.42563 3.68537ZM0.877441 3.43591V3.78869H4.2878V3.43591V3.08313H0.877441V3.43591ZM4.2878 3.43591V3.78869H6.17618V3.43591V3.08313H4.2878V3.43591Z" fill="black"/>
            </svg>
        </div>
    </div>
  )
}

export default Primarybtn