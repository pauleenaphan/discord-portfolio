import { Nav } from "../component/Nav";
import "../style/About.css";

import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IoMdMail, IoIosPaper } from "react-icons/io";
import { RxArrowTopRight } from "react-icons/rx";
import { MdVerified } from "react-icons/md";

import resume from "../assets/PauleenaPhanResume.pdf";

export const About = () =>{
    return(
        <div className="outerBack">
            <Nav></Nav>
            <div className="aboutPage">
                <div className="divider"></div>
                <p className="aboutMeDesc"> 
                    Recent college graduate from CSUF seeking opportunities in full-stack and web development. 
                    I’m excited to learn and grow my skills in web development, open to exploring new technologies and 
                    opportunities. Passionate about creating engaging websites and, of course, orange cats.
                </p>
                <p className="profileSubTitle"> Skills </p>
                <section className="skills"> 
                    {/* <p className="profileSubTitle"> Roles </p> */}
                    <div className="roleSkillTag">
                        <div className="circle0"> </div>
                        <p> HTML </p>
                    </div>
                    <div className="roleSkillTag">
                        <div className="circle1"> </div>
                        <p> CSS </p>
                    </div>
                    <div className="roleSkillTag">
                        <div className="circle2"> </div>
                        <p> Javascript </p>
                    </div>
                    <div className="roleSkillTag">
                        <div className="circle3"> </div>
                        <p> Typescript </p>
                    </div>
                    <div className="roleSkillTag">
                        <div className="circle4"> </div>
                        <p> Node.Js </p>
                    </div>
                    <div className="roleSkillTag">
                        <div className="circle5"> </div>
                        <p> Express.Js </p>
                    </div>
                    <div className="roleSkillTag">
                        <div className="circle6"> </div>
                        <p> React </p>
                    </div>
                    <div className="roleSkillTag">
                        <div className="circle7"> </div>
                        <p> MongoDB </p>
                    </div>
                    <div className="roleSkillTag">
                        <div className="circle8"> </div>
                        <p> Firebase </p>
                    </div>
                    <div className="roleSkillTag">
                        <div className="circle9"> </div>
                        <p> Git </p>
                    </div>
                    <div className="roleSkillTag">
                        <div className="circle10"> </div>
                        <p> Postman </p>
                    </div>
                    <div className="roleSkillTag">
                        <div className="circle11"> </div>
                        <p> VS Code </p>
                    </div>
                </section>
                <section className="education">
                    <p className="profileSubTitle"> Education </p>
                    <p className="educationDate"> September 2020 - May 2024 </p>
                    <p className="educationInfo"> Computer Science @ California State University of Fullerton </p>
                    <p className="profileSubTitle"> Connections </p>
                </section>
                <section className="contact">
                    <a className="contactBtn" href="https://www.linkedin.com/in/pauleena-phan" target="_blank" rel="noopener noreferrer">
                        <div className="contactBtnContainer">
                            <FaLinkedin className="contactIcons"/>
                            <p> Pauleena Phan </p>
                            <MdVerified className="verifiedIcon"/>
                        </div>                        
                        <RxArrowTopRight className="arrowBtn"/>
                    </a>
                    <a className="contactBtn" href="https://github.com/pauleenaphan" target="_blank" rel="noopener noreferrer">
                        <div className="contactBtnContainer">
                            <FaGithub className="contactIcons"/>
                            <p> pauleenaphan </p>
                            <MdVerified className="verifiedIcon"/>
                        </div>
                        <RxArrowTopRight className="arrowBtn"/>
                    </a>
                    <a className="contactBtn" href="https://github.com/pauleenaphan" target="_blank" rel="noopener noreferrer">
                        <div className="contactBtnContainer">
                            <IoMdMail className="contactIcons"/>
                            <p> Pauleena2002@gmail.com </p>
                            <MdVerified className="verifiedIcon"/>
                        </div>
                        <RxArrowTopRight className="arrowBtn"/>
                    </a>
                    {/* target="_blank will open up resume in another tab" */}
                    <a className="contactBtn" href={resume} target="_blank" rel="noopener noreferrer">
                        <div className="contactBtnContainer">
                            <IoIosPaper className="contactIcons"/>
                            <p> Resume </p>
                            <MdVerified className="verifiedIcon"/>
                        </div>
                        <RxArrowTopRight className="arrowBtn"/>
                    </a>
                </section>
            </div>
        </div>
    )
}