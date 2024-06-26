import React from "react";
import styles from "./header.module.css"

export const Header = () => {
  return (
    <div className={styles.firstTitle}>
      <img src={require("./images/Logo.png")} alt="Logo" />
      <h1> Организация сплавов в Гомеле</h1>
    </div>
  );
};
