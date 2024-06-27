import React from "react";
import styles from "./header.module.css"

export const Header = () => {
  return (
    <div className={styles.firstScreen}>
      <img src={require("./images/Logo.png")} alt="Logo" />
      <h1 className={styles.firstTitle}> Организация сплавов в Гомеле</h1>
    </div>
  );
};
