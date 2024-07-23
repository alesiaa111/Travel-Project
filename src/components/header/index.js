import React from "react";
import logoImg from '../../images/Logo.png';
import styles from "./index.module.css";


export const Header = () => {
  return (
    <div className={styles.firstScreen}>
      <img src={logoImg} alt="Logo" />
      <h1 className={styles.firstTitle}> Организация сплавов в Гомеле</h1>
      <h2 className={styles.phone_title}>
      <p>Life +375(25) 655-54-05 </p>
      <p>A1 +375(29) 114-52-20</p>
    </h2>
    </div>
  );
};
