import React from "react";
import styles from "./index.module.css";

export const UserList = ({ serviceId, userName, phone }) => {
  return (
    <div className={styles.contener}>
      <p>{serviceId}</p>
      <p>{userName}</p>
      <p>{phone}</p>
    </div>
  );
};
