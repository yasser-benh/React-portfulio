import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import icone from "../../../imgs/front-development-1-1 1.svg";
import { GrFormNextLink } from "react-icons/gr";
import { GrFormPreviousLink } from "react-icons/gr";

import { useQuery } from "@tanstack/react-query";
import { fetchServices } from "../../../api/fetchservices";

import "./swiper.css";
import "swiper/css";

import { useTranslation } from "react-i18next";

export default function SwiperSection() {
  const {i18n} = useTranslation()
  const {
    data,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["services", i18n.language],
    queryFn: () => fetchServices(i18n.language),
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <Swiper
        modules={[Navigation]}
        spaceBetween={50}
        slidesPerView={3}
        navigation={{
          nextEl: ".next-btn",
          prevEl: ".prev-btn",
        }}
        pagination={{ clickable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {data.map((slider) => (
          <SwiperSlide key={slider.id}>
            <div className="card_container">
              <img src={icone} className="card_icone" />
              <div className="card_description">
                <h3>{slider.title}</h3>
                <p>{slider.description}</p>
                <Link className="leran-more">Leran More</Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-btns-container">
        <button className="prev-btn">
          <GrFormPreviousLink className="prev-btn-icone" />
        </button>
        <button className="next-btn">
          <GrFormNextLink className="next-btn-icone" />
        </button>
      </div>
    </>
  );
}
