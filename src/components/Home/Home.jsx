import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import FeaturedJob from "../FeaturedJob/FeaturedJob";

const Home = () => {
    return (
        <div className="max-w-7xl mx-auto px-4">
            <Banner />
            <Category />
            <FeaturedJob />
        </div>
    );
};

export default Home;
