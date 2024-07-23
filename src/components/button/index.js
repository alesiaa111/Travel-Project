import React from "react";
import styles from "./index.module.css";

export const Button = ({ onClick, text }) => {
  return (
    <button
      className={styles.btn}
      onClick={onClick}>
      {text}
    </button>
  );
};
