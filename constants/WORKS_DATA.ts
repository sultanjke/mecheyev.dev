import DarsoonImage from "@/public/works/darsoon.png";
import DarsoonImage2 from "@/public/works/darsoon-dashboard.png";
import JacksHouseImage from "@/public/works/jackshouse.png";
import DbiliaImage from "@/public/works/dbilia.png";
import DbiliaImage2 from "@/public/works/dbilia-2.png";
import DbiliaImage3 from "@/public/works/dbilia-3.png";
import NumbersForThingsImage from "@/public/works/numbers-for-things.png";
import MomentaImage from "@/public/works/momenta.png";
import DbiliaPremierImage from "@/public/works/dbilia-premier.png";
import { StaticImageData } from "next/image";

type WorkDataItem = {
  title: string;
  subtitle: string;
  description: string;
  tools: string[];
  imgs: StaticImageData[];
  whatIDid: string[];
  githubLink?: string;
};
type WorkData = Record<string, WorkDataItem>;

const WORKS_DATA: WorkData = {
  apecpetrotechnic: {
    title: "APEC PetroTechnic",
    subtitle: "UI & UX Design for the college website",
    tools: ["Figma", "Wordpress"],
    imgs: [DbiliaImage, DbiliaImage2, DbiliaImage3],
    githubLink: "https://www.figma.com/proto/Pf2gXttoaufRbSOVSt4pg0/apec.edu.kz?page-id=0%3A1&node-id=6-2&viewport=518%2C190%2C0.11&t=CWSHFrRQDkyrbtHT-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=6%3A2",
    description:
      "A ready-to-launch website for APEC PetroTechnic College, designed in Figma and developed using Wordpress CMS with a custom theme.",
    whatIDid: [
      "Designed the whole UI in Figma and developed the website using Wordpress with a custom theme",
    ],
  },
  washly: {
    title: "Washly",
    subtitle: "A landing-page for an on-demand car wash platform",
    tools: ["NextJS", "React", "TypeScript", "Server Components", "Tailwind CSS"],
    imgs: [DarsoonImage],
    description:
      "Next.js 16 + React 19 app-router landing page with TypeScript, Tailwind CSS v4, and Next Themes for light/dark theming.",
    whatIDid: [
      "Washly Landing is a production-ready marketing site that introduces the consumer app and partner platform. It includes animated sections, pricing tables, partner onboarding flows, and a theme toggle that switches both UI palette and copy."
    ],
  },
  dbiliaPremier: {
    title: "Dbilia Premier",
    subtitle: "A platform to pre-order Music Videos with NFT, before they are released publicly",
    tools: ["NextJS", "React", "Prisma", "T3 Stack", "PostgreSQL"],
    imgs: [DbiliaPremierImage],
    githubLink: "https://github.com/sultanjke/dbilia-premier",
    description: "A platform to pre-order Music Videos with NFT, before they are released publicly.",
    whatIDid: ["Designed the UI in Figma"],
  },
  kbc: {
    title: "Kausar Business Consulting",
    subtitle: "UI & UX Design for the for Kausar Business Consulting Agency",
    tools: ["Figma"],
    imgs: [MomentaImage],
    githubLink: "https://www.figma.com/proto/ImFytyA2QUKEcnx8kCAVav/BI---TECH--Kausar-Business-Consulting--Project?page-id=0%3A1&node-id=47-2&viewport=1591%2C451%2C0.36&t=D5PrW2z1m2Fxf8NU-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=47%3A2",
    description:
      "A professional website design for Kausar Business Consulting Agency, focused on showcasing their services and expertise.",
    whatIDid: ["Designed the entire UI/UX in Figma, focusing on a clean and professional look."],
  },
  mecheyevs: {
    title: "Mecheyev S.",
    subtitle: "A portfolio website to showcase my works",
    tools: ["NextJS", "TypeScript", "React", "Tailwind CSS"],
    description:
      "A portfolio website to showcase my works, built with Next.js, React, and integrated with MetaMask for web3 functionalities.",
    imgs: [NumbersForThingsImage],
    githubLink: "https://github.com/sultanjke/mecheyev.dev",
    whatIDid: [
      // "In order to create and host such a large number of images, we couldn't use raster file format such as .png of jpeg. (Let's say each image sizes 50Kb, the wole collection would take 4.65 Terrabytes) Therefore I wrote a script that genrate the svg for each item, base on the number. This way we only store the necessary information to produce each number and stored it on JSON.",
      "Designed and developed the entire portfolio website from scratch, focusing on responsive design and user experience.",
    ],
  },
  stockify: {
    title: "Stockify",
    subtitle: "Building and deploying a full-stack Inventory (Warehouse) Management Application using Nextjs, Redux, Node, and AWS.",
    tools: ["NextJS", "React", "Redux", "Tailwind CSS", "NodeJS", "AWS Services"],
    imgs: [JacksHouseImage],
    githubLink: "https://github.com/sultanjke/inventory-management-system",
    description:
      "This is a complete Full Stack Inventory Management Dashboard Application designed to streamline business operations. It allows users to track inventory, manage products, monitor sales and purchases, and view expense summaries through an interactive dashboard.",
    whatIDid: [
      "The application is built using Next.js for a high-performance frontend, styled with Tailwind CSS, and utilizes Material UI Data Grid for handling complex datasets. State management is robustly handled by Redux Toolkit and RTK Query. The backend is powered by Node.js and Express, using Prisma ORM for seamless database interactions with PostgreSQL.",
      "The project also includes a comprehensive deployment strategy using AWS services including RDS, EC2, API Gateway, Amplify, and S3."
    ],
  },
};

export default WORKS_DATA;
