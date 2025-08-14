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
      title: "React.js Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Java Developer",
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
      title: "Apprenticeship",
      company_name: "Airport Authority of India, (AAI) Jabalpur",
      icon: starbucks,
      iconBg: "#383E56",
      date: "June 2024",
      points: [
        "Air Traffic Control (ATC): Gained practical experience in managing air traffic, coordinating between pilots and ground control, and ensuring flight safety.",
        "Airport Security & Safety Standards: Trained in safety procedures, including emergency protocols, evacuation plans, and the importance of adhering to aviation security regulations.",
        
      ],
    },
    {
      title: "Apprenticeship",
      company_name: "Western Central Railway, (WCR) Jabalpur",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "July 2023",
      points: [
        "Train Operations & Scheduling: Learned about train scheduling, route management, and timetabling.",
        "Railway Safety Protocols: Trained in the safety protocols involved in railway operations, including signal systems, emergency drills, and accident management.",
      ],
    },
   
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Imagify",
      description:
        "A full-stack AI SaaS web application where users can generate and download images from text prompts, featuring a credit system and secure payment integration with Razorpay.",
      tags: [
        {
          name: "node.js",
          color: "blue-text-gradient",
        },
        {
          name: "clipdrop api",
          color: "green-text-gradient",
        },
        {
          name: "razorpay",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://imagify-frontend-gjzn.onrender.com",
    },
    {
      name: "Quick Commerce",
      description:
        "Quick Commerce is a dynamic frontend application built with React and Tailwind CSS. It provides a seamless user experience for Browse products, managing a shopping cart, and viewing an order summary.",
      tags: [
        {
          name: "react.js",
          color: "blue-text-gradient",
        },
        {
          name: "frontend",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://quickcommerce-frontend.onrender.com",
    },
    {
      name: "Cab Booking",
      description:
        "A cab-booking platform is web application enabling users to search, book, and track rides. The platform also allows captains to manage requests, with real-time map integration, providing a efficient service.",
      tags: [
        {
          name: "backend",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "express.js",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/amarjec/Uber",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };