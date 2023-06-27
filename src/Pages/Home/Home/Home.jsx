import Banner from "../Banner/Banner";
import ChefServiceBanner from "../Banner/chefServiceBanner";
import Category from "../Category/Category";

const Home = () => {
    return (
        <div>
            <Banner />
            <Category />
            <ChefServiceBanner />
        </div>
    );
};

export default Home;