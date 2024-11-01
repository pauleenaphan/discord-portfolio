import profilepic from "../assets/profilepic.jpg";
import "../style/Header.css";

import { useNavigate } from "react-router-dom";
import { IoChatbubbleSharp } from "react-icons/io5";
import { FaComputer, FaCat } from "react-icons/fa6";

export const Header = () =>{
    const navigate = useNavigate();

    return(
        <div className="outerBack2">
            <div className="headerPage">
                <header className="header-top">
                    <img className="profilePic" src={profilepic} alt="pauleena phan"/>
                    <div className="contactContainer">
                        <IoChatbubbleSharp/>
                        <p onClick={() =>{ navigate("/Contact")}}> Contact </p>
                    </div>
                    
                </header>
                <section className="name">
                    <h1> Pauleena Phan </h1>
                    <div className="nameContainer">
                        <p> Aspiring Web Developer </p>
                        <div className="nameIcons">
                            <FaComputer/>
                            <FaCat />
                        </div>
                    </div>
                    
                </section>
            </div>
        </div>
        
    )
}