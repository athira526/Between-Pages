import "../styles/sign-in.css";
import { useNavigate } from "react-router-dom";




function SignIn(){
    const navigate = useNavigate()
    return(
    
      <section className="signin-section">
        <div className ="signin-container">
            <div className="signin-card">
                <h2>Sign In</h2>
                <form>
                    <input type="email" placeholder="Email" required />
                    <input type="password" placeholder="Password" required /><br/>
                    <button onClick={()=>navigate("/home")}>Enter</button>
                </form>
                </div>
        </div>
      </section>
   
    )
}
export default SignIn;

