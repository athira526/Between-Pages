import { useNavigate } from "react-router-dom";

function Hero_section() {
    const navigate = useNavigate();
    return ( 
        <div>Hero Page
            <button onClick={() =>navigate("/signin")}>Get Started</button>
        </div>
    )
}
export default Hero_section;