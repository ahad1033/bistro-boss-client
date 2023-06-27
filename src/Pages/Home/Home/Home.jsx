import CallUs from "../../../Components/CallUs/CallUs";
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
            <CallUs />
        </div>
    );
};

export default Home;