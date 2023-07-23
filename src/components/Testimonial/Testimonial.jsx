// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import { TestimonialData } from "./TestimonialData";
import "./Testimonial.css";

const Testimonial = () => {
  return (
    <section className="testimonial container section">
      <h2 className="section-title">Testimonial</h2>
      <span className="section-subtitle">My Beloved Client</span>

      <Swiper
        className="testimonial-container"
        loop={true}
        autoplay={true}
        grabCursor={true}
        spaceBetween={24}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 48,
          },
        }}
        modules={[Pagination]}
      >
        {TestimonialData.map(({ id, name, description, image }) => {
          return (
            <SwiperSlide className="testimonial-card" key={id}>
              <img src={image} alt="" className="testimonial-img" />
              <h3 className="testimonial-name">{name}</h3>
              <p className="testimonial-description">{description}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonial;
