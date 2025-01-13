import {
  FaCss3Alt,
  FaDatabase,
  FaDribbble,
  FaHtml5,
  FaMedium,
  FaNode,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import { BiLogoJavascript, BiLogoTypescript } from "react-icons/bi";

export const skillsArr = [
  {
    title: "React & Next.js",
    description:
      "React is a library for building user interfaces based on components, while Next.js extends it with powerful features like server-side rendering and API routes for building full-stack web applications.",
    icon: <FaReact />,
    iconColor: "#61DBFB",
  },
  {
    title: "TypeScript",
    description:
      "TypeScript is a free and open-source high-level programming language developed by Microsoft that adds static typing with optional type annotations to JavaScript.",
    icon: <BiLogoTypescript />,
    iconColor: "#007acc",
  },
  {
    title: "HTML",
    description:
      "The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.",
    icon: <FaHtml5 />,
    iconColor: "#fd854f",
  },
  {
    title: "JavaScript",
    description:
      "JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.",
    icon: <BiLogoJavascript />,
    iconColor: "#f0db4f",
  },
  {
    title: "CSS",
    description:
      "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML.",
    icon: <FaCss3Alt />,
    iconColor: "#2965f1",
  },
  {
    title: "Node.js",
    description:
      "Node.js is a JavaScript runtime built on Chrome's V8 engine, allowing developers to build scalable server-side applications.",
    icon: <FaNodeJs />,
    iconColor: "#339933",
  },
  {
    title: "Express.js",
    description:
      "Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.",
    icon: <FaNode />,
    iconColor: "#000000",
  },
  {
    title: "MongoDB",
    description:
      "MongoDB is a source-available cross-platform document-oriented database program, classified as a NoSQL database.",
    icon: <FaDatabase />,
    iconColor: "#47A248",
  },
  {
    title: "Web3.js",
    description:
      "Web3.js is a collection of libraries that allow you to interact with a local or remote Ethereum node using HTTP, IPC, or WebSocket.",
    icon: <FaDribbble />,
    iconColor: "#F16822",
  },
  {
    title: "Blockchain",
    description:
      "Blockchain is a decentralized, distributed ledger technology that ensures data integrity, transparency, and security, widely used for cryptocurrencies and smart contract platforms.",
    icon: <FaMedium />,
    iconColor: "#F16822",
  },
  {
    title: "Many More...",
  },
];
