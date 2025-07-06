import React, { useState, useEffect } from 'react';
import TeamBar from '../components/TeamBar';
import IntroCard from '../components/cards/IntroCard';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Arshia from "../assets/Team/img1.jpg"
import Gaurav from "../assets/Team/img3.jpg"
import Sumit from "../assets/Team/img2.jpg"
import Gourav from "../assets/Team/img5.png";
import Nikhil from "../assets/Team/img4.png";
import divyanshu from "../assets/Team/img7.jpeg";
import Aditya from "../assets/Team/img6.jpeg";
import vignesh from "../assets/Team/img8.jpeg"
const categories = [ 'Mentors', 'Leads', 'Core Members'];

const allTeamMembers = {
  Mentors: [
    { message: 'Arshia Garg', position: 'BE Mentor', instagram: '@insta_id', imageSrc: Arshia },
    { message: 'Sumit Nath ', position: 'BE Mentor', instagram: '@insta_id', imageSrc: Sumit },
    { message: 'Gaurav Kumar', position: 'BE Mentor', instagram: '@insta_id' , imageSrc : Gaurav},
    { message: 'Gourav Singh ', position: 'BE Mentor', instagram: '@insta_id', imageSrc: Gourav },
    { message: 'Nikhil Dhariwal ', position: 'BE Mentor', instagram: '@insta_id', imageSrc: Nikhil },
    { message: 'Aditya Singh ', position: 'BE Mentor', instagram: '@insta_id', imageSrc: Aditya },
    { message: 'Vignesh Pandi ', position: 'BE Mentor', instagram: '@insta_id',imageSrc: vignesh },
    { message: 'Divyanshu Rai ', position: 'BE Mentor', instagram: '@insta_id', imageSrc:divyanshu },
    // { message: 'Aditya Kumar ', position: 'BE Mentor', instagram: '@insta_id' },
  ],
  Leads: [
    { message: ' ', position: 'GDSC LEAD', instagram: '@insta_id' },
    { message: ' ', position: 'GDSC LEAD', instagram: '@insta_id' },
    { message: ' ', position: 'GDSC LEAD', instagram: '@insta_id' },
    { message: ' ', position: 'GDSC LEAD', instagram: '@insta_id' },
    { message: ' ', position: 'GDSC LEAD', instagram: '@insta_id' },
    { message: ' ', position: 'GDSC LEAD', instagram: '@insta_id' },
  ],
  'Core Members': [
    { message: ' ', position: 'GDSC LEAD', instagram: '@insta_id' },
    { message: ' ', position: 'GDSC LEAD', instagram: '@insta_id' },
    { message: ' ', position: 'GDSC LEAD', instagram: '@insta_id' },
    { message: ' ', position: 'GDSC LEAD', instagram: '@insta_id' },
    { message: ' ', position: 'GDSC LEAD', instagram: '@insta_id' },
    { message: ' ', position: 'GDSC LEAD', instagram: '@insta_id' },
  ]
};

function Team() {
  const [selectedCategory, setSelectedCategory] = useState('Leads');
  const [scrollIndex, setScrollIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth < 768) {
        setVisibleCount(3); // 1 col × 3 rows
      } else {
        setVisibleCount(3); // 1 row × 3 cols
      }
    };
    updateVisibleCount();
    window.addEventListener('resize', updateVisibleCount);
    return () => window.removeEventListener('resize', updateVisibleCount);
  }, []);

  const filteredTeam = allTeamMembers[selectedCategory];
  const maxIndex = Math.max(0, Math.ceil(filteredTeam.length / visibleCount) - 1);

  const handleNext = () => setScrollIndex((prev) => Math.min(prev + 1, maxIndex));
  const handlePrev = () => setScrollIndex((prev) => Math.max(prev - 1, 0));

  const teamToDisplay = filteredTeam.slice(scrollIndex * visibleCount, (scrollIndex + 1) * visibleCount);

  return (
    <div className='flex flex-col justify-center gap-y-14 py-6 rounded-xl w-full  max-w-[95vw] bg-primarybg items-center mx-auto px-4'>
      <h2 className='text-center font-seconday text-[clamp(1.75rem,8vw,6rem)] text-[#E94436]'>MEET OUR TEAM</h2>

      <TeamBar selected={selectedCategory} setSelectedCategory={setSelectedCategory} />

      <div className='relative w-full'>
        <div
          className='grid grid-cols-1 md:flex md:flex-wrap md:justify-center gap-6 md:gap-10'
        >
          {teamToDisplay.map((member, index) => (
            <IntroCard
              key={index}
              imageSrc={member.imageSrc}
              position={member.position}
              message={member.message}
              instagram={member.instagram}
            />
          ))}
        </div>

        {filteredTeam.length > visibleCount && (
          <div className='flex justify-center gap-4 mt-6'>
            <button
              onClick={handlePrev}
              disabled={scrollIndex === 0}
              className='p-2 rounded-full bg-white shadow-md disabled:opacity-50'
            >
              <FaArrowLeft />
            </button>
            <button
              onClick={handleNext}
              disabled={scrollIndex === maxIndex}
              className='p-2 rounded-full bg-yellow-400 shadow-md disabled:opacity-50'
            >
              <FaArrowRight />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Team;