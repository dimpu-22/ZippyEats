import Navbar from "../../components/layout/Navbar";
import Hero from "../../components/layout/Hero";
import Categories from "../../components/layout/Categories";
import PopularFoods from "../../components/layout/PopularFoods";
import FeaturedRestaurants from "../../components/layout/FeaturedRestaurants";
import Footer from "../../components/layout/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Categories />
      <PopularFoods />
      <FeaturedRestaurants />
      <Footer />
    </>
  );
};

export default Home;