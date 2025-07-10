import React, { useState, useEffect, useRef } from "react";
import Lenis from '@studio-freight/lenis';
import Footer from "./sections/Footer";
import Events from "./sections/Events";
import Team from "./sections/Team";
import About from "./sections/About";
import bgimage from "./assets/bg-image.svg";
import Collaborate from "./sections/Collaborate";
import Calender from "./sections/Calender";
import SideBar from "./components/SideBar";
import Home from "./sections/Home";
import Hamburger from "./components/Hamburger";
import upward from './assets/uparrow.svg'

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const lenisRef = useRef(null);



  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2, // Control the scroll duration
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing function
      direction: 'vertical', // Vertical scroll
      gestureDirection: 'vertical', // Vertical gesture
      smooth: true,
      mouseMultiplier: 1, // Mouse scroll speed
      smoothTouch: false, // Disable smooth scroll on touch devices
      touchMultiplier: 2, // Touch scroll speed
      infinite: false, // Disable infinite scroll
    });

    lenisRef.current = lenis;

    // Animation loop
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Cleanup
    return () => {
      lenis.destroy();
    };
  }, []);

  // Optional: Add scroll to section functionality
  const scrollToSection = (elementId) => {
    const element = document.getElementById(elementId);
    if (element && lenisRef.current) {
      lenisRef.current.scrollTo(element, {
        offset: 0,
        duration: 1.5,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
    }
  };

  return (
    <>
      {sidebarOpen && (
        <div
          className="fixed inset-0 backdrop-blur-xs z-40"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <div className="flex flex-col gap-8 mt-4 relative justify-center w-full max-w-[95vw] mx-auto bg-primarybg md:bg-black rounded-b-xl rounded-t-xl mb-4">
        <div id="home"><Home onMenuClick={() => setSidebarOpen(true)} /></div>
        <div id="about us"><About /></div>
        <div id="events"><Events /></div>
        <div id="team"><Team /></div>
        <div id="calender"><Calender /></div>
        <div id="contact us"><Collaborate /></div>
        <div id="footer"><Footer /></div>
        <img className="fixed cursor-pointer  z-10 bottom-8 right-8 w-[50px] h-auto" src={upward} alt="" onClick={()=>{
          const section = document.getElementById("home")
          if (section) {
            section.scrollIntoView({ behavior: "smooth" })
          }
        }} />
        {/* <SideBar/> */}
      </div>
      <Hamburger isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <img className="w-[95vw] mx-auto" src={bgimage} alt="" />
    </>
  );
}

export default App;