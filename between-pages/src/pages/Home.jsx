import "../styles/Home.css";
import { useNavigate } from "react-router-dom";
import HeroParchment from "../assets/images/Home page/hero_parchment.png";
import HomeHero from "../assets/images/Home page/home_hero.png";
import Books from "../assets/images/Home page/books.png";
import Border from "../assets/images/Home page/border_blue.png";
import FooterParchment from "../assets/images/Home page/footer_parchment.png";
import FooterHero from "../assets/images/Home page/footer_hero.png";
import Stairs from "../assets/images/Home page/stairs.png";
import Labyrinth from "../assets/images/Home page/labyrinth.png";
import More from "../assets/images/Home page/more.png";
import Finance from "../assets/images/Home page/finance.png";
function Home(){
    const navigate = useNavigate()

    return (
        <section className="home-section">

            {/* Navbar Section */}
            <div className="navbar">
                <h1>between pages</h1>
                <form className="search-form">
                    <input type="text" placeholder="Search..."  />
                    <button type="submit">Go</button>
                </form>
            </div>

            {/* Hero Section */}
            <section className="home-hero-section">
                <div className="outer-box" style={{backgroundColor: "#947558"}}>
                    <div className="inner-box" style={{backgroundColor: "#303227"}}>
                        <h1 style={{color:"#E0E2E3",fontFamily:"Inspiration, cursive",fontSize:"15vh",wordSpacing:"15vw",textShadow:"2px 10px 4px rgba(0,0,0,0.4)"}}>BETWEEN PAGES</h1>
                    </div>
                </div>

                <img src={HomeHero} alt="Hero Statue" className="home-hero" />
                <img src={HeroParchment} alt="Hero Parchment" className="hero-parchment" />
                </section>

            {/* Categories Section */}
            <section className="home-category-section">
                <div className="outer-box" style={{backgroundColor: "#303227"}}>
                    <div className="inner-box" style={{backgroundColor: "#947558"}}>
                        {/* <h1 style={{color:"#E0E2E3"}}>Category</h1> */}
                        <div className="category-buttons">
                            <div className="category-card">
                                <img src={Labyrinth} alt="Labyrinth" onClick={()=>navigate("/category/labyrinth")}/>
                                <h2>Labyrinth of mind</h2>
                            </div>
                            <div className="category-card">
                                <img src={Finance} alt="Labyrinth" onClick={()=>navigate("/category/finance")}/>
                                <h2>The Treasury Archives</h2>
                            </div>
                            <div className="category-card">
                                <img src={More} alt="Labyrinth" onClick={()=>navigate("/category/more")}/>
                                <h2>Pages & Porcelain</h2>
                            </div>
                        </div>
                    </div>
                </div>

                <img src={Books} alt="Books" className="home-books" />
                <img src={HeroParchment} alt="Category Parchment" className="middle-parchment" />
            </section>

            {/* Footer Section */}
            <section className="home-footer-section">
                <h1 style={{color:"#E0E2E3",fontFamily:"Inspiration, cursive",fontSize:"15vh",textShadow:"2px 10px 4px rgba(0,0,0,0.4)"}}>Keep Reading!</h1>
                <img src={HeroParchment} alt="Footer Parchment" className="footer-parchment" />
                <img src={FooterParchment} alt="Footer Parchment 2" className="footer-parchment-2" />
                <img src={FooterHero} alt="Footer Hero" className="footer-hero" />
                <img src={Stairs} alt="Stairs" className="stairs" />
                <img src={Border} alt="Footer Border" className="footer-border" />
            </section>
            
        </section>
        
    )
}
export default Home;

// function Home(){
//     const navigate = useNavigate()

//     return (
//         <div>Home Page
//             <button onClick={()=>navigate("/category/1")}>Category 1</button>
//         </div>
//     )
// }