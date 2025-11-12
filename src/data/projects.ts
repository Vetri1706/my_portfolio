export type Project = {
  title: string;
  emoji?: string;
  description: string;
  image: string; // path under /public
  tech: string[];
  github?: string;
  live?: string;
};

export const projects: Project[] = [
  
  {
    title: "EV Adoption Forecasting App",
    emoji: "☁️",
    description: "Streamlit app forecasting EV adoption using ML; deployed to cloud.",
  image: "https://stroebelautomotive.com/wp-content/uploads/2020/12/AdobeStock_377905344-2048x1536.jpeg", // EV charging station
    tech: ["Python", "Streamlit", "scikit-learn", "AWS"],
    github: "https://github.com/Vetri1706/EV_Charging_Prediction",
    live: undefined,
  },
  {
    title: "Border control- Papers please like game on reddit",
    emoji: "💻",
    description: "Border Control is a Papers-Please-inspired checkpoint simulation game built natively for Reddit. Screen immigrants, verify documents, and make critical approve/reject decisions across four unique apocalyptic themes.",
  image: "https://i.ytimg.com/vi/OMVelWWtvjs/maxresdefault.jpg", // passports theme
    tech: ["TypeScript", "Next.js", "HTML"],
    github: "https://github.com/",
  },
  {
    title: "Splunk Air Pollution Visualizer",
    emoji: "📊",
    description: "Data analytics dashboard using Splunk for air quality trends.",
  image: "https://images.rawpixel.com/image_social_landscape/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTAyL2ZyZWVpbWFnZXNjb21wYW55X3Bob3RvX29mX2luZHVzdHJpYWxfYWlyX3BvbGx1dGlvbl9tYW5hZ2VtZW50X19iYjU1YTY3MS0yY2U3LTQ1ZDAtYWNjYi0xNjU2ZTE5MDQ0NGRfMS5qcGc.jpg", // smoggy city
    tech: ["Splunk", "Data Viz", "ETL"],
  },
  {
    title: "Backend Generator App",
    emoji: "⚙️",
    description: "The Ultimate Intelligent Backend Scaffolding Tool for Hackathons & Rapid Development Generate complete, production-ready backend projects with full implementations in seconds using AI-powered intelligence. No more empty folders - get working code with authentication, databases, APIs, real-time features, AI integration, and comprehensive tooling out of the box!.",
  image: "https://tse1.mm.bing.net/th/id/OIP.pWQA831cxss_TdpEUEPeWAHaEc?rs=1&pid=ImgDetMain&o=7&rm=3", // code screen
    tech: ["css", "Javascript", "Node.js"],
    github: "https://github.com/Vetri1706/Backend-Forge",
    live:"https://backendforge-production.up.railway.app"
  },
];
