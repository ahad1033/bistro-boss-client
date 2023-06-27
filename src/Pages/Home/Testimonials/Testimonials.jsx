import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper";
import { useEffect, useState } from "react";

const Testimonials = () => {

    const [reviews, setReviews] = useState([]);

    useEffect( () => {
        fetch('reviews.json')
        .then(res => res.json())
        .then(data => setReviews(data))
    }, [])

    return (
        <section>
            <SectionTitle
                subHeading="What Our Client Say"
                heading="Testimonials"
            />
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {
                    reviews.map(review => <SwiperSlide
                        key={review._id}
                    >
                        <div className="m-24">

                            <p>{review.details}</p>
                            <h3 className="text-2xl text-orange-400">{review.name}</h3>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </section>
    );
};

export default Testimonials;