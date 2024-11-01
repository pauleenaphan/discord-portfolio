import { useNavigate } from "react-router-dom";
import "../style/Nav.css";

export const Nav = () =>{
    const navigate = useNavigate();
    return(
        <>
            <nav>
                <button onClick={() =>{ navigate("/")}}> About </button>
                <button onClick={() =>{ navigate("/Projects")}}> Projects </button>
                <button onClick={() =>{ navigate("/Contact")}}> Contact </button>
            </nav>
        </>
    )
}