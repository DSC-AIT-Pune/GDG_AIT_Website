import React from 'react';
import about from "../Assets/About/about.png";
import pattern from "../Assets/About/pattern.png"
import rightBlock from '../Assets/About/right-block.svg';
import leftBlock from '../Assets/About/left-block.svg';
// import '@fontsource/rubik-one';

const AboutUs = () => {
  return (
    <section className="bg-[#E6E4D5] pb-6 px-2 sm:px-6 md:px-10 lg:px-16 xl:px-24 m-[2vw] rounded-3xl relative w-[96vw] min-h-screen overflow-hidden">
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
        <div className="flex flex-col md:flex-row items-center justify-around gap-8 md:gap-10 mt-4">
          {/* Left Image */}
          <div className="w-full md:w-7/12 flex justify-center mb-6 md:mb-0">
            <img
              src={about}
              alt="About Us Illustration"
              className="w-[80vw] max-w-[400px] md:max-w-[500px] h-auto rounded-xl object-contain"
            />
          </div>

          {/* Right Content */}
          <div className="w-full md:w-5/12 space-y-8">
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-[800]">GDSC AIT</h2>
              {/* Colored lines */}
              <div className="flex w-full max-w-[170px] mb-4">
                <div className="w-[20%] h-[5px] bg-[#EA4335]" />
                <div className="w-[20%] h-[5px] bg-[#FBBC05]" />
                <div className="w-[20%] h-[5px] bg-[#34A853]" />
                <div className="w-[20%] h-[5px] bg-[#4285F4]" />
              </div>
              <p className="mt-2 text-sm sm:text-base md:text-m text-gray-700">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo. Sed ut perspiciatis unde omnis iste natus error sit
                voluptatem accusantium doloremque laudantium, totam rem aperiam.
              </p>
            </div>

            {/* Vision Block */}
            <div className="relative w-full max-w-full min-h-[120px]">
              <img src={rightBlock} alt="Right Block" className="w-full h-auto" />
              <h3 className="absolute font-bold text-lg sm:text-xl md:text-2xl px-2 sm:px-4 pt-2 pb-1 top-[10px] right-[8%] whitespace-nowrap">
                VISION
              </h3>
              <p className="absolute text-xs sm:text-sm md:text-base text-gray-700 flex-1 px-2 sm:px-4 pt-1 top-[50px] right-0 left-0">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero omnis repellat soluta maxime voluptates asperiores ipsum! Officiis voluptates itaque eum expedita.
              </p>
            </div>

            {/* Mission Block */}
            <div className="relative w-full max-w-full min-h-[120px]">
              <img src={leftBlock} alt="Left Block" className="w-full h-auto" />
              <h3 className="absolute font-bold text-lg sm:text-xl md:text-2xl px-2 sm:px-4 pt-2 pb-1 top-[10px] left-[8%] whitespace-nowrap">
                MISSION
              </h3>
              <p className="absolute text-xs sm:text-sm md:text-base text-gray-700 flex-1 px-2 sm:px-4 pt-1 top-[50px] right-0 left-0">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero omnis repellat soluta maxime voluptates asperiores ipsum! Officiis voluptates itaque eum expedita.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;