import React, { useState } from 'react';
import TeamBar from '../components/TeamBar';
import IntroCard from '../components/cards/IntroCard';

const categories = ['Core Members', 'Mentors', 'Leads & Domain Heads', 'Alumni'];

const allTeamMembers = {
  'Mentors': [
    { message: 'Arshia Garg', position: 'BE Mentor', instagram: '@arshiaa_garg', imageSrc: "https://i.ibb.co/k26FSqtz/img1.webp" },
    { message: 'Sumit Nath ', position: 'BE Mentor', instagram: '@sumitkumarnath7', imageSrc: "https://i.ibb.co/fV476FKv/img2.webp" },
    { message: 'Gaurav Kumar', position: 'BE Mentor', instagram: '@kumar163grv' , imageSrc : "https://i.ibb.co/HD7HqtTT/img3.webp"},
    { message: 'Gourav Singh ', position: 'BE Mentor', instagram: '@_delusive_world_', imageSrc: "https://i.ibb.co/JFnjnVQS/img5.webp" },
    { message: 'Nikhil Dhariwal ', position: 'BE Mentor', instagram: '@404nikhil_dhariwal', imageSrc: "https://i.ibb.co/PvVkwt8j/img4.webp" },
    { message: 'Aditya Singh ', position: 'BE Mentor', instagram: '@aditya082004', imageSrc: "https://i.ibb.co/PGQfxVsr/img6.webp" },
    { message: 'Vignesh Pandi ', position: 'BE Mentor', instagram: '@vignesh_pandi',imageSrc: "https://i.ibb.co/WT3bt9m/img7.webp" },
    { message: 'Divyanshu Rai ', position: 'BE Mentor', instagram: '@drak_sensei', imageSrc: "https://i.ibb.co/HpFrH3Zg/img8.webp"},
  ],

  'Leads & Domain Heads': [
    { message: 'Nishant Singh', position: 'GDG Secretary', instagram: '@_nishant_singhh_' , imageSrc: "https://i.ibb.co/PG551Drm/img9.webp" },
    { message: 'Divyanshi Choudhary', position: 'GDG Secretary', instagram: '@insta_id' , imageSrc: "https://i.ibb.co/rKFg6SPD/img19.webp"},
    { message: 'Rishabh Kumar', position: 'WEB DEV LEAD', instagram: '@insta_id' , imageSrc: "https://i.ibb.co/1fd6gwLM/img13.webp"},
    { message: 'Sanshey', position: 'UI/UX LEAD', instagram: '@09_s.unshine' , imageSrc: "https://i.ibb.co/7dcB4p6D/img10.jpg"},
    { message: 'Arun Kumar Kushwaha', position: 'FLUTTER LEAD', instagram: '@imwfy_a' , imageSrc: "https://i.ibb.co/nMQLWTf3/img11.webp"},
    { message: 'Aayush Kumar', position: 'AI/ML LEAD ', instagram: '@nomumonu' , imageSrc: "https://i.ibb.co/qLLPVb5X/img12.webp"},
    { message: 'Ashutosh Singh', position: 'AI/ML LEAD', instagram: '@ashutoshsingh058' , imageSrc: "https://i.ibb.co/4nyyMWCh/img14.webp"},
    { message: 'Pavan Kumar', position: 'CLOUD LEAD', instagram: '@pavankumar_07s' , imageSrc: "https://i.ibb.co/rfdvMfXZ/img20.webp"},
    { message: 'Srijan Tripathi', position: 'BLOCKCHAIN LEAD', instagram: '@sriijannn' , imageSrc: "https://i.ibb.co/gFrqpxhs/srijan1.webp"},
  ],

'Alumni': [
  { message: 'Nikita Kumari', position: 'Alumni 2025', instagram: '@sugarplum_1203', imageSrc: "https://i.ibb.co/1SdzFBM/img21.webp" },
  { message: 'Ajay Singh', position: 'Alumni 2025', instagram: '@instagram', imageSrc: "https://i.ibb.co/zVtP88FR/img22.webp" },
  { message: 'Kumari Ladli', position: 'Alumni 2025', instagram: '@instagram', imageSrc: "https://i.ibb.co/QvJvpL8t/img23.webp" },
  { message: 'Kavya Chauhan', position: 'Alumni 2025', instagram: '@11001_kavya', imageSrc: "https://i.ibb.co/kWngLrZ/img24.webp" },
  { message: 'Sahil Kamate', position: 'Alumni 2025', instagram: '@sahilkamate_03', imageSrc: "https://i.ibb.co/KxNSwqgQ/img25.webp" },
  { message: 'S B Abrish Aditya', position: 'Alumni 2025', instagram: '@abrish_aadi', imageSrc: "https://i.ibb.co/Cs2QthJS/img26.webp"},
  { message: 'Prikshit Sharma', position: 'Alumni 2025', instagram: '@prikshi.t', imageSrc: "https://i.ibb.co/kVkS9tgT/img27.webp" },
  { message: 'Ankit Kumar Singh', position: 'Alumni 2025', instagram: '@ankit_ya_i_am', imageSrc: "https://i.ibb.co/DDzrC5h8/img28.webp" },
],

  'Core Members': [
    { message: 'Palak Kumari', position: 'Core Member', instagram: '@_.pala__k', imageSrc: "https://i.ibb.co/4g7zLJCP/palak.webp" },
    { message: 'Aryan', position: 'Core Member', instagram: '@aryancheers', imageSrc: "https://i.ibb.co/rKz53NTd/aryan-singh.webp" },
    { message: 'Anu Kumari', position: 'Core Member', instagram: '@verifiedoutrage', imageSrc: "https://i.ibb.co/mCtbyzcF/annu.webp" },
    { message: 'Peush Yadav', position: 'Core Member', instagram: '@peush_btw', imageSrc: "https://i.ibb.co/ZzYFGNwt/peyush.jpg" },
    { message: 'Abhishek', position: 'Core Member', instagram: '@ok.abhisek', imageSrc: "https://i.ibb.co/FkTN2Ln2/abhishek.webp" },
    { message: 'Aryan Pratap Singh', position: 'Core Member', instagram: '@aryan_32__1', imageSrc: "https://i.ibb.co/LdwF1GGx/pratap.webp" },
    { message: 'Raj Singh', position: 'Core Member', instagram: '@rajsinghrajput980', imageSrc: "https://i.ibb.co/vRsTFhh/raj.webp" },
    { message: 'Pranav Patil', position: 'Core Member', instagram: '@pan._av', imageSrc: "https://i.ibb.co/S4mrJzMr/praanva.webp" },
    { message: 'Vivek Sharma', position: 'Core Member', instagram: '@viveksharmaaa_', imageSrc: "https://i.ibb.co/sdVH5t6c/vivek.webp" },
    { message: 'Ayush Kumar', position: 'Core Member', instagram: '@ayush._singh.05', imageSrc: "https://i.ibb.co/jPj9YZrV/ayush.webp" },
    { message: 'Arsh Tiwari', position: 'Core Member', instagram: '@mr_arshtiwari', imageSrc: "https://i.ibb.co/SwQQL5ZD/asrh.webp" },
    { message: 'Sreyash Singh', position: 'Core Member', instagram: '@sreyashsingh2024', imageSrc: "https://i.ibb.co/KzjFL8Hz/sreyash.webp" },
    { message: 'Ashutosh Mishra', position: 'Core Member', instagram: '@ashum_9', imageSrc: "https://i.ibb.co/93yhXL0S/ashu.webp" },
    { message: 'Shashwat Trivedi', position: 'Core Member', instagram: '@shashwatrivedi', imageSrc: "https://i.ibb.co/RkNvdx73/saswat.webp" },
    { message: 'Nithesh Yadav', position: 'Core Member', instagram: '@nit.ydv', imageSrc: "https://i.ibb.co/F44X3ZG2/nity.webp" },
  ]
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
            backgroundImage: `url("https://i.ibb.co/8Dbhp3Z4/TeamBG.png")`,
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