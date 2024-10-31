import { useNavigate } from "react-router-dom";
import "../style/Nav.css";

export const Nav = () =>{
    const navigate = useNavigate();
    return(
        <>
            <nav>
                <button onClick={() =>{ navigate("/")}}> About Me </button>
                <button onClick={() =>{ navigate("/Projects")}}> Projects </button>
            </nav>
        </>
    )
}