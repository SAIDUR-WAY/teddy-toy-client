import useTitle from "../../hooks/useTitle";
import Banner from "./HomePage/Banner";
import Gallery from "./HomePage/Gallery";
import NewsUpdate from "./HomePage/NewsUpdate/NewsUpdate";
import ShopCategory from "./HomePage/ShopCategory/ShopCategory";

const Home = () => {
     useTitle('Home')
     return (
          <div>
               <Banner></Banner>
               <Gallery></Gallery>
               <ShopCategory></ShopCategory>
               <NewsUpdate></NewsUpdate>
          </div>
     );
};

export default Home;