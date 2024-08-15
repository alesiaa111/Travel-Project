import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import styles from "./index.module.css";
import { Center } from "../../components/center";
import { Title } from "../../components/title";
import { slides } from "../const/index";
import { KeyboardArrowRight, KeyboardArrowLeft } from "@mui/icons-material";

export const RiverList = () => {
  const swiperRef = useRef(null);

  const handleNext = () => {
    swiperRef.current.swiper.slideNext();
  };

  const handlePrev = () => {
    swiperRef.current.swiper.slidePrev();
  };

  return (
    <>
      <Center>
        <Title size="xl" title="Варианты маршрутов" />
      </Center>
      <div className={styles.swiperContainer}>
        <button className={styles.arrowButton} onClick={handlePrev}>
          <KeyboardArrowLeft fontSize="large" />
        </button>
        <Swiper
          ref={swiperRef}
          slidesPerView={3}
          spaceBetween={10}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },

            768: {
              slidesPerView: 2,
            },

            1024: {
              slidesPerView: 3,
            },
          }}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          loop={true}
        >
          {slides.map((slide, id) => (
            <SwiperSlide key={id}>
              <div
                className={styles.riversList}
                style={{
                  backgroundImage: `url(${slide.imageUrl})`,
                }}
              >
                <div className={styles.top}>
                  <span className={styles.riversTime}>{slide.time}</span>
                  <span className={styles.riversTitle}>{slide.title}</span>
                </div>
                <span className={styles.riversLevel}>{slide.level}</span>
                <span className={styles.riversKm}>{slide.km}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <button className={styles.arrowButton} onClick={handleNext}>
          <KeyboardArrowRight fontSize="large" />
        </button>
      </div>
    </>
  );
};
