import React, { useState } from "react";
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

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      {sidebarOpen && (
        <div
          className="fixed inset-0  backdrop-blur-xs z-40"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <div className="flex flex-col gap-8 mt-4 relative justify-center w-full max-w-[95vw] mx-auto  bg-primarybg md:bg-black rounded-b-xl rounded-t-xl mb-4">
        <div id="home"><Home onMenuClick={() => setSidebarOpen(true)} /></div>
        <div id="about us"><About /></div>
        <div id="events"><Events /></div>
        <div id="team"><Team /></div>
        <div id="calender"><Calender /></div>
        <div id="contact us"><Collaborate /></div>
        <div id="footer"><Footer /></div>
        {/* <SideBar/> */}
      </div>
      <Hamburger isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <img className="w-[95vw] mx-auto" src={bgimage} alt="" />
    </>
  );
}

export default App;
