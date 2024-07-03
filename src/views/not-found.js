import React from "react";
import { Link } from "react-router-dom";
import styles from "./index.module.css";

export const NotFound = () => {
  return (
    <div className={styles.notFound}>
      {/* <img src={require("./../images/not-found.png")} alt="Not found" /> */}
      <h1 className={styles.notFoundTitle}> Страница не найдена </h1>
      <Link className={styles.notFoundLink} to="/">Вернуться на главную</Link>
    </div>
  );
};