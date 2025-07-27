import React from 'react'
import EventBtn from "./JoinNow"
import { Link } from 'react-router-dom'

const StudentChapterCard = () => {
  return (
    <article className="w-[80vw] min-w-[70vw] md:max-w-[40vw] md:min-w-[35vw] mx-auto">
      <div className="relative bg-white rounded-2xl border-2 border-black p-6 shadow-lg">
        {/* GDSC Logo Circle - Decorative */}
        <div className="absolute -top-4 left-6 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center shadow-md" aria-hidden="true">
          <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
            <div className="w-3 h-3 bg-gradient-to-r from-blue-500 via-green-500 to-yellow-500 rounded-full"></div>
          </div>
        </div>

        {/* Content */}
        <div className="pt-4">
          {/* Username */}
          <p className="text-black text-sm md:text-base font-medium mb-4">
            <a href="https://instagram.com/gdsc_aitpune" target="_blank" rel="noopener noreferrer" aria-label="Visit our Instagram profile">
              @gdsc_aitpune
            </a>
          </p>

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

            {/* Join Button */}
            <nav>
              <Link to="/form" aria-label="Join our student chapter">
                <EventBtn label="Join Us"/>
              </Link>   
            </nav>
          </div>
        </div>
      </div>
    </article>
  )
}

export default StudentChapterCard