import SectionTitle from "../../components/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'


const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <section className="my-10">
      <SectionTitle
        subHeading="What our clients say"
        heading="Testimonials"
      ></SectionTitle>

      <Swiper navigation={true} className="mySwiper mt-20">
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="text-center mx-32 my-20 flex flex-col  items-center space-y-2">
              <div className="mx-auto">
              <Rating style={{ maxWidth: 180 }} value={review.rating} readOnly />
              </div>
              <p>{review.details}</p>
              <h3 className="text-2xl text-orange-500">{review.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
