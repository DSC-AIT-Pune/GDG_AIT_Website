"use client";
import TypingEffect from "../components/TypingEffect";
import StudentChapterCard from "../components/cards/StudentChapterCard";
import NavBar from "../components/NavBar";


function Home({ onMenuClick }) {
  return (
    <main className="relative flex flex-col gap-y-14 py-6 rounded-xl justify-center w-[95vw] items-center bg-primarybg mx-auto">
      {/* Decorative background - hidden from screen readers */}
      <div
        className="absolute inset-0 z-0 rounded-xl"
        style={{
          backgroundColor: "#f3f1e7",
          backgroundImage: `url("https://i.ibb.co/wZv4v3Fz/homebg.png")`,
          backgroundRepeat: "repeat",
          backgroundSize: "auto",
          opacity: "100%",
        }}
        aria-hidden="true"
      ></div>

      {/* Navigation */}
      <header className="absolute hidden z-10 top-0 left-1/2 transform -translate-x-1/2 md:flex justify-center">
        <NavBar />
      </header>

      <div className="flex z-10 flex-row w-full justify-between px-5">
        <img 
          src={"https://i.ibb.co/mrXrkSzF/Group.png" || "/placeholder.svg"} 
          alt="GDG AIT Pune Logo" 
          className="h-auto"
        />
        <button
          onClick={onMenuClick}
          className="md:hidden cursor-pointer"
          aria-label="Toggle menu"
        >
          <img
            src={"https://i.ibb.co/HDp7RzqH/Hamburger.png" || "/placeholder.svg"}
            alt="Mobile menu toggle"
          />
        </button>
      </div>

      <TypingEffect />

      <section className="flex flex-row lg:mt-4 w-full justify-between lg:items-center md:px-12 items-end px-5 z-10">
        <h1 className="text-[clamp(1.75rem,8vw,10rem)] tracking-wider md:leading-none font-seconday font-semibold">
          <span className="text-[#E94436]">G</span>
          <span className="text-[#4385F3]">D</span>
          <span className="text-[#109D58]">G</span>
          <br />
          <span>AIT PUNE</span>
        </h1>
        <img
          className="max-w-[35vw] lg:w-[390px] h-auto"
          src={"https://i.ibb.co/zTLP9rFJ/GDSCimage.png" || "/placeholder.svg"}
          alt="GDG AIT Pune community illustration"
        />
      </section>

      {/* Bottom section */}
      <footer className="z-10 relative w-full flex justify-between items-end">
        {/* Left side - Shape image */}
        <div className="flex-shrink-0 hidden md:block">
          <img
            className="max-w-[40vw] h-auto"
            src={"https://i.ibb.co/RGrN0Jvx/Polygon.png" || "/placeholder.svg"}
            alt="Decorative shape"
            aria-hidden="true"
          />
        </div>

        {/* Right side - Student Chapter Card */}
        <div className="flex-shrink-0 w-full md:w-auto flex justify-center md:justify-end md:pr-10">
          <StudentChapterCard />
        </div>
      </footer>
    </main>
  );
}

export default Home;