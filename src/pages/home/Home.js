import "./Home.css";
import Header from "../../layout/header/Header";
import Card from "../../components/product/Category-Card/Card";
import { Men_Category, Women_Category } from "../../assets/images/images";
import Services from "../../components/common/services/Services";
import Banner from "../../components/common/Middle-Banner/Banner";
import Listing_Products from "../../components/product/product_Listing/Listing_Products";

const Home = () => {
  return (
    <>
    
    <Header />
      
          <Services />
      <div className="container">
        <div className="row">
          <h3 className="text-center mt-5">Categories</h3>
        </div>
        <div className="row  rounded">
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 mb-3 mt-3">
            <Card image={Men_Category} title="Mens" />
          </div>
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 mb-3 mt-3">
            <Card image={Women_Category} title="Womens" />
          </div>
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 mb-3 mt-3">
            <Card image={Women_Category} title="Kids" />
          </div>
        </div>
      </div>
            <Listing_Products title="Featured"/>
            <Listing_Products title="Latest Collection"/>
    </>
  );
};

export default Home;
