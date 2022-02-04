import React from "react";
import { PortfolioData } from "@/data";
import PortfolioCard from "@/components/portfolio-card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";

const RelatedPortfolio = () => {
  const carouselOptions = {
    spaceBetween: 0,
    slidesPerView: 1,
    breakpoints: {
      0: {
        spaceBetween: 0,
        slidesPerView: 1,
      },
      576: {
        spaceBetween: 30,
        slidesPerView: 2,
      },
      992: {
        spaceBetween: 30,
        slidesPerView: 3,
      },
    },
  };
  return (
    <section className="commonSection relatedPortfolio">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h4 className="sub_title">our waters</h4>
            <h2 className="sec_title">related fly fishing work</h2>
            <p className="sec_desc">
              We are committed to providing our customers with an exceptional
              fly fishing experience while
              <br /> sharing our experience and knowledge.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <Swiper className="related_slider" {...carouselOptions}>
              {PortfolioData.map((post, index) => (
                <SwiperSlide key={index}>
                  <PortfolioCard data={post} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RelatedPortfolio;
