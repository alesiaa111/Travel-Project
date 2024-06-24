import React from "react";
import styles from "./heder.module.css";
import { Logo } from "./assets/Logo.png";


export const Header = () => {
  return (
    <div className={styles.firstScreen}>
      <img src={Logo} alt="Logo" />
      <div className={styles.firstScreen_title}>
        <h1>Организация сплавов</h1>
        <h2 className={styles.phone_title}>
          +375(25) 655-54-05 <br />
          +375(29) 114-52-20
        </h2>
      </div>
    </div>
  );
};
