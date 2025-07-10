"use client"
import Hamburger from "../assets/Home/Hamburger.svg"
import Logo from "../assets/Home/Group.png"
import shape from "../assets/Home/Polygon.svg"
import TypingEffect from "../components/TypingEffect"
import StudentChapterCard from "../components/cards/StudentChapterCard"
import NavBar from "../components/NavBar"
import cartoon from "../assets/Home/GDSCimage.svg"

function Home({ onMenuClick }) {
  return (
    <div className="relative flex flex-col gap-y-14 py-6 rounded-xl justify-center w-[95vw] items-center bg-primarybg mx-auto">
      <div className="absolute hidden top-0 left-1/2 transform -translate-x-1/2 md:flex justify-center">
        <NavBar />
      </div>

      <div className="flex flex-row w-full justify-between px-5">
        <img src={Logo || "/placeholder.svg"} alt="Logo" />
        <img
          onClick={onMenuClick}
          className="md:hidden cursor-pointer"
          src={Hamburger || "/placeholder.svg"}
          alt="Hamburger Menu"
        />
      </div>

      <TypingEffect />

      <div className="flex flex-row lg:mt-4 w-full justify-between lg:items-center md:px-12 items-end px-5">
        <p className="text-[clamp(1.75rem,8vw,10rem)] tracking-wider md:leading-none font-seconday font-semibold">
          <span className="text-[#E94436]">G</span>
          <span className="text-[#4385F3]">D</span>
          <span className="text-[#109D58]">G</span>
          {/* <span className="text-[#FABC05]">G</span> */}
          <br />
          <span>AIT PUNE</span>
        </p>
        <img className="max-w-[35vw] lg:w-[390px] h-auto" src={cartoon || "/placeholder.svg"} alt="" />
      </div>

      {/* Fixed bottom section with proper positioning */}
      <div className="relative w-full flex justify-between items-end">
        {/* Left side - Shape image */}
        <div className="flex-shrink-0 hidden md:block">
          <img className="max-w-[40vw] h-auto" src={shape || "/placeholder.svg"} alt="" />
        </div>

        {/* Right side - Student Chapter Card */}
        <div className="flex-shrink-0 w-full md:w-auto flex justify-center md:justify-end md:pr-10">
          <StudentChapterCard />
        </div>
      </div>
    </div>
  )
}

export default Home
