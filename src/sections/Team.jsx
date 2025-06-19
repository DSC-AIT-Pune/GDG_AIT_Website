// Team.js
import React, { useState, useEffect } from 'react';
import TeamBar from '../components/TeamBar';
import IntroCard from '../components/cards/IntroCard';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const categories = ['Faculty Member', 'Mentors', 'Leads', 'Core Members'];

const allTeamMembers = {
  'Faculty Member': [
    { message: 'Hi!!! I’m Arshia Thakur garg', position: 'GDSC LEAD', instagram: '@insta_id' },
    { message: 'Hi!!! I’m Arshia Thakur garg1', position: 'GDSC LEAD', instagram: '@insta_id' },
    { message: 'Hi!!! I’m Arshia Thakur garg', position: 'GDSC LEAD', instagram: '@insta_id' },
    { message: 'Hi!!! I’m Arshia Thakur garg', position: 'GDSC LEAD', instagram: '@insta_id' },
    { message: 'Hi!!! I’m Arshia Thakur garg4', position: 'GDSC LEAD', instagram: '@insta_id' },
    { message: 'Hi!!! I’m Arshia Thakur garg', position: 'GDSC LEAD', instagram: '@insta_id' },
  ],
  Mentors: [
    { message: 'Hi!!! I’m Arshia Thakur garg', position: 'GDSC LEAD', instagram: '@insta_id' },
    { message: 'Hi!!! I’m Arshia Thakur garg', position: 'GDSC LEAD', instagram: '@insta_id' },
    { message: 'Hi!!! I’m Arshia Thakur garg', position: 'GDSC LEAD', instagram: '@insta_id' },
    { message: 'Hi!!! I’m Arshia Thakur garg', position: 'GDSC LEAD', instagram: '@insta_id' },
    { message: 'Hi!!! I’m Arshia Thakur garg', position: 'GDSC LEAD', instagram: '@insta_id' },
    { message: 'Hi!!! I’m Arshia Thakur garg', position: 'GDSC LEAD', instagram: '@insta_id' },
  ],
  Leads: [
    { message: 'Hi!!! I’m Arshia Thakur garg1', position: 'GDSC LEAD', instagram: '@insta_id' },
    { message: 'Hi!!! I’m Arshia Thakur garg', position: 'GDSC LEAD', instagram: '@insta_id' },
    { message: 'Hi!!! I’m Arshia Thakur garg', position: 'GDSC LEAD', instagram: '@insta_id' },
    { message: 'Hi!!! I’m Arshia Thakur garg4', position: 'GDSC LEAD', instagram: '@insta_id' },
    { message: 'Hi!!! I’m Arshia Thakur garg', position: 'GDSC LEAD', instagram: '@insta_id' },
    { message: 'Hi!!! I’m Arshia Thakur garg', position: 'GDSC LEAD', instagram: '@insta_id' },
  ],
  'Core Members': [
    { message: 'Hi!!! I’m Arshia Thakur garg', position: 'GDSC LEAD', instagram: '@insta_id' },
    { message: 'Hi!!! I’m Arshia Thakur garg', position: 'GDSC LEAD', instagram: '@insta_id' },
    { message: 'Hi!!! I’m Arshia Thakur garg', position: 'GDSC LEAD', instagram: '@insta_id' },
    { message: 'Hi!!! I’m Arshia Thakur garg', position: 'GDSC LEAD', instagram: '@insta_id' },
    { message: 'Hi!!! I’m Arshia Thakur garg', position: 'GDSC LEAD', instagram: '@insta_id' },
    { message: 'Hi!!! I’m Arshia Thakur garg', position: 'GDSC LEAD', instagram: '@insta_id' },
  ],
};

function Team() {
  const [selectedCategory, setSelectedCategory] = useState('Leads');
  const [scrollIndex, setScrollIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth < 768) {
        setVisibleCount(4);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
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
    <div className='flex flex-col justify-center gap-y-14 py-6 rounded-xl w-[95vw] bg-primarybg items-center'>
      <h2 className='text-center font-seconday text-[clamp(1.75rem,8vw,6rem)] text-[#E94436]'>MEET OUR TEAM</h2>

      <TeamBar selected={selectedCategory} setSelectedCategory={setSelectedCategory} />

      <div className='relative w-full max-w-[90vw]'>
        <div className='hidden md:flex justify-center gap-10 flex-wrap'>
          {teamToDisplay.map((member, index) => (
            <IntroCard
              key={index}
              position={member.position}
              message={member.message}
              instagram={member.instagram}
            />
          ))}
        </div>

        <div className='grid md:hidden grid-cols-2 gap-4 place-items-center'>
          {teamToDisplay.map((member, index) => (
            <IntroCard
              key={index}
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
