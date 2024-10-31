import profilepic from "../assets/profilepic.jpg";
import "../style/Header.css";

export const Header = () =>{
    return(
        <div className="outerBack2">
            <div className="headerPage">
                <header className="header-top">
                    <img className="profilePic" src={profilepic} alt="pauleena phan"/>
                    <button className="contactProfileBtn"> Contact </button>
                </header>
                <section className="name">
                    <h1> Pauleena Phan </h1>
                    <p> Aspiring Web Developer </p>
                </section>
            </div>
        </div>
        
    )
}