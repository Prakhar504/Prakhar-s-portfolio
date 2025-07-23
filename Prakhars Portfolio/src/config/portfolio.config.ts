export const portfolioConfig = {
  // Basic Information
  name: "Prakhar Jain",
  title: "FullStack Developer",
  description: "I am a Passionate Software Developer",
  location: "Indore, Madhya Pradesh, India",

  // Contact Information
  email: "Prakharjain504@gmail.com", // Replace with actual email if available

  // Social Media Links
  socialLinks: {
    
    linkedin: "https://www.linkedin.com/in/prakharjain504",
   
    github: "https://github.com/Prakhar504", // Assuming this is the GitHub link
  },

  // SEO Information
  seo: {
    ogImage: "https://mdtaquiimam.vercel.app/og-image.png",
    url: "https://mdtaquiimam.vercel.app",
    twitterHandle: "",
    keywords: [
       "Prakhar Jain",
      "Full Stack Developer",
      "React Developer",
      "MERN Stack",
      "TravelXGuide",
      "Software Developer Portfolio",    
    ],
    authors: [
      {
        name: "Prakhar Jain",
        url: "https://github.com/Prakhar504",
      },
    ],
  },

  // About Information
  about: {
    bio: "B.Tech Cyber Security student at Acropolis Institute, passionate about building full-stack applications and solving real-world problems.",
    hobbies: [
     "Playing Cricket", "Stock Market", "Problem Solving", "Video Editing",
    ],
    personalInfo: {
      language: "English UK",
      nationality: "India",
      gender: "Male",
    },
  },

  // Skills and Roles
  skills: {
    roles: [
      "",
      "",
      "Gamer",
      "",
      "Student",
      
    ],
    // Technical Skills
    programmingLanguages: [

      {
        name: "C++",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
      },
      {
        name: "HTML5",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      },
      {
        name: "CSS3",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      },
      {
        name: "JavaScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
      
    ],
    frameworks: [
      {
        name: "React",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "Next.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      },
     
      {
        name: "Tailwind CSS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
      },
      
      
    ],
    tools: [
      {
        name: "Git",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      },
      {
        name: "GitHub",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      },
      {
        name: "VS Code",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
      },
      
      {
        name: "MongoDB",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      },
      
    ],
  },

  // Education Information
  education: [
     {
      degree: "B.Tech in Cyber Security",
      institution: "Acropolis Institute of Technology and Research",
      period: "2022 – 2026",
      location: "Indore, M.P.",
      description: "CGPA: 6.49. Gaining strong fundamentals in cybersecurity and full-stack development.",
    },
  ],

  // Projects Information
  projects: [
    {
  title: "TravelX Guide – A Smart Travel Recommendation & Guide Listing Platform With Community",
  description:
    "TravelX Guide is an intelligent travel platform where users can discover tours, get AI-based travel recommendations, connect with admin-approved local guides, and collaborate with other travelers through a real-time community chat.",
  tags: ["MERN", "Express.js", "MongoDB", "JWT Auth", "Socket.IO", "Tailwind CSS"],
  link: "https://travelxguide1.onrender.com/"
},
{
  title: "MovieMania – Movie Search App with Favorites",
  description:
    "MovieMania is a simple and responsive movie search application where users can search movies by name using an external API and save their favorite movies for quick access.",
  tags: ["JavaScript", "HTML", "CSS", "OMDb API", "Local Storage", "Responsive UI"],
  link: "https://github.com/Prakhar504/movie-search-app"
},

    {
  title: "eVote – A Secure Online Voting Platform",
  description:
    "eVote is a secure and user-friendly online voting system where users can sign up with their Aadhar number, view candidates, and cast their vote only once. Admins have the ability to manage candidate listings, ensuring a transparent and tamper-proof voting process.",
  tags: ["Node.js", "Express", "MongoDB", "JWT Auth", "Aadhar Login", "Admin Panel"],
  link: "https://github.com/Prakhar504/Voting_Platform"
},
{
  title: "StreamTube – YouTube Clone Backend",
  description:
    "StreamTube is a YouTube-like backend system that enables video upload, user authentication, channel creation, subscriptions, likes/dislikes, comments, and history tracking. Designed with scalability and RESTful API principles.",
  tags: ["Node.js", "Express", "MongoDB", "JWT Auth", "REST API", "Multer", "Cloudinary"],
  link: "https://github.com/Prakhar504/streamtube-backend"
},

    {
  title: "To-Do App – A Simple and Efficient Task Manager",
  description:
    "A minimal and efficient To-Do application that helps users manage daily tasks. Users can add, delete, and mark tasks as completed, ensuring productivity and task tracking with a clean user interface.",
  tags: ["JavaScript", "HTML", "CSS", "DOM Manipulation"],
  link: "https://github.com/Prakhar504/to-do-app"
},
{
  title: "WeatherApp – Real-Time Weather Forecast Application",
  description:
    "WeatherApp is a real-time weather forecasting application where users can search for any city to view current weather details like temperature, humidity, and conditions using live API integration.",
  tags: ["JavaScript", "HTML", "CSS", "OpenWeatherMap API", "Responsive Design"],
  link: "https://github.com/Prakhar504/weatherapp"
}

],

 

  // API Keys (should be in .env but referenced here)
  apiKeys: {
    resendApiKey: "YOUR_RESEND_API_KEY", // This should be loaded from environment variables in a real app
  },
};
