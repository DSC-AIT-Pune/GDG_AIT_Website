import React from 'react';
import about from "../assets/About/about.png";
import pattern from "../assets/About/pattern.png"

const ContentBlock = ({ title, content, alignment = "left", className = "" }) => {
  return (
    <article className={`relative w-full ${className}`}>
      {/* File folder container */}
      <div className="relative">
        {/* Folder tab */}
        <header
          className={`bg-white border-2 border-black border-b-0 rounded-t-lg ${
            alignment === "right" ? "ml-auto mr-8" : "ml-8 mr-auto"
          }`}
          style={{ width: '120px', height: '30px' }}
        >
          <div className="flex items-center justify-center h-full">
            <h3 className="font-bold text-sm">{title}</h3>
          </div>
        </header>
        
        {/* Main folder body */}
        <div className="bg-white border-2 border-black rounded-2xl rounded-tl-none p-6">
          <p className="text-sm sm:text-base md:text-lg text-gray-800 leading-relaxed">{content}</p>
        </div>
      </div>
    </article>
  )
}

const AboutUs = () => {
  return (
    <main className="bg-[#E6E4D5] pb-6 px-2 sm:px-6 md:px-10 lg:px-16 xl:px-24 mx-auto rounded-xl relative w-[95vw] min-h-screen overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundColor: '#f3f1e7',
          backgroundImage: `url(${pattern})`,
          backgroundRepeat: 'repeat',
          backgroundSize: 'auto',
          opacity: '5%',
        }}
        aria-hidden="true"
      ></div>

      <div className="relative z-10">
        {/* ABOUT US */}
        <h1
          className="
            font-seconday
            text-[2.2rem]
            xs:text-[2.8rem]
            sm:text-[3.5rem]
            md:text-[5rem]
            lg:text-[6.5rem]
            xl:text-[7rem]
            text-[#4385F3]
            text-center
            mt-0
            pt-8
            leading-[1.05]
            select-none
            break-words
          "
        >
          ABOUT US
        </h1>

        {/* Main Content */}
        <section className="flex flex-col md:flex-row items-center justify-around gap-8 md:gap-10 mt-4">
          {/* Left Image */}
          <figure className="w-full md:w-7/12 flex justify-center mb-6 md:mb-0">
            <img
              src={about}
              alt="About Us Illustration showing GDG AIT Pune community members collaborating"
              className="w-[80vw] max-w-[400px] md:max-w-[500px] h-auto rounded-xl object-contain"
            />
          </figure>

          {/* Right Content */}
          <div className="w-full md:w-5/12 space-y-8">
            <section>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-[800]">GDG AIT</h2>
              {/* Colored lines */}
              <div className="flex w-full max-w-[170px] mb-4">
                <div className="w-[20%] h-[5px] bg-[#EA4335]" aria-hidden="true" />
                <div className="w-[20%] h-[5px] bg-[#FBBC05]" aria-hidden="true" />
                <div className="w-[20%] h-[5px] bg-[#34A853]" aria-hidden="true" />
                <div className="w-[20%] h-[5px] bg-[#4285F4]" aria-hidden="true" />
              </div>
              <p className="mt-2 text-sm sm:text-base md:text-m text-gray-700">
                <strong>Google Developer Group (GDG) AIT Pune </strong> is a student-driven community powered by Google Developers.
                We aim to bridge the gap between theory and practice through hands-on learning.
                Our members explore technologies like Web, Android, AI/ML, and Cloud.
                We organize workshops, hackathons, and events to upskill and collaborate.
                Together, we learn, build, and solve real-world problems using tech.
              </p>
            </section>

            {/* Vision Block */}
            <ContentBlock
              title="VISION"
              content="To empower members to make meaningful contributions to local and global tech challenges, including the annual Google Solution Challenge."
              alignment="right"
              className="mb-6"
            />

            {/* Mission Block */}
            <ContentBlock
              title="MISSION"
              content="To build a collaborative and inclusive tech community at AIT Pune, where students are inspired to learn, create, and contribute to real-world solutions using technology."
              alignment="left"
              className="mb-6"
            />
          </div>
        </section>
      </div>
    </main>
  );
};

export default AboutUs;