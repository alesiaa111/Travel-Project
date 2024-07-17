import React from "react";
import styles from "./index.module.css";


export const Price = ({ price }) => {
  return <div className={styles.price}>{price}</div>;
};
