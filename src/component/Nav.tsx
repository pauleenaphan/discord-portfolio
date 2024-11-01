import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "../style/Nav.css";

export const Nav = () =>{
    const navigate = useNavigate();
    const [activeButton, setActiveButton] = useState("");

    useEffect(() => {
        setActiveButton(location.pathname); // Set active button based on the current path
    }, [location.pathname]); // Run when the path changes

    const handleButtonClick = (path: string) => {
        setActiveButton(path); // Set active button state
        navigate(path); // Navigate to the new path
    };

    return(
        <nav>
            <button
                className={activeButton === "/" ? "active" : ""}
                onClick={() => handleButtonClick("/")}>
                About
            </button>
            <button
                className={activeButton === "/Projects" ? "active" : ""}
                onClick={() => handleButtonClick("/Projects")}>
                Projects
            </button>
            <button
                className={activeButton === "/Contact" ? "active" : ""}
                onClick={() => handleButtonClick("/Contact")}>
                Contact
            </button>
        </nav>
    )
}