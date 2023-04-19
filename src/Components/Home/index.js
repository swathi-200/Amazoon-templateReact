import Banner from "./banner";
import ProductCard from "./productcard";
import './index.scss'
const Home=()=>
{
    return(
        <div className="home">
             <Banner />
             <div className="home__section">
                <ProductCard />
             </div>
        </div>
    )
}
export default Home;