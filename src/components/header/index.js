import React from "react";
import styles from "./index.module.css";







export const Header = () => {
  return (
    <div className={styles.firstScreen}>
      <img src={require("../../images/Logo.png")} alt="Logo" />
      <h1 className={styles.firstTitle}> Организация сплавов в Гомеле</h1>
      <h2 className={styles.phone_title}>
      Life +375(25) 655-54-05 <br></br>
      A1 +375(29) 114-52-20
    </h2>
    </div>
  );
};
