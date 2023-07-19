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
  dashboard,
  airbnb,
  hotel,
  buss,
  tesfaye,
  bikila,
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
    title: "Web App Developer",
    company_name: "Awash Bank",
    icon: awash,
    iconBg: "#383E56",
    date: "Des 2022 - March 2023",
    points: [
      "Developing and maintaining web applications using Angular Js, spring boot and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
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
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: " Junior Web Developer",
    company_name: "Waliin Tec",
    icon: waliin,
    iconBg: "#383E56",
    date: "Jan 2017 - May 2018",
    points: [
      "Developing and maintaining web applications using HTML, CSS, ReactJs, and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
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
    source_code_link: "https://github.com/megersam/-ecommerce",
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
  },
  // 
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
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
    image: jobit,
    source_code_link: "https://github.com/",
  },
  
];

export { services, technologies, experiences, testimonials, projects };
