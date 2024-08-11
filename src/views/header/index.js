import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./index.module.css";

export const Header = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    fade: false,
  };

  const slides = [
    {
      title: "Организация сплавов в Гомеле",
      phone1: "+375(25) 655-54-05",
      phone2: "+375(29) 114-52-20",
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/travel-cac99.appspot.com/o/image%2FFullScreenStart.png?alt=media&token=f077be72-85cc-40ba-8f21-4a1e1444c056",
    },
    {
      title: "Тематические сплавы",
      phone1: "+375(25) 655-54-05",
      phone2: "+375(29) 114-52-20",
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/travel-cac99.appspot.com/o/image%2Fevent.png?alt=media&token=d673520d-93ab-48e4-823f-3dd134893dab",
    },
    {
      title: "Тимбилдинг на воде",
      phone1: "+375(25) 655-54-05",
      phone2: "+375(29) 114-52-20",
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/travel-cac99.appspot.com/o/image%2Fteam_building.png?alt=media&token=a2d5c49f-64dc-4ae9-aac1-46f5b89961ba",
    },
    {
      title: "Туры в Карелию",
      phone1: "+375(25) 655-54-05",
      phone2: "+375(29) 114-52-20",
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/travel-cac99.appspot.com/o/image%2Ftour1.png?alt=media&token=8b3b9ae6-8bc6-413e-a807-b68d290b1989",
    },
  ];

  return (
    <Slider className={styles.slider} {...settings}>
      {slides.map((slide, id) => (
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
