import React from "react";
import styles from './index.module.css';

export const Button = ({ text, onClick }) => {
    return (
      <button
        onClick={onClick}
        className={styles.button}
      >
        {text}
      </button>
    );
  };
  