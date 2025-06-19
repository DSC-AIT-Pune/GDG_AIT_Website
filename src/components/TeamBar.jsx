import React from 'react';

function TeamBar({ selected, setSelectedCategory }) {
  const categories = ['Faculty Member', 'Mentors', 'Leads', 'Core Members'];

  return (
    <div className='bg-black text-white rounded-full px-6 py-2 w-[85vw] max-w-[720px] overflow-x-auto no-scrollbar'>
      <ul className='flex justify-around gap-4 text-sm md:text-base'>
        {categories.map((cat) => (
          <li
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`cursor-pointer px-3 py-1 rounded-full transition-all duration-200 ${selected === cat ? 'bg-white text-black font-bold' : ''}`}
          >
            {cat}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TeamBar;