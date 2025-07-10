const StudentChapterCard = () => {
  return (
    <div className="w-[80vw] min-w-[70vw] md:max-w-[40vw] md:min-w-[35vw] mx-auto">
      <div className="relative bg-white rounded-2xl border-2 border-black p-6 shadow-lg">
        {/* GDSC Logo Circle */}
        <div className="absolute -top-4 left-6 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center shadow-md">
          <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
            <div className="w-3 h-3 bg-gradient-to-r from-blue-500 via-green-500 to-yellow-500 rounded-full"></div>
          </div>
        </div>

        {/* Handle/Tab at top */}
        {/* <div className="absolute -top-1 left-20 w-16 h-4 bg-white border-2 border-black border-b-0 rounded-t-lg"></div> */}

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

            {/* Join Button */}
            <div className="flex-shrink-0 ml-4">
              <button className="flex items-center gap-2 bg-white border-2 border-black rounded-full px-4 py-2 hover:bg-gray-50 transition-colors group">
                <span className="text-black font-medium text-sm md:text-base">JOIN NOW</span>
                <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center group-hover:bg-yellow-500 transition-colors">
                  <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StudentChapterCard
