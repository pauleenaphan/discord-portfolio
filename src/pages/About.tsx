import { Nav } from "../component/Nav";
import "../style/About.css";

import { FaLinkedin, FaGithub } from "react-icons/fa";
import { RxArrowTopRight } from "react-icons/rx";
import { MdVerified } from "react-icons/md";

export const About = () =>{
    return(
        <div className="outerBack">
            <div className="aboutPage">
                <Nav></Nav>
                <div className="divider"></div>
                <p className="aboutMeDesc"> 
                    Recent college gradute from CSUF looking for opportunities in fullstack and web development.
                    Loves orange cats and creating cool websites.
                </p>
                <p className="profileSubTitle"> Roles </p>
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
                    <p className="educationInfo"> Bachelors in Computer Science </p>
                    <p className="profileSubTitle"> Connections </p>
                </section>
                <section className="contact">
                    <div className="contactBtn">
                        <div className="contactBtnContainer">
                            <FaLinkedin className="contactIcons"/>
                            <p> Pauleena Phan </p>
                            <MdVerified className="verifiedIcon"/>
                        </div>                        
                        <RxArrowTopRight className="arrowBtn"/>
                    </div>
                    <div className="contactBtn">
                        <div className="contactBtnContainer">
                            <FaGithub className="contactIcons"/>
                            <p> pauleenaphan </p>
                            <MdVerified className="verifiedIcon"/>
                        </div>
                        <RxArrowTopRight className="arrowBtn"/>
                    </div>
                </section>
            </div>
        </div>
    )
}