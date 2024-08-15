import React from "react";
import styles from "./index.module.css";

export const Users = ({ serviceId, userName, phone }) => {
  return (
    <>
      <div className={styles.contener}>
        <div className={styles.user_contener}>
        <div>Вид услуги:</div><div>{serviceId}</div>
        <div>Имя:</div><div>{userName}</div>
        <div>Телефон:</div><div>{phone}</div>
        <hr />
        </div>
      </div>
    </>
  );
};
