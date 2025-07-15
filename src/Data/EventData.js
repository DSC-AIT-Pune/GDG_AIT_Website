import enliven from '../assets/Events/enliven.webp'
import solution from '../assets/Events/solution.webp'
import flutter from '../assets/Events/flutter.webp'
import hacktober from '../assets/Events/hacktober.jpg'
import GenAI from '../assets/Events/GenAI.webp'

const projects = [
  { 
    id: 1,
    imgsrc: enliven, 
    name: 'Enliven Hackathon', 
    description: 'Join an intensive 48-hour coding marathon where innovative minds collaborate to solve real-world challenges using cutting-edge technologies. Work in teams to build groundbreaking solutions, guided by industry mentors and Google technology experts, while competing for exciting prizes and recognition.', 
    deadline: "15/07/2025", 
    Eligibility: "Open to all", 
    status: "Active", 
    PriePool: "35000/-", 
    Timeline: "2nd Week of March", 
    // link: "example.com"
  },
  
  { 
    id: 2,
    imgsrc: solution, 
    name: 'Google Solutions', 
    description: 'Dive deep into Google\'s cutting-edge AI and cloud technologies through hands-on workshops, expert-led sessions, and networking opportunities. Gain practical experience with industry-leading tools like Gemini AI, Google Cloud Platform, and Android development while connecting with Google Developer Experts.', 
    deadline: "20/08/2025", 
    Eligibility: "Open to all", 
    status: "Active", 
    PriePool: "200000/-", 
    Timeline: "lorem ipsum dolor sit amet, consectetur adipiscing elit.", 
    // link: "example.com"
  },
  
  { 
    id: 3,
    imgsrc: flutter, 
    name: 'Flutter Workshop', 
    description: 'Master mobile development with Google\'s revolutionary Flutter framework and learn to build stunning applications for iOS and Android from a single codebase. Perfect for college students and aspiring developers, this hands-on workshop will take you from Flutter basics to building your first complete mobile app.', 
    deadline: "10/09/2025", 
    Eligibility: "Open to all", 
    status: "Active", 
    PriePool: "1500/-", 
    Timeline: "2nd week of January", 
    // link: "example.com"
  },
  
  { 
    id: 4,
    imgsrc: hacktober, 
    name: 'Hacktober Fest', 
    description: 'Kickstart your open source journey during Hacktoberfest, the world\'s largest celebration of open source software. Join thousands of developers worldwide in contributing to meaningful projects while learning industry-standard tools like Git and GitHub, building your professional portfolio.', 
    deadline: "05/10/2025", 
    Eligibility: "Open to all", 
    status: "Active", 
    PriePool: "2500/-", 
    Timeline: "Month of October", 
    // link: "example.com"
  },
  
  { 
    id: 5,
    imgsrc: GenAI, 
    name: 'ML Study Jam', 
    description: 'Transform from complete beginner to confident machine learning practitioner through collaborative, hands-on learning. Work alongside peers and mentors to build real machine learning models using industry-standard tools like TensorFlow and Kaggle, while earning certificates and creating portfolio projects.', 
    deadline: "30/11/2025", 
    Eligibility: "Open to all", 
    status: "Active", 
    PriePool: "3000/-", 
    Timeline: "last week of January to 1st week of february", 
    // link: "example.com"
  }
];

export default projects;