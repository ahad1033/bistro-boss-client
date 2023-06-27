import Banner from "../Banner/Banner";
import ChefServiceBanner from "../Banner/chefServiceBanner";
import Category from "../Category/Category";
import PopularMenu from "../PopularMenu/PopularMenu";

const Home = () => {
    return (
        <div>
            <Banner />
            <Category />
            <ChefServiceBanner />
            <PopularMenu />
        </div>
    );
};

export default Home;