import React from "react";
import styles from "./index.module.css";
import cn from "classnames";

/**
 * @param {string} size s | m | xl
 */

export const Title = ({ size = "s", title }) => {
  return <span className={cn(styles.title, styles[size])}>{title}</span>;
};