import React, { useState } from 'react';
import TeamBar from '../components/TeamBar';
import IntroCard from '../components/cards/IntroCard';
import Arshia from "../assets/Team/img1.jpg"
import Gaurav from "../assets/Team/img3.jpg"
import Sumit from "../assets/Team/img2.jpg"
import Gourav from "../assets/Team/img5.png";
import Nikhil from "../assets/Team/img4.png";
import divyanshu from "../assets/Team/img7.jpeg";
import Aditya from "../assets/Team/img6.jpeg";
import vignesh from "../assets/Team/img8.jpeg"
import Nishant from "../assets/Team/img9.jpg"
import Sanshey from "../assets/Team/img10.jpg"
import Arun from "../assets/Team/img11.jpg"
import Aayush from "../assets/Team/img12.jpg"
import Rishabh from "../assets/Team/img13.jpg"
import Ashutosh from "../assets/Team/img14.png"
import TeamBG from "../assets/Team/TeamBG.png"
import Pavan from "../assets/Team/img20.jpeg"
import Divyanshi from "../assets/Team/img19.jpeg"

const categories = [ 'Mentors', 'Leads & Domain Heads'];

const allTeamMembers = {
  'Mentors': [
    { message: 'Arshia Garg', position: 'BE Mentor', instagram: '@insta_id', imageSrc: Arshia },
    { message: 'Sumit Nath ', position: 'BE Mentor', instagram: '@insta_id', imageSrc: Sumit },
    { message: 'Gaurav Kumar', position: 'BE Mentor', instagram: '@insta_id' , imageSrc : Gaurav},
    { message: 'Gourav Singh ', position: 'BE Mentor', instagram: '@insta_id', imageSrc: Gourav },
    { message: 'Nikhil Dhariwal ', position: 'BE Mentor', instagram: '@insta_id', imageSrc: Nikhil },
    { message: 'Aditya Singh ', position: 'BE Mentor', instagram: '@insta_id', imageSrc: Aditya },
    { message: 'Vignesh Pandi ', position: 'BE Mentor', instagram: '@insta_id',imageSrc: vignesh },
    { message: 'Divyanshu Rai ', position: 'BE Mentor', instagram: '@insta_id', imageSrc:divyanshu },
  ],
  'Leads & Domain Heads': [
    { message: 'Nishant Singh', position: 'GDG LEAD', instagram: '@insta_id' , imageSrc: Nishant },
    { message: 'Rishabh Kumar', position: 'GDG LEAD', instagram: '@insta_id' , imageSrc: Rishabh},
    { message: 'Divyanshi Choudhary', position: 'GDG Secretary', instagram: '@insta_id' , imageSrc: Divyanshi},
    { message: 'Sanshey', position: 'UI/UX LEAD', instagram: '@insta_id' , imageSrc: Sanshey},
    { message: 'Arun Kumar Kushwaha', position: 'FLUTTER LEAD', instagram: '@insta_id' , imageSrc: Arun},
    { message: 'Aayush Kumar', position: 'AI/ML LEAD ', instagram: '@insta_id' , imageSrc: Aayush},
    { message: 'Ashutosh Singh', position: 'AI/ML LEAD', instagram: '@insta_id' , imageSrc: Ashutosh},
    { message: 'Pavan Kumar', position: 'CLOUD LEAD', instagram: '@insta_id' , imageSrc: Pavan},
  ],
  // 'Core Members': [
  //   { message: ' ', position: 'GDSC LEAD', instagram: '@insta_id' },
  //   { message: ' ', position: 'GDSC LEAD', instagram: '@insta_id' },
  //   { message: ' ', position: 'GDSC LEAD', instagram: '@insta_id' },
  //   { message: ' ', position: 'GDSC LEAD', instagram: '@insta_id' },
  //   { message: ' ', position: 'GDSC LEAD', instagram: '@insta_id' },
  //   { message: ' ', position: 'GDSC LEAD', instagram: '@insta_id' },
  // ]
};

function Team() {
  const [selectedCategory, setSelectedCategory] = useState('Leads & Domain Heads');

  const filteredTeam = allTeamMembers[selectedCategory];

  // Group team members into rows of 3
  const rows = [];
  for (let i = 0; i < filteredTeam.length; i += 3) {
    rows.push(filteredTeam.slice(i, i + 3));
  }

  return (
    <div className='relative flex flex-col justify-center gap-y-14 py-6 rounded-xl w-full max-w-[95vw] bg-primarybg items-center mx-auto px-4'>

        {/* Background */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundColor: '#f3f1e7',
            backgroundImage: `url(${TeamBG})`,
            backgroundRepeat: 'repeat',
            backgroundSize: 'auto',
            opacity: '5%',
          }}
        ></div>

      <h2 className='text-center font-seconday text-[clamp(1.75rem,8vw,6rem)] z-10 text-[#E94436]'>MEET OUR TEAM</h2>

      <TeamBar selected={selectedCategory} setSelectedCategory={setSelectedCategory} />

      <div className='w-full'>
        <div className='flex flex-col gap-6 md:gap-24 lg:gap-32'>
          {rows.map((row, rowIndex) => (
            <div 
              key={rowIndex} 
              className='flex flex-wrap justify-center gap-16 md:gap-20 lg:gap-32'
            >
              {row.map((member, index) => (
                <div key={index} className='w-full sm:w-auto sm:max-w-sm flex-shrink-0'>
                  <IntroCard
                    imageSrc={member.imageSrc}
                    position={member.position}
                    message={member.message}
                    instagram={member.instagram}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Team;