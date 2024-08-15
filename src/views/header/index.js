import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./index.module.css";
import { slider } from "../const/index"

export const Header = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: false,
    arrows: false,
  };

  return (
    <Slider className={styles.slider} {...settings}>
      {slider.map((slide, id) => (
        <div key={id}>
          <div
            className={styles.firstScreen}
            style={{
              backgroundImage:`url(${slide.imageUrl})`,
            }}
          ><div className={styles.logo}>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/travel-cac99.appspot.com/o/image%2FLogo.png?alt=media&token=6cc4403c-afc9-45c9-ae44-74230afadc91"
              alt="Logo"
            />
            </div>
            <h1 className={styles.firstTitle}>{slide.title}</h1>
            <div className={styles.phone_title}>
              <span>Life {slide.phone1}</span>
              <span>A1 {slide.phone2}</span>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};
