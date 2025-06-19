import React from 'react';
import ImageSrc from '../../assets/Team/18143e5b4f128b3c9c3a11604cdeaa42.jpeg';
import GdscLogo from '../../assets/Footer/gdsclogo.png';

const IntroCard = ({
  instagram = "@insta_id",
  position = "GDSC LEAD",
  message = "I’m Arshia Thakur garg",
}) => {
  return (
    <div className="transform scale-70 md:scale-[0.80] lg:scale-[1] flex flex-col items-start w-fit mx-auto">
      {/* Image Card */}
      <div className="border border-black bg-white w-[250px]">
        {/* Browser header */}
        <div className="bg-[#E5E5E5] border-b border-black flex items-center px-3 py-1">
          <div className="flex items-center space-x-1">
            <span className="w-3 h-3 rounded-full bg-red-500" />
            <span className="w-3 h-3 rounded-full bg-yellow-500" />
            <span className="w-3 h-3 rounded-full bg-green-500" />
            <span className="w-3 h-3 rounded-full bg-blue-500" />
          </div>
          <span className="ml-4 text-sm text-black font-medium truncate">{instagram}</span>
        </div>
        {/* Image */}
        <div className="aspect-square w-full">
          <img src={ImageSrc} alt="Team" className="object-cover w-full h-full aspect-square" />
        </div>
      </div>

      {/* Info Card */}
      <div className="-mt-8 ml-20 w-[250px] border border-black bg-white shadow-md">
        {/* Yellow Header */}
        <div className="bg-[#FABD03] border-b border-black text-center py-2 font-bold text-sm">
          {position}
        </div>
        {/* Message */}
        <div className="px-4 py-3 text-left">
          <p className="text-xl font-bold leading-snug mb-3">
            Hi!!! <br />
            {message}
          </p>
          {/* GDSC Footer */}
          <div className="flex justify-end items-center gap-2">
            <img src={GdscLogo} alt="GDSC Logo" className="h-6" />
            <div className="text-right text-[10px] leading-tight">
              <div>Google Developer Student Clubs</div>
              <div>Army Institute of Technology, Pune</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroCard;
