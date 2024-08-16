import React from "react";
import { Link } from "react-router-dom";
import styles from "./index.module.css";

export const NotFound = () => {
  return (
    <div className={styles.notFound}>
      <img
        src="https://firebasestorage.googleapis.com/v0/b/travel-cac99.appspot.com/o/image%2Fnot-found.png?alt=media&token=92dd4df9-b2df-42ff-ae8f-5411c4d879ad"
        alt="Not found"
      />
      <h1 className={styles.notFoundTitle}> Страница не найдена </h1>
      <Link className={styles.notFoundLink} to="/">
        Вернуться на главную
      </Link>
    </div>
  );
};
