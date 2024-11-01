import { Nav } from "../component/Nav";
import "../style/Projects.css";
import HoverImage from "../component/HoverImage";

import meowpopImg from "../assets/projectImgs/meowpop.png";
import blogwogImg from "../assets/projectImgs/blogwog.png";
import cattagramImg from "../assets/projectImgs/cattagram.png";
import mentalmeImg from "../assets/projectImgs/mentalme.png";
import portfolio2Img from "../assets/projectImgs/portfolio2.png";
import etchasketchImg from "../assets/projectImgs/etchasketch.png";

import meowpopGif from "../assets/projectGifs/meowpop.gif";
import blogwogGif from "../assets/projectGifs/blogwog.gif";
import cattagramGif from "../assets/projectGifs/cattagram.gif";
import portfolio2Gif from "../assets/projectGifs/portfolio2.gif";
import etchasketchGif from "../assets/projectGifs/etchasketch.gif";

export const Projects = () =>{
    return(
        <div className="outerBack">
            <Nav></Nav>
            <div className="projectPage">
                <div className="divider"></div>
                <section className="projects">
                    <div className="projectContainer">
                        <HoverImage staticSrc={meowpopImg} gifSrc={meowpopGif} alt="meowpop"></HoverImage>
                        <h1 className="projectName"> Meowpop </h1>
                        <p className="projectDesc"> 
                            An eccomerce cat website where user can browse and purchase items. 
                            Users can also apply to become vendors and create product listings.
                        </p>
                        <div className="projectTools">
                            <ul>
                                <li> MongoDb </li> 
                                <li> Express.js </li>
                                <li> React </li>
                                <li> Node.js </li>
                                <li> Typescript </li>
                                <li> Amazon S3 </li>
                            </ul>
                        </div>
                    </div>

                    <div className="projectContainer">
                        <HoverImage staticSrc={blogwogImg} gifSrc={blogwogGif} alt="blogwog"></HoverImage>
                        <h1 className="projectName"> BlogWog </h1>
                        <p className="projectDesc">
                            A blog site where users can browse various post. Registered
                            users can login to leave comments on post
                        </p>
                        <div className="projectTools">
                            <ul>
                                <li> MongoDb </li> 
                                <li> Express.js </li>
                                <li> React </li>
                                <li> Node.js </li>
                            </ul>
                        </div>
                    </div>

                    <div className="projectContainer">
                        <HoverImage staticSrc={cattagramImg} gifSrc={cattagramGif} alt="blogwog"></HoverImage>
                        <h1 className="projectName"> Cattagram </h1>
                        <p className="projectDesc">
                            Social media web app that focuses on cats. Users can view and post pictures
                            of their cats and add other users as friends.
                        </p>
                        <div className="projectTools">
                            <ul>
                                <li> HTML </li> 
                                <li> CSS </li>
                                <li> React </li>
                                <li> Javascript </li> 
                                <li> Firebase </li>
                            </ul>
                        </div>
                    </div>

                    <div className="projectContainer">
                        <img src={mentalmeImg} alt="mentalMe"></img>
                        <h1 className="projectName"> MentalMe </h1>
                        <p className="projectDesc">
                            A mental wellness mobile app that focuses on journaling. Moobie, our
                            mascot, supports and guides users on their journaling journey.
                        </p>
                        <div className="projectTools">
                            <ul>
                                <li> React Native </li> 
                                <li> Firebase </li>
                                <li> Expo </li>
                            </ul>
                        </div>
                    </div>

                    <div className="projectContainer">
                        <HoverImage staticSrc={portfolio2Img} gifSrc={portfolio2Gif} alt="blogwog"></HoverImage>
                        <h1 className="projectName"> Portfolio2 </h1>
                        <p className="projectDesc">
                            My second portfolio website I made before this one. A website
                            within a website that showcases my skills and projects.
                        </p>
                        <div className="projectTools">
                            <ul>
                                <li> HTML </li> 
                                <li> CSS </li>
                                <li> React </li>
                                <li> Typescript </li> 
                            </ul>
                        </div>
                    </div>

                    <div className="projectContainer">
                        <HoverImage staticSrc={etchasketchImg} gifSrc={etchasketchGif} alt="meowpop"></HoverImage>
                        <h1 className="projectName"> Etch-a-Sketch </h1>
                        <p className="projectDesc">
                            A resizeable etch a sketch grid where users can draw with
                            the color of their choice
                        </p>
                        <div className="projectTools">
                            <ul>
                                <li> HTML </li> 
                                <li> CSS </li>
                                <li> Javascript </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}