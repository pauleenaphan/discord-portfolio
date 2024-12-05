import { Nav } from "../component/Nav";
import "../style/Projects.css";
import HoverImage from "../component/HoverImage";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { FaArrowUpRightFromSquare, FaGithub  } from "react-icons/fa6";

import meowpopImg from "../assets/projectImgs/meowpop.png";
import blogwogImg from "../assets/projectImgs/blogwog.png";
import cattagramImg from "../assets/projectImgs/cattagram.png";
import mentalmeImg from "../assets/projectImgs/mentalme.png";
import portfolio2Img from "../assets/projectImgs/portfolio2.png";
import etchasketchImg from "../assets/projectImgs/etchasketch.png";
import oldmacschatImg from "../assets/projectImgs/oldmacschat.png";

import meowpopGif from "../assets/projectGifs/meowpop.gif";
import blogwogGif from "../assets/projectGifs/blogwog.gif";
import cattagramGif from "../assets/projectGifs/cattagram.gif";
import portfolio2Gif from "../assets/projectGifs/portfolio2.gif";
import etchasketchGif from "../assets/projectGifs/etchasketch.gif";
import oldmacschatGif from "../assets/projectGifs/oldmacschat.gif";

const projects = [
    {
        staticSrc: meowpopImg,
        gifSrc: meowpopGif,
        name: "Meowpop",
        description: "An eccomerce cat website where user can browse and purchase items. Users can also apply to become vendors and create product listings.",
        tools: ["MongoDB", "Express.js", "React", "Node.js", "Typescript", "Amazon S3"],
        github: "https://github.com/pauleenaphan/Meow-Pop",
        liveSite: "https://main--meowpop.netlify.app/"
    },
    {
        staticSrc: blogwogImg,
        gifSrc: blogwogGif,
        name: "BlogWog",
        description: "A blog site where users can browse various post. Registered users can login to leave comments on post.",
        tools: ["MongoDB", "Express.js", "React", "Node.js"],
        github: "https://github.com/pauleenaphan/blog-api",
        liveSite: "https://main--blogwog.netlify.app/"
    },
    {
        staticSrc: oldmacschatImg,
        gifSrc: oldmacschatGif,
        name: "Old Mac's Farm",
        description: "A global chat where users can only type using the letters E I O",
        tools: ["MongoDB", "Express.js", "React", "Socket.Io"],
        github: "https://github.com/pauleenaphan/Old-Mac-s-Chat/tree/main",
        liveSite: "https://oldmacschat.netlify.app/"
    },
    {
        staticSrc: cattagramImg,
        gifSrc: cattagramGif,
        name: "Cattagram",
        description: "Social media web app that focuses on cats. Users can view and post pictures of their cats and add other users as friends.",
        tools: ["HTML", "CSS", "React", "JavaScript", "Firebase"],
        github: "https://github.com/pauleenaphan/Cattagram",
        liveSite: "https://cattagram.netlify.app/"
    },
    {
        staticSrc: mentalmeImg,
        gifSrc: "",
        name: "MentalMe",
        description: " A mental wellness mobile app that focuses on journaling. Moobie, our mascot, supports and guides users on their journaling journey.",
        tools: ["React Native", "Firebase", "Expo"],
        github: "https://github.com/pauleenaphan/MentalMe",
        liveSite: "https://expo.dev/preview/update?message=fixed%20styling&updateRuntimeVersion=1.0.0&createdAt=2024-05-07T05%3A25%3A18.090Z&slug=exp&projectId=d55f227c-6164-4fc5-ac60-040c4b42bad2&group=f55c8b6c-df7a-4874-9605-f10a26a3b534"
    },
    {
        staticSrc: portfolio2Img,
        gifSrc: portfolio2Gif,
        name: "Portfolio2",
        description: " My second portfolio website I made before this one. A website within a website that showcases my skills and projects.",
        tools: ["HTML", "CSS", "React", "Typescript"],
        github: "https://github.com/pauleenaphan/portfolio2.0/tree/main",
        liveSite: "https://pauleenaphanportfolio2.netlify.app/"
    },
    {
        staticSrc: etchasketchImg,
        gifSrc: etchasketchGif,
        name: "Etch-a-Sketch",
        description: "A resizeable etch a sketch grid where users can draw with the color of their choice.",
        tools: ["HTML", "CSS", "JavaScript"],
        github: "https://github.com/pauleenaphan/Etch-a-Sketch",
        liveSite: "https://pauleenaphan.github.io/Etch-a-Sketch/"
    },
];

export const Projects = () => {
    // Slider settings
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true, // Show arrows
    };

    return (
        <div className="outerBack">
            <Nav />
            <div className="projectPage">
                <div className="divider"></div>
                <Slider {...settings}>
                    {projects.map((project, index) => (
                        <div key={index} className="projectContainer">
                            <HoverImage staticSrc={project.staticSrc} gifSrc={project.gifSrc} alt={project.name} />
                            <div className="projectHeaderContainer">
                                <h1 className="projectName">{project.name}</h1>
                                <div className="linkContainer">
                                    <a className="siteIcon" href={project.liveSite} target="_blank" rel="noopener noreferrer">
                                        <FaArrowUpRightFromSquare />
                                    </a>

                                    <a className="githubIcon" href={project.github} target="_blank" rel="noopener noreferrer">
                                        <FaGithub />
                                    </a>
                                </div>
                            </div>
                            
                            <p className="projectDesc">{project.description}</p>
                            <div className="projectTools">
                                <ul>
                                    {project.tools.map((tool, idx) => (
                                        <li key={idx}>{tool}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};