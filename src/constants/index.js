import {
  link,
    mobile,
    uxui,
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
    tn,
    helycom,
    uha,
    mt,
    pandora,
    booky,
    pt,
    threejs,
    sahmeran,
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
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "UX/UI Designer",
      icon: uxui,
    },
    {
      title: "Content Creator",
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
      title: "Web Developer/Designer",
      company_name: "Helycom",
      icon: helycom,
      iconBg: "#E6DEDD",
      date: "September 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Creating responsive websites utilizing CMSs and CRMs such as WordPress and Odoo, while ensuring robust SEO optimization.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Continuously honing my ability to collaborate with clients, sharpening my skills to deeply understand and meet their requirements.",
        "Designing seamless and engaging user experiences by harnessing the power of Adobe Suite and Figma's versatile design tools.",
      ],
    },
    {
      title: "Web Developer Apprentice",
      company_name: "Helycom",
      icon: helycom,
      iconBg: "#E6DEDD",
      date: "January 2023 - August 2023",
      points: [
        "Creating responsive websites utilizing CMSs and CRMs such as WordPress and Odoo, while ensuring robust SEO optimization.",
        "Logos Designing utilizing Adobe Suite and Figma's design tools.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Continuously honing my ability to collaborate with clients and deeply comprehend their requirements.",
      ],
    },
    {
      title: "Java Developer Apprentice",
      company_name: "UHA university",
      icon: uha,
      iconBg: "#fff",
      date: "March 2020 - June 2020",
      points: [
        "Developing and maintaining Java-based applications, leveraging Spring framework." ,
        "Learning to integrate third-party APIs and libraries into Java applications for enhanced functionality.",
        "Developing a strong understanding of object-oriented programming concepts and design patterns to write efficient and maintainable code."      ],
    },
    {
      title: " Network Administrator Intern",
      company_name: "Tn Telecoms",
      icon: tn,
      iconBg: "#fff",
      date: "Jan 2023 - Present",
      points: [
        "Configuring and maintaining network devices such as routers, switches, and firewalls to ensure optimal network performance.",       
        "Managing user accounts, permissions, and access controls to safeguard sensitive data and resources.",    
        "Utilizing tools like Wireshark for monitoring network traffic and analyzing data to swiftly identify and troubleshoot connectivity issues or potential security breaches."    

      ],
    },
  ];
  
  
  
  const projects = [
    {
      name: "Pandora post-sharing app",
      description:
        "Pandora is a dynamic social media platform designed for seamless media sharing. With Pandora, users can register, login, and instantly share their media content with friends and followers. Whether it's photos, videos, or audio clips, Pandora provides a user-friendly interface for effortless posting. ",
      tags: [
        {
          name: "react-Vite",
          color: "blue-text-gradient",
        },
        {
          name: "TailwindCss",
          color: "green-text-gradient",
        },
        {
          name: "J.queries",
          color: "pink-text-gradient",
        },
      ],
      image: pandora,
  
      source_code_link: "https://github.com/",
      projectlink: "notavailable",
    },
  
    {
      name: "Pierre Thilloy Official site",
      description:
        "I developed the official website for renowned musician Pierre Thilloy using WordPress, integrating HTML/CSS, and JS to create a dynamic and engaging user experience. Leveraging SEO techniques, I optimized the website's content to ensure it ranks prominently in search engine results. ",
      tags: [
        {
          name: "Wordpress",
          color: "blue-text-gradient",
        },
        {
          name: "html/css/js",
          color: "green-text-gradient",
        },
        {
          name: "SEO",
          color: "pink-text-gradient",
        },
      ],
      image: pt,
      source_code_link: "notavailable",
      projectlink: "https://www.pierrethilloy.com",
    },
    {
      name: "Booky book scanning-app",
      description:
        "Booky is a Java-based scanning app for my university library. It simplifies the process of adding books info like author and title to the library database via a json FETCH by allowing staff to scan ISBN codes. Leveraging object-oriented principles, the app ensures scalability and maintainability.",
      tags: [
        {
          name: "java: OOP",
          color: "blue-text-gradient",
        },
        {
          name: "AndroidStudio",
          color: "green-text-gradient",
        },
        {
          name: "Json",
          color: "pink-text-gradient",
        },
      ],
      image: booky,
      source_code_link: "https://github.com/ayoubFromTheHood/bookyV6",
      projectlink: "notavailable",
    },
   
   
    {
      name: "Mama teranga humanitarian organization site ",
      description:
        "I had the privilege of working on the website for Mama Teranga, a humanitarian organization dedicated to aiding orphaned children. I curated a visually engaging communication plan, incorporating carefully chosen graphics to effectively convey the organization's mission and impact. ",
      tags: [
        {
          name: "Odoo Crm",
          color: "blue-text-gradient",
        },
        {
          name: " Adobe Illustrator/Photoshop",
          color: "green-text-gradient",
        },
        {
          name: "SEO",
          color: "pink-text-gradient",
        },
      ],
      image: mt,
      source_code_link: "notavailable",
      projectlink: "https://www.mamateranga.org/home",
    },
   
    {
      name: "Sahmeran: Elegant Restaurant Website",
      description:
        "Sahmeran is an elegant restaurant website designed to captivate and entice visitors with its sophistication and charm. From the moment you arrive on the site, you're greeted with a seamless blend of exquisite design and user-friendly navigation where you can explore menu offerings.",
      tags: [
        {
          name: "wordpress",
          color: "blue-text-gradient",
        },
        {
          name: "html/css/js",
          color: "green-text-gradient",
        },
        {
          name: "SEO",
          color: "pink-text-gradient",
        },
      
      ],
      image: sahmeran,
  
      source_code_link: "notavailable",
      projectlink: "https://restaurant-sahmeran.com",
    },
    
  ];
  
  export { services, technologies, experiences, projects };