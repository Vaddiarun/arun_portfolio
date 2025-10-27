// Centralized profile data (easy to edit and reuse)
export const profile = {
  name: "Arun Kumar",
  role: "Frontend Developer",
  email: "careerarun9@gmail.com",
  phone: "+91 7989759695",
  location: "Rayadurgam, Andhra Pradesh, 515865",
  linkedin: "https://www.linkedin.com/in/vaddi-arun-238a6222a",
  headline: "Frontend Developer with 2+ years of experience in React.js, Tailwind CSS, AWS Amplify, and IoT Platforms. Specialized in building responsive, user-centric web applications with real-time data integration.",
  
  education: [
    {
      institution: "Nxtwave Disruptive Technologies",
      degree: "Industry Ready Certification in Full-stack Development",
      year: "2023-2024"
    },
    {
      institution: "Chadalawada Ramanama Engineering College, Tirupati",
      degree: "B Tech - Computer Science Engineering (CSE)",
      cgpa: "7.0 CGPA",
      year: "2019 - 2023"
    },
    {
      institution: "Sri Venkataswara Junior College, Rayadurgam",
      degree: "Intermediate - MPC",
      cgpa: "7.0 CGPA",
      year: "2017 - 2019"
    },
    {
      institution: "St Paul's English Medium High School, Rayadurgam",
      degree: "Secondary School Certificate",
      cgpa: "7.2 CGPA",
      year: "2016 - 2017"
    }
  ],
  
  skills: {
    frontend: ["HTML", "CSS", "Bootstrap", "Tailwind CSS", "JavaScript", "React.js", "Vite"],
    stateManagement: ["Redux", "Redux Persister"],
    apis: ["REST API", "RESTful APIs", "Google Maps API"],
    visualization: ["ApexCharts", "Recharts"],
    tools: ["AWS Amplify", "Git", "Bitbucket"],
    databases: ["SQLite"]
  },
  
  experience: [
    {
      company: "GND Solutions Pvt. Ltd.",
      position: "Frontend Developer",
      duration: "Sep 2024 – Present",
      responsibilities: [
        "Developed and maintained responsive, user-centric web applications for IoT platforms using React.js and Tailwind CSS",
        "Integrated AWS Amplify for streamlined deployment, backend integration, and scalable cloud hosting",
        "Consumed and displayed real-time IoT data through RESTful APIs",
        "Managed source code using Bitbucket, following Git workflows for version control",
        "Ensured high performance, accessibility, and cross-browser compatibility",
        "Collaborated with UI/UX designers and backend engineers",
        "Participated in code reviews and contributed to frontend architectural decisions"
      ]
    },
    {
      company: "WEB SORT",
      position: "Frontend Developer",
      duration: "May 2023 – Aug 2024",
      responsibilities: [
        "Developed and maintained responsive web pages using HTML, CSS, Tailwind CSS, and JavaScript",
        "Built dynamic and interactive UI components using React.js",
        "Collaborated with designers and backend developers for seamless user experiences",
        "Integrated REST APIs to fetch and display data dynamically",
        "Ensured cross-browser compatibility and optimized performance",
        "Applied version control practices using Git",
        "Participated in code reviews and provided feedback"
      ]
    }
  ],
  
  projects: [
    {
      name: "THINXFRESH IoT Fleet Management Dashboard",
      url: "#",
      description: "Comprehensive IoT fleet management web application for tracking and monitoring sensor-equipped vehicles in real-time, featuring advanced mapping capabilities, trip analytics, and multi-user dashboard functionality",
      technologies: ["React.js", "Google Maps API", "JavaScript (ES6+)", "Tailwind CSS", "Vite", "ApexCharts", "Recharts", "AWS Amplify"],
      features: [
        "Advanced Interactive Mapping System with real-time GPS tracking and animated route playback",
        "Real-time Data Dashboard with live sensor monitoring, battery status, and alert management",
        "Modern Frontend Architecture with React 19, lazy loading, and code splitting",
        "User Experience & Security with JWT token authentication and protected routing",
        "Comprehensive data visualization and automated alert system for geofence breaches"
      ]
    },
    {
      name: "E-commerce Website",
      url: "https://harmonious-mermaid-9d2805.netlify.app/",
      description: "Responsive e-commerce website with browse, search, and purchase features",
      technologies: ["ReactJS", "TailwindCSS", "Redux"],
      features: [
        "Product listing, filtering, and sorting functionalities",
        "Dynamic and reusable React components",
        "Global state management with Redux",
        "Mock API integration"
      ]
    },
    {
      name: "Hotel Management Software",
      url: "https://hotelfrontend-ruddy.vercel.app/",
      credentials: "Mail: admin@gmail.com, Password: admin@123",
      description: "Comprehensive hotel management solution with user and admin interfaces",
      technologies: ["ReactJS", "HTML", "TailwindCSS", "Redux", "Redux Persister", "REST API"],
      features: [
        "Separate user and admin interfaces",
        "Order management and bill generation",
        "Persistent state across sessions",
        "Responsive design across devices"
      ]
    }
  ]
};
