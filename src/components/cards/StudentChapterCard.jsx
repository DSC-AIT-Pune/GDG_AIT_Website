import React, { useState } from 'react'
import EventBtn from "./JoinNow"

const StudentChapterCard = () => {
  const [showToast, setShowToast] = useState(false)

  const handleJoinClick = () => {
    setShowToast(true)
    setTimeout(() => {
      setShowToast(false)
    }, 3000)
  }

  return (
    <div className="w-[80vw] min-w-[70vw] md:max-w-[40vw] md:min-w-[35vw] mx-auto">
      <div className="relative bg-white rounded-2xl border-2 border-black p-6 shadow-lg">
        {/* GDSC Logo Circle */}
        <div className="absolute -top-4 left-6 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center shadow-md">
          <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
            <div className="w-3 h-3 bg-gradient-to-r from-blue-500 via-green-500 to-yellow-500 rounded-full"></div>
          </div>
        </div>

        {/* Content */}
        <div className="pt-4">
          {/* Username */}
          <p className="text-black text-sm md:text-base font-medium mb-4">@gdsc_aitpune</p>

          {/* Main Content Area */}
          <div className="flex justify-between items-end">
            {/* Title */}
            <div className="flex-1">
              <h2 className="text-black text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
                GDG STUDENT
                <br />
                CHAPTER
              </h2>
            </div>

            <div onClick={handleJoinClick}>
              <EventBtn label="Join Us"/>
            </div>
          </div>
        </div>
      </div>

      
      {showToast && (
        <div className="fixed top-4 right-4 z-50 bg-white border-2 border-black rounded-lg p-4 shadow-lg animate-slide-in">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-yellow-500 rounded-full mr-3"></div>
            <p className="text-black font-medium">Forms are not open yet!</p>
            <button 
              onClick={() => setShowToast(false)}
              className="ml-4 text-gray-500 hover:text-black"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default StudentChapterCard
