import React from "react";
import styles from "./index.module.css";

export const Users = ({ serviceId, userName, phone }) => {
  
  return (
    <div className={styles.contener}>
      <p>Вид услуги:{serviceId}</p>
      <p>Имя:{userName}</p>
      <p>Телефон:{phone}</p>
      <br/>
    </div>
  );
};
