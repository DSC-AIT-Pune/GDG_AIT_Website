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
import vignesh from "../assets/Team/img8.png"
import Nishant from "../assets/Team/img9.jpg"
import Sanshey from "../assets/Team/img10.jpg"
import Arun from "../assets/Team/img11.jpg"
import Aayush from "../assets/Team/img12.jpg"
import Rishabh from "../assets/Team/img13.jpg"
import Ashutosh from "../assets/Team/img14.png"
import TeamBG from "../assets/Team/TeamBG.png"
import Pavan from "../assets/Team/img20.jpeg"
import Divyanshi from "../assets/Team/img19.jpeg"
import Nikita from "../assets/Team/img21.jpg"
import Ajay from "../assets/Team/img22.png"
import Ladli from "../assets/Team/img23.png"
import Kavya from "../assets/Team/img24.png"
import Sahil from "../assets/Team/img25.png"
import Abrish from "../assets/Team/img26.png"
import Prikshit from "../assets/Team/img27.png"
import Ankit from "../assets/Team/img28.png"
import Srijan from "../assets/Team/srijan1.jpeg";
import palak from "../assets/Team/palak.jpg";
import aryan from "../assets/Team/aryan.jpg";
import annu from "../assets/Team/annu.jpg";
import abhishek from "../assets/Team/abhishek.jpg";
import arsh from "../assets/Team/arsh.jpg";
import aryanP from "../assets/Team/aryanP.jpg";
import ayush from "../assets/Team/ayush.jpg";
import raj from "../assets/Team/raj.jpg";
import pranav from "../assets/Team/pranav.jpg";
import vivek from "../assets/Team/vivek.jpg";
import Sreyash from "../assets/Team/Sreyash.jpg";
import ashu from "../assets/Team/ashu.jpg";
import Shashwat from "../assets/Team/shashwat.jpg";
import Nithesh from "../assets/Team/nithesh.jpg";
import peyush from "../assets/Team/peyush.jpg";

// Import core members images
  // import Core1 from "../assets/Team/core1.jpg";
  // import Core2 from "../assets/Team/core2.jpg";
  // import Core3 from "../assets/Team/core3.jpg";
  // import Core4 from "../assets/Team/core4.jpg";
  // import Core5 from "../assets/Team/core5.jpg";
  // import Core6 from "../assets/Team/core6.jpg";

const categories = [ 'Mentors', 'Leads & Domain Heads','Alumni','Core Members' ];

const allTeamMembers = {
  'Mentors': [
    { message: 'Arshia Garg', position: 'BE Mentor', instagram: '@arshiaa_garg', imageSrc: Arshia },
    { message: 'Sumit Nath ', position: 'BE Mentor', instagram: '@sumitkumarnath7', imageSrc: Sumit },
    { message: 'Gaurav Kumar', position: 'BE Mentor', instagram: '@kumar163grv' , imageSrc : Gaurav},
    { message: 'Gourav Singh ', position: 'BE Mentor', instagram: '@_delusive_world_', imageSrc: Gourav },
    { message: 'Nikhil Dhariwal ', position: 'BE Mentor', instagram: '@404nikhil_dhariwal', imageSrc: Nikhil },
    { message: 'Aditya Singh ', position: 'BE Mentor', instagram: '@aditya082004', imageSrc: Aditya },
    { message: 'Vignesh Pandi ', position: 'BE Mentor', instagram: '@vignesh_pandi',imageSrc: vignesh },
    { message: 'Divyanshu Rai ', position: 'BE Mentor', instagram: '@drak_sensei', imageSrc:divyanshu },
  ],
  'Leads & Domain Heads': [
    { message: 'Nishant Singh', position: 'GDG Secretary', instagram: '@_nishant_singhh_' , imageSrc: Nishant },
    { message: 'Divyanshi Choudhary', position: 'GDG Secretary', instagram: '@insta_id' , imageSrc: Divyanshi},
    { message: 'Rishabh Kumar', position: 'WEB DEV LEAD', instagram: '@insta_id' , imageSrc: Rishabh},
    { message: 'Sanshey', position: 'UI/UX LEAD', instagram: '@09_s.unshine' , imageSrc: Sanshey},
    { message: 'Arun Kumar Kushwaha', position: 'FLUTTER LEAD', instagram: '@imwfy_a' , imageSrc: Arun},
    { message: 'Aayush Kumar', position: 'AI/ML LEAD ', instagram: '@nomumonu' , imageSrc: Aayush},
    { message: 'Ashutosh Singh', position: 'AI/ML LEAD', instagram: '@ashutoshsingh058' , imageSrc: Ashutosh},
    { message: 'Pavan Kumar', position: 'CLOUD LEAD', instagram: '@pavankumar_07s' , imageSrc: Pavan},
    { message: 'Srijan Tripathi', position: 'BLOCKCHAIN LEAD', instagram: '@sriijannn' , imageSrc: Srijan},
  ],
  'Alumni': [
    { message: 'Nikita Kumari', position: 'Alumni 2025', instagram: '@sugarplum_1203', imageSrc: Nikita },
    { message: 'Ajay Singh', position: 'Alumni 2025', instagram: '@instagram', imageSrc: Ajay },
    { message: 'Kumari Ladli', position: 'Alumni 2025', instagram: '@instagram', imageSrc: Ladli },
    { message: 'Kavya Chauhan', position: 'Alumni 2025', instagram: '@11001_kavya', imageSrc: Kavya },
    { message: 'Sahil Kamate', position: 'Alumni 2025', instagram: '@sahilkamate_03', imageSrc: Sahil },
    { message: 'S B Abrish Aditya', position: 'Alumni 2025', instagram: '@abrish_aadi', imageSrc: Abrish },
    { message: 'Prikshit Sharma', position: 'Alumni 2025', instagram: '@prikshi.t', imageSrc: Prikshit },
    { message: 'Ankit Kumar Singh', position: 'Alumni 2025', instagram: '@ankit_ya_i_am', imageSrc: Ankit },
  ],
  'Core Members': [
    { message: 'Palak Kumari', position: 'Core Member', instagram: '@_.palak_k',imageSrc: palak  },
    { message: 'Aryan', position: 'Core Member', instagram: '@aryancheers',imageSrc: aryan  },
    { message: 'Annu', position: 'Core Member', instagram: '@verifiedoutrage',imageSrc: annu  },
    { message: 'Peyush Yadav', position: 'Core Member', instagram: '@peush_btw', imageSrc: peyush  },
    { message: 'Abhishek', position: 'Core Member', instagram: '@ok.abhishek',imageSrc:abhishek  },
    { message: 'Aryan Pratap Singh', position: 'Core Member', instagram: '@aryan_32__1',imageSrc:aryanP  },
    { message: 'Raj Singh', position: 'Core Member', instagram: '@rajsinghrajput980',imageSrc:raj  },
    { message: 'Pranav Patil', position: 'Core Member', instagram: '@pan._av',imageSrc:pranav  },
    { message: 'Vivek Sharma', position: 'Core Member', instagram: '@viveksharmaaa_',imageSrc:vivek  },
    { message: 'Ayush Kumar', position: 'Core Member', instagram: '@ayush._singh.05',imageSrc:ayush  },
    { message: 'Arsh Tiwari', position: 'Core Member', instagram: '@mr_arshtiwari', imageSrc: arsh },
    { message: 'Sreyash Singh', position: 'Core Member', instagram: '@sreyashsingh2024', imageSrc: Sreyash },
    { message: 'Ashutosh Mishra', position: 'Core Member', instagram: '@ashum_9', imageSrc: ashu },
    { message: 'Shashwat Trivedi', position: 'Core Member', instagram: '@shashwatrivedi', imageSrc: Shashwat },
    { message: 'Nithesh Yadav', position: 'Core Member', instagram: '@nit.ydv', imageSrc: Nithesh },
    
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