"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { ReactNode } from "react";
import "swiper/css";
import styles from "../Categories.module.scss";

const CategoriesSlider = ({ cards }: { cards: ReactNode[] }) => {
  const slides = cards?.map((card, i) => (
    <SwiperSlide className={styles.slide} key={i}>
      {card}
    </SwiperSlide>
  ));

  return (
    <Swiper
      slidesPerView={"auto"}
      spaceBetween={16}
      className={styles.slider}
      breakpoints={{
        1200: {
          slidesPerView: 3,
          spaceBetween: 24,
        },
      }}
    >
      {slides}
    </Swiper>
  );
};

export default CategoriesSlider;
