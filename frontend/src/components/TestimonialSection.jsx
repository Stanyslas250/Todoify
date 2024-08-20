import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import { LuArrowLeft, LuArrowRight } from "react-icons/lu";
import Testimonal from "./Testimonal";
import { reviewsData } from "../utils/welcomePageData";
import { FaStar } from "react-icons/fa6";

function TestimonialSection() {
  return (
    <div className="flex flex-col items-center h-full gap-2 px-5 py-10 md:h-screen lg:flex-row lg:justify-around">
      <div className="flex flex-col justify-between gap-10 lg:w-1/4">
        <div className="flex flex-col gap-4">
          <h6 className="text-xl font-semibold">Testimonial</h6>
          <p className="relative text-4xl">
            23k+ Customers gave their{" "}
            <span className="inline-flex text-primary">Feedback</span>
          </p>
        </div>

        <div className="flex flex-row gap-6">
          <button className="prev btn btn-primary btn-outline">
            <LuArrowLeft />
          </button>
          <button className="next btn btn-primary btn-outline">
            <LuArrowRight />
          </button>
        </div>
      </div>
      <div className="flex items-center w-2/3 h-full p-6 space-x-4 border-4 border-primary md:h-3/5 rounded-box">
        <Swiper
          modules={[Navigation]}
          navigation={{ prevEl: ".prev", nextEl: ".next" }}
          spaceBetween={20}
          slidesPerView={2.1}
          loop={true}
          autoHeight={true}
          autoplay={{ delay: 1000, disableOnInteraction: false }}
        >
          {reviewsData.map((review, index) => (
            <SwiperSlide key={index}>
              <Testimonal
                Key={index}
                Name={review.name}
                Comment={review.comment}
                Date={review.date}
              >
                {Array(review.rating).fill(<FaStar color="gold" />)}
              </Testimonal>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default TestimonialSection;
