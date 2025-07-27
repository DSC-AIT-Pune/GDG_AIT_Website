import React from 'react';
import GdscLogo from '../../assets/Footer/gdsclogo.png';

const IntroCard = ({
  imageSrc,
  instagram = "@insta_id",
  position = "GDSC LEAD",
  message = "I'm Arshia Thakur garg",
}) => {
  return (
    <article className="transform scale-100 flex flex-col items-start w-fit mx-auto">
      {/* Image Card */}
      <figure className="border border-black bg-white w-[240px] sm:w-[260px] md:w-[280px] lg:w-[300px]">
        {/* Browser header */}
        <header className="bg-[#E5E5E5] border-b border-black flex items-center px-2.5 sm:px-3 py-1 sm:py-1.5">
          <div className="flex items-center space-x-1" aria-hidden="true">
            <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500" />
            <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500" />
            <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500" />
            <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-blue-500" />
          </div>
          
          {/* Instagram */}
          <a
            href={`https://instagram.com/${instagram.replace('@', '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-3 sm:ml-4 text-xs sm:text-sm text-black font-medium truncate flex-1"
            aria-label={`${message}'s Instagram profile`}
          >
            {instagram}
          </a>
        </header>
        
        {/* Image */}
        <div className="aspect-square w-full overflow-hidden">
          {imageSrc ? (
            <img 
              src={imageSrc} 
              alt={`Profile of ${message}`}
              className="w-full h-full object-cover object-center"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500 text-sm sm:text-base">No Image</span>
            </div>
          )}
        </div>
      </figure>
      
      {/* Info Card */}
      <section className="-mt-6 sm:-mt-8 ml-14 sm:ml-16 md:ml-20 w-[240px] sm:w-[260px] md:w-[280px] lg:w-[300px] border border-black bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
        {/* Yellow Header */}
        <header className="bg-[#FABD03] border-b border-black text-center py-1.5 sm:py-2 md:py-2.5 font-bold text-xs sm:text-sm md:text-base">
          {position}
        </header>
        
        {/* Message */}
        <div className="px-3 sm:px-4 md:px-5 py-2.5 sm:py-3 md:py-4 text-left">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold leading-snug mb-2 sm:mb-3 md:mb-4">
            <br className="hidden sm:block" />
            {message}
          </h2>
          
          {/* GDSC Footer */}
          <footer className="flex justify-end items-center gap-1.5 sm:gap-2">
            <img 
              src={GdscLogo} 
              alt="GDSC Logo" 
              className="h-5 sm:h-6 md:h-7" 
              loading="lazy"
            />
            <div className="text-right text-[9px] sm:text-[10px] md:text-[11px] leading-tight">
              <div className="font-medium">Google Developer Student Clubs</div>
              <div className="text-gray-700">Army Institute of Technology, Pune</div>
            </div>
          </footer>
        </div>
      </section>
    </article>
  );
};

export default IntroCard;