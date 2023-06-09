import CallUs from "../../../Components/CallUs/CallUs";
import Banner from "../Banner/Banner";
import ChefServiceBanner from "../Banner/chefServiceBanner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
    return (
        <div>
            <Banner />
            <Category />
            <ChefServiceBanner />
            <PopularMenu />
            <CallUs />
            <Featured />
            <Testimonials />
        </div>
    );
};

export default Home;