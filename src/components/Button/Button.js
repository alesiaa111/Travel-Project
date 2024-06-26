import React from "react";
import styles from './button.module.css';

export const Button = ({ onClick }) => {
    return (
      <button
        onClick={onClick}
        className={styles.button}
      >
        Записаться
      </button>
    );
  };
  