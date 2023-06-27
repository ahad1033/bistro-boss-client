import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg';
import './Featured.css';

const Featured = () => {
    return (
        <div className="featured-item text-white pt-8 my-20">
            <SectionTitle
                subHeading="Check it out"
                heading="Featured Items"
            />
            <div className="md:flex justify-center items-center pb-20 pt-12 px-36">
                <div>
                    <img  src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10">
                    <p className="font-semibold text-2xl mb-2">Aug 20, 2025</p>
                    <p className="uppercase mb-2">Where can I get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda adipisci voluptatem a delectus, modi reprehenderit numquam rerum, illum doloremque labore harum, obcaecati quibusdam repellendus cumque suscipit? Rem saepe debitis accusamus quo sunt tempora, eius, cum aliquam ipsam omnis ad temporibus? Repellat dolore minus nemo excepturi fuga. Quas enim nemo sapiente.</p>
                    <button className="btn btn-outline mt-3">Read More</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;