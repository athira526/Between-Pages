import "../styles/CategoryDashboard.css"
import { useNavigate, useParams } from "react-router-dom";
import categoryConfig from "../data/categoryConfig";
import birds from "../assets/images/CategoryDashboard/birds.png"
import Chandelier from "../assets/images/CategoryDashboard/chandelier.png";
import CategoryCard from "../components/categoryCards";

function CategoryDashboard(){
    const {categoryId} = useParams();
    const config = categoryConfig[categoryId];
    const navigate = useNavigate();
    return (
        <section className="category-dash">

        {/* Navbar Section */}
        <div className="navbar">
            <h1>between pages</h1>
            <form className="search-form">
                <input type="text" placeholder="Search..."  />
                <button type="submit">Go</button>
            </form>
        </div>
        <div className="title">
            <img src={birds} alt="birds" className="birds"/>
            <h1>{config.title}</h1>
            <img src={Chandelier} alt="chandelier" className="chandelier"/>
        </div>

        {/*Grid for entries*/}
        <div className="product-grid">
            {/* Looping through each image returning 1 ui component */}
            {config.images.map((image, index) => (
                <CategoryCard 
                key={index}
                imgSrc={image}
                title={`Entry ${index + 1}`}
                onClick={() => navigate(`/category/${categoryId}/entry/${index + 1}`)}
                />
            ))}
        </div>
        
        </section>
    )
}
export default CategoryDashboard;