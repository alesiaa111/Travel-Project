import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import styles from "./index.module.css";
import { Center } from "../../components/center";
import { Title } from "../../components/title";

export const RiverList = () => {
  const slides = [
    {
      title: "д.Улуковье - г.Гомель река Ипуть 13 км",
      time: " 3,5 часа",
      level: "легкий",
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/travel-cac99.appspot.com/o/image%2FGolovinc.png?alt=media&token=fa076d1e-03eb-4d60-9e73-5dde09034b85",
    },
    {
      title: "Урочище Шубино - г.Ветка река Сож 15 км",
      time: " 4 часа",
      level: "легкий",
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/travel-cac99.appspot.com/o/image%2FShubino.png?alt=media&token=73598f71-3c08-400a-a8c8-b6bb3eae7550",
    },
    {
      title: "д.Головинцы - г.Гомель река Ипуть 15 км",
      time: " 4 часа",
      level: "легкий",
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/travel-cac99.appspot.com/o/image%2FGolovinc.png?alt=media&token=fa076d1e-03eb-4d60-9e73-5dde09034b85",
    },
    {
      title: "г.Ветка - г.Гомель река Сож 23 км",
      time: " 5 часов",
      level: "средний",
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/travel-cac99.appspot.com/o/image%2FYlykove.png?alt=media&token=be284b9d-ab98-4916-91b3-40485b219a01",
    },
    {
      title: "г.Добруш - г.Гомель река Сож 36 км",
      time: " 8 часов",
      level: "сложный",
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/travel-cac99.appspot.com/o/image%2FHard.png?alt=media&token=4b996f32-1f2c-48e0-bb28-857aaa013549",
    },
  ];

  return (
    <>
      <Center>
        <Title size="xl" title="Варианты маршрутов" />
      </Center>
      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        navigation
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
              <span className={styles.riversTime}>{slide.time}</span>
              <span className={styles.riversLevel}>{slide.level}</span>
              <span className={styles.riversTitle}>{slide.title}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
