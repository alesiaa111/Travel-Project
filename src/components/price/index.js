import React from "react";
import styles from "./index.module.css";
import { servicesData } from "../../servicesData";

export const Price = ({ price }) => {
  return <div className={styles.price}>{price}</div>;
};
