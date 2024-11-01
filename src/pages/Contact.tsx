import { Nav } from "../component/Nav";
import { useEffect, useState } from "react";

import "../style/Contact.css";

import emailjs from '@emailjs/browser';

export const Contact = () =>{
    type FormData = {
        userEmail: string;
        userSubject: string;
        userMessage: string;
    };

    const [formData, setFormData] = useState<FormData>({
        userEmail: "",
        userSubject: "",
        userMessage: ""
    });

    const [sentMsgVisible, setSentMsgVisible] = useState<boolean>(false);

    const updateFormData = (field: string, value: string) => {
        setFormData(prevState => ({
            ...prevState,
            [field]: value
        }));
    };

    const templateParams = {
        to_name: 'Pauleena Phan',
        from_name: formData.userEmail,
        subject: formData.userSubject,
        message: formData.userMessage,
    };


    const sendMail = (event: React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
    
        emailjs
        .send('service_em6ucna', 'template_me2o659', templateParams,{
            publicKey: 'r9VwP9XosCGtJF8J5',
        })
        .then(
            (response) => {
            console.log('SUCCESS!', response.status, response.text);
            },
            (err) => {
            console.log('FAILED...', err);
            },
        );

        setSentMsgVisible(true);

        //reset the text the user entered in the form
        (event.currentTarget as HTMLFormElement).reset();
    }

    //after user has sent a msg a msg will display for 3 seconds
    useEffect(() => {
        if (sentMsgVisible){
        const timer = setTimeout(() => {
            setSentMsgVisible(false);
        }, 3000);
    
        return () => clearTimeout(timer);
        }
    }, [sentMsgVisible]);

    return(
        <div className="outerBack">
            <Nav></Nav>
            <div className="contactPage">
                <div className="divider"></div>
                <section className="contactSec">
                    <p className="profileSubTitle"> Want to get in touch? Send me a message right here! </p>
                    <form className="contactForm" onSubmit={sendMail}>
                        <div className="emailFormHead">
                            <div className="labelInput">
                                <label> Email </label>
                                <input type="text" placeholder="Your Email" onChange={(e) => {updateFormData("userEmail", e.target.value)}}/>
                            </div>
                            <div className="labelInput">
                                <label> Subject </label>
                                <input type="text" placeholder="Purpose of your Email" onChange={(e) => {updateFormData("userSubject", e.target.value)}}/>
                            </div>
                            
                        </div>
                        <div className="labelInput">
                            <label> Message </label> 
                            <textarea placeholder="Your Message here" onChange={(e) => {updateFormData("userMessage", e.target.value)}}/>
                        </div>
                        <div className="contactStatus">
                            <button className="subbtn"> Send! </button>
                            {sentMsgVisible && (
                                <p className="sentMsg">Message has been sent!</p>
                            )}
                            {/* <p>Message has been sent!</p> */}
                        </div>
                    </form>
                </section>
            </div>
        </div>
    )
}