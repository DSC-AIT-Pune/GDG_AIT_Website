import React from "react";
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
  return (
    <>
      <div className="flex flex-col gap-8 mt-4 relative justify-center w-full bg-primarybg md:bg-black rounded-b-xl mb-4">
        <Home />
        <About />
        <Events />
        <Team />
        <Calender />
        <Collaborate />
        <Footer />

        {/* <SideBar/> */}
      </div>
      <img className="w-[95vw] mx-auto" src={bgimage} alt="" />
    </>
  );
}

export default App;
