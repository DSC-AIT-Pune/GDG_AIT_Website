import React, { useState } from 'react';
import TeamBar from '../components/TeamBar';
import IntroCard from '../components/cards/IntroCard';

const categories = ['Core Members', 'Mentors', 'Leads & Domain Heads','Alumni'];

const allTeamMembers = {
  'Mentors': [
    { message: 'Arshia Garg', position: 'BE Mentor', instagram: '@arshiaa_garg', imageSrc: "https://i.ibb.co/5xYr0yc2/img1.jpg" },
    { message: 'Sumit Nath ', position: 'BE Mentor', instagram: '@sumitkumarnath7', imageSrc: "https://i.ibb.co/FcSrHTJ/img2.jpg" },
    { message: 'Gaurav Kumar', position: 'BE Mentor', instagram: '@kumar163grv' , imageSrc : "https://i.ibb.co/bRdyWCMP/img3.jpg"},
    { message: 'Gourav Singh ', position: 'BE Mentor', instagram: '@_delusive_world_', imageSrc: "https://i.ibb.co/H19yT6b/img4.png" },
    { message: 'Nikhil Dhariwal ', position: 'BE Mentor', instagram: '@404nikhil_dhariwal', imageSrc: "https://i.ibb.co/N249mKxd/img5.png" },
    { message: 'Aditya Singh ', position: 'BE Mentor', instagram: '@aditya082004', imageSrc: "https://i.ibb.co/bRXHRRhb/img6.jpg" },
    { message: 'Vignesh Pandi ', position: 'BE Mentor', instagram: '@vignesh_pandi',imageSrc: "https://i.ibb.co/bggLnbVr/img7.jpg" },
    { message: 'Divyanshu Rai ', position: 'BE Mentor', instagram: '@drak_sensei', imageSrc: "https://i.ibb.co/1JTk8rbM/img8.png"},
  ],

  'Leads & Domain Heads': [
    { message: 'Nishant Singh', position: 'GDG Secretary', instagram: '@_nishant_singhh_' , imageSrc: "https://i.ibb.co/n8K6789X/img9.jpg" },
    { message: 'Divyanshi Choudhary', position: 'GDG Secretary', instagram: '@insta_id' , imageSrc: "https://i.ibb.co/Q38PhS87/img19.jpg"},
    { message: 'Rishabh Kumar', position: 'WEB DEV LEAD', instagram: '@insta_id' , imageSrc: "https://i.ibb.co/xSYTXsrD/img13.jpg"},
    { message: 'Sanshey', position: 'UI/UX LEAD', instagram: '@09_s.unshine' , imageSrc: "https://i.ibb.co/7dcB4p6D/img10.jpg"},
    { message: 'Arun Kumar Kushwaha', position: 'FLUTTER LEAD', instagram: '@imwfy_a' , imageSrc: "https://i.ibb.co/wh9h4Hnv/img11.jpg"},
    { message: 'Aayush Kumar', position: 'AI/ML LEAD ', instagram: '@nomumonu' , imageSrc: "https://i.ibb.co/nNyL9bjP/img12.jpg"},
    { message: 'Ashutosh Singh', position: 'AI/ML LEAD', instagram: '@ashutoshsingh058' , imageSrc: "https://i.ibb.co/ZzR6DVPK/img14.png"},
    { message: 'Pavan Kumar', position: 'CLOUD LEAD', instagram: '@pavankumar_07s' , imageSrc: "https://i.ibb.co/823k0WK/img20.jpg"},
    { message: 'Srijan Tripathi', position: 'BLOCKCHAIN LEAD', instagram: '@sriijannn' , imageSrc: "https://i.ibb.co/d0MDVsBT/srijan1.jpg"},
  ],

'Alumni': [
  { message: 'Nikita Kumari', position: 'Alumni 2025', instagram: '@sugarplum_1203', imageSrc: "https://i.ibb.co/W4B2L7XL/img21.jpg" },
  { message: 'Ajay Singh', position: 'Alumni 2025', instagram: '@instagram', imageSrc: "https://i.ibb.co/1DBFGq7/img22.png" },
  { message: 'Kumari Ladli', position: 'Alumni 2025', instagram: '@instagram', imageSrc: "https://i.ibb.co/gLr0C5dY/img23.png" },
  { message: 'Kavya Chauhan', position: 'Alumni 2025', instagram: '@11001_kavya', imageSrc: "https://i.ibb.co/2355Fhmg/img24.png" },
  { message: 'Sahil Kamate', position: 'Alumni 2025', instagram: '@sahilkamate_03', imageSrc: "https://i.ibb.co/qFWN3Fhm/img25.png" },
  { message: 'S B Abrish Aditya', position: 'Alumni 2025', instagram: '@abrish_aadi', imageSrc: "https://i.ibb.co/99rhd2q6/img26.png"},
  { message: 'Prikshit Sharma', position: 'Alumni 2025', instagram: '@prikshi.t', imageSrc: "https://i.ibb.co/chc3jjsJ/img27.png" },
  { message: 'Ankit Kumar Singh', position: 'Alumni 2025', instagram: '@ankit_ya_i_am', imageSrc: "https://i.ibb.co/pvSBcTvy/img28.png" },
],

  'Core Members': [
    { message: 'Palak Kumari', position: 'Core Member', instagram: '@_.palak_k', imageSrc: "https://i.ibb.co/XxDGZh5x/palak.jpg" },
    { message: 'Aryan', position: 'Core Member', instagram: '@aryancheers', imageSrc: "https://i.ibb.co/DDK0z5Zk/aryan.jpg" },
    { message: 'Annu', position: 'Core Member', instagram: '@verifiedoutrage', imageSrc: "https://i.ibb.co/NkyRrsY/annu.jpg" },
    { message: 'Peyush Yadav', position: 'Core Member', instagram: '@peush_btw', imageSrc: "https://i.ibb.co/ZzYFGNwt/peyush.jpg" },
    { message: 'Abhishek', position: 'Core Member', instagram: '@ok.abhishek', imageSrc: "https://i.ibb.co/gMDJ6Wzq/abhishek.jpg" },
    { message: 'Aryan Pratap Singh', position: 'Core Member', instagram: '@aryan_32__1', imageSrc: "https://i.ibb.co/Zpc3d2jv/aryanP.jpg" },
    { message: 'Raj Singh', position: 'Core Member', instagram: '@rajsinghrajput980', imageSrc: "https://i.ibb.co/PH38pHP/raj.jpg" },
    { message: 'Pranav Patil', position: 'Core Member', instagram: '@pan._av', imageSrc: "https://i.ibb.co/xqhgnTJP/pranav.jpg" },
    { message: 'Vivek Sharma', position: 'Core Member', instagram: '@viveksharmaaa_', imageSrc: "https://i.ibb.co/5gbQjmJC/vivek.jpg" },
    { message: 'Ayush Kumar', position: 'Core Member', instagram: '@ayush._singh.05', imageSrc: "https://i.ibb.co/1tkv9r9t/ayush.jpg" },
    { message: 'Arsh Tiwari', position: 'Core Member', instagram: '@mr_arshtiwari', imageSrc: "https://i.ibb.co/BH03qRxH/arsh.jpg" },
    { message: 'Sreyash Singh', position: 'Core Member', instagram: '@sreyashsingh2024', imageSrc: "https://i.ibb.co/bgL8CFQr/Sreyash.jpg" },
    { message: 'Ashutosh Mishra', position: 'Core Member', instagram: '@ashum_9', imageSrc: "https://i.ibb.co/kgbWv2mw/ashutosh.jpg" },
    { message: 'Shashwat Trivedi', position: 'Core Member', instagram: '@shashwatrivedi', imageSrc: "https://i.ibb.co/yFSNrsZn/Shashwat.jpg" },
    { message: 'Nithesh Yadav', position: 'Core Member', instagram: '@nit.ydv', imageSrc: "https://i.ibb.co/1tSbNJQB/nithesh.jpg" },
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
