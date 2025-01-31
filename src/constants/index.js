import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  awash,
  nuhik,
  waliin,
  ecommerce,
  elkastech,
  dashboard,
  airbnb,
  hotel,
  buss,
  tesfaye,
  bikila,
  hance,
  interview,
  video,
  hwfitness,
  bidcraftai,
  contentai,
  etender,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Mobile App Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Full stack Developer",
    company_name: "Hance Technology",
    icon: hance,
    iconBg: "#383E56",
    date: "July 2024 - Nov 2024",
    points: [
      "Developed backend systems for Project Plate and a Dental Clinic Management System using Node.js, TypeScript, and Spring Boot.",
      "Implemented scalable REST APIs to support appointment scheduling, payment processing, and patient management. Designed robust authentication and authorization systems for multi-role platforms.",
      "Worked with Docker to containerize applications, enhancing deployment efficiency."
    ],
  },
  {
    title: "Software Developer",
    company_name: "Elkas Technologies",
    icon: elkastech,
    iconBg: "#383E56",
    date: "May 2023 - Jun-2023",
    points: [
      "Built and optimized SaaS products and web applications using Node.js and Spring Boot.",
      "Designed and maintained APIs to facilitate seamless data exchange and user management.",
      "Collaborated with cross-functional teams to deliver high-quality, secure, and scalable solutions."
    ],
  },

  {
    title: "Web App Developer",
    company_name: "Awash Bank",
    icon: awash,
    iconBg: "#383E56",
    date: "Des 2022 - March 2023",
    points: [
      "Developed web applications focused on API integrations with Spring Boot.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Gained hands-on experience in backend development and database management."
      
    ],
  },
  {
    title: "Software Developer",
    company_name: "Nuhik Engineering",
    icon: nuhik,
    iconBg: "#E6DEDD",
    date: "May 2018 - Des 2022",
    points: [
      "Developing and maintaining web applications using MERN stack and other related technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
   
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Megersa proved me wrong.",
    name: "Tsion Regasa",
    designation: "CEO",
    company: "Jafet Business Group",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Mege does.",
    name: "Bikila Jaleta",
    designation: "CEO",
    company: "Nuhik Egineering",
    image: bikila,
  },
  {
    testimonial:
      "Working with him has been a pleasure, and I am grateful for the positive impact he has had on our company. I highly recommend him to anyone in need of a skilled and dedicated software developer.",
    name: "Tesfaye Benti",
    designation: "CTO",
    company: "Nuhik Engineering",
    image: tesfaye,
  },
];

const projects = [
  {
    name: "InterviewGenie",
    description:
      "InterviewGenie is an AI-driven interview preparation platform that helps job seekers practice with tailored questions and AI-generated answers based on specific job descriptions. It supports multiple industries and roles, ensuring personalized preparation for any career path. With an intuitive user-friendly interface, users can generate unlimited interview questions and receive AI-crafted responses, making job interview practice seamless and effective.",
    tags: [
        
      {
        name: "Mongo DB",
        color: "blue-text-gradient",
      },
      {
        name: "Express JS",
        color: "green-text-gradient",
      },
      {
        name: "Next Js",
        color: "pink-text-gradient",
      },
      {
        name: "Kinde Auth",
        color: "green-text-gradient",
      },
       {
        name: "Node Js",
        color: "green-text-gradient",
      }
    ],
    image: interview,
    source_code_link: "https://ai-prepare.vercel.app/",
    code_link: "https://ai-prepare.vercel.app/",
  },
  {
    name: "Ai Short video Generator",
    description:
      "A SaaS-based AI-powered video creation platform that transforms user ideas into engaging videos using Google Gemini AI and Replicate AI. It automates story generation, audio synthesis, captioning, and image creation, seamlessly combining these elements into a final rendered video. With Clerk-powered authentication and monthly subscriptions, users can effortlessly create high-quality content with minimal effort.",
    tags: [
        
      {
        name: "ShadnUI",
        color: "green-text-gradient",
      },

      {
        name: "Next Js",
        color: "pink-text-gradient",
      },
      {
        name: "Clerk Auth",
        color: "green-text-gradient",
      },
      {
        name: "Google Gemini",
        color: "pink-text-gradient",
      } 
    ],
    image: video,
    source_code_link: "https://github.com/megersam/ai-short-video-creator",
    code_link: "https://short-video-creator.netlify.app/",
  },
  {
    name: "FitAccess",
    description:
      "FitAccess Pro is a smart fitness center management system integrated with IoT for seamless access control. Using Next.js, MongoDB, NextAuth, and Vercel, it automates QR code-based gate access, ensuring only active subscribers can enter. The platform handles member subscriptions, renewals, and real-time access validation, providing a secure and efficient gym management solution. Built for HW Fitness Center",
    tags: [
        
      {
        name: "ShadnUI",
        color: "green-text-gradient",
      },

      {
        name: "Next Js",
        color: "pink-text-gradient",
      },
      {
        name: "NextAuth",
        color: "green-text-gradient",
      },
      {
        name: "C++",
        color: "pink-text-gradient",
      } 
    ],
    image: hwfitness,
    source_code_link: "https://hw-fitness.vercel.app/",
    code_link: "https://hw-fitness.vercel.app/",
  },
  {
    name: "BidCraft AI",
    description:
      "BidCraft AI is a Next.js-powered proposal generator integrated with the Gemini API, designed to help freelancers create compelling bid proposals in seconds. By analyzing job postings, it generates a structured proposal with three key sections: summary, pricing, and delivery timeline. This automation streamlines the bidding process, enabling freelancers to submit high-quality proposals instantly.",
    tags: [
       
      {
        name: "Google Gemini",
        color: "green-text-gradient",
      },
      {
        name: "ShadnUI",
        color: "green-text-gradient",
      },

      {
        name: "Next Js",
        color: "pink-text-gradient",
      } 
    ],
    image: bidcraftai,
    source_code_link: "https://ai-bid-assist.vercel.app/",
    code_link: "https://ai-bid-assist.vercel.app/",
  },
  {
    name: "ContentAI",
    description:
      " A Next.js-based application that leverages AI to create engaging content for Twitter, Instagram, and LinkedIn. The platform features an intuitive design, advanced content generation, and seamless user management.",
    tags: [
      {
        name: "Mongo DB",
        color: "blue-text-gradient",
      },
      {
        name: "Cleck Auth",
        color: "green-text-gradient",
      },
      
      {
        name: "ShadnUI",
        color: "green-text-gradient",
      },

      {
        name: "Next Js",
        color: "pink-text-gradient",
      } 
    ],
    image: contentai,
    source_code_link: "https://aicontent-creator.vercel.app/",
    code_link: "https://aicontent-creator.vercel.app/",
  },
  {
    name: "E-Tender News",
    description:
      "A comprehensive online platform for browsing and submitting tenders in Ethiopia. The platform enables organizations and government agencies to post tenders, while businesses can easily find and apply for relevant opportunities. It simplifies the tendering process and ensures transparency.",
    tags: [
      {
        name: "Mongo DB",
        color: "blue-text-gradient",
      },
      {
        name: "Cleck Auth",
        color: "green-text-gradient",
      },
      {
        name: "Express JS",
        color: "green-text-gradient",
      },
      {
        name: "ShadnUI",
        color: "green-text-gradient",
      },

      {
        name: "Next Js",
        color: "pink-text-gradient",
      },
       {
        name: "Node Js",
        color: "green-text-gradient",
      }
    ],
    image: etender,
    source_code_link: "https://e-tender.vercel.app/",
    code_link: "https://e-tender.vercel.app/",
  },
  {
    name: "E-Commerce",
    description:
      "MERN stack based e-commerce website is a fully-functional online store that allows customers to browse, search, and purchase products. The MERN stack includes four key technologies: MongoDB, Express.js, React.js, and Node.js, which work together seamlessly to create a powerful web application.",
    tags: [
      {
        name: "Mongo DB",
        color: "blue-text-gradient",
      },
      {
        name: "Express JS",
        color: "green-text-gradient",
      },
      {
        name: "React Js",
        color: "pink-text-gradient",
      },
       {
        name: "Node Js",
        color: "green-text-gradient",
      }
    ],
    image: ecommerce,
    source_code_link: "https://eshop-ten-rho.vercel.app/",
    code_link: "https://eshop-ten-rho.vercel.app/",
  },
  // 
  {
    name: "React Js Admin Dashboard",
    description:
      " React.js admin dashboard a versatile and powerful tool that can be used across a range of industries, including e-commerce, social media, and more. It provides a centralized platform for managing various aspects of your business, such as user accounts, product listings, orders, and customer support.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "ReactJs",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: dashboard,
    source_code_link: "https://github.com/megersam/reactJSDashboard",
    code_link: "https://dashboard-shoppy.netlify.app/",
  },
// 
 {
    name: "Airbnb Clone",
    description:
      "This is a Full Stack Airbnb clone repository using Next.js 13 App Router, React, Tailwind, Prisma, MongoDB, and NextAuth. It has features such as Tailwind design, credential authentication, image upload using Cloudinary CDN, and advanced search algorithm. It also has a booking/reservation system, favorites system, and shareable URL filters. Additionally, it includes instructions on how to handle server error and loading states, create and delete properties, and handle relations between server and child components.",
    tags: [
      
      {
        name: "ReactJs",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: airbnb,
    source_code_link: "https://github.com/megersam/airbnb-clone",
    code_link: "https://github.com/megersam/airbnb-clone",
  },
  // 
  {
    name: "Hotel Booking System",
    description:
      "Web application that enables users to search and book Hotels Online, view estimated fees ranges for places, and locate available rooms based on their search location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: hotel,
    source_code_link: "https://github.com/megersam/hotelbookingMERN",
    code_link: "https://github.com/megersam/hotelbookingMERN",
  },
  // 
   {
    name: "Bus Ticket Booking System",
    description:
      "bus e-ticketing using php, mysql, ajax, javascript. create routes and assign busess, generate tickets for travel for passengers, get report by date, weak, and monthly, SMS gateway for ticket recipt instead of pdf and paper.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
        {
        name: "Flutter",
        color: "blue-text-gradient",
      },
      {
        name: "MYSQL",
        color: "pink-text-gradient",
      },
    ],
    image: buss,
    source_code_link: "https://github.com/megersam/e-bus-ticketing",
    code_link: "https://github.com/megersam/e-bus-ticketing",
  },
  // 
  
  
];

export { services, technologies, experiences, testimonials, projects };
