import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Logo  from "../../images/Logo.png";
import styles from "./index.module.css";
import { slides, settings } from "../constants/index.js";

export const Header = () => {
  return (
    <Slider {...settings}>
      {slides.map((slide, id) => (
        <div key={id}>
          <div
            className={styles.firstScreen}
            style={{
              backgroundImage: `url(${slide.imageUrl})`,
            }}
          >
            <img src={Logo} alt="Logo" />
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
