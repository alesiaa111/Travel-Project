import React from "react";
import { Center } from "../../components/center/index";
import styles from "./index.module.css";

export const Users = ({ serviceId, userName, phone }) => {
  return (
    <>
      <div className={styles.contener}>
        <Center>
          <div className={styles.user_contener}>
            <div className={styles.user}>
              <div>Вид услуги:</div>
              <div className={styles.serviceId}>{serviceId}</div>
            </div>
            <div className={styles.user}>
              <div>Имя:</div>
              <div>{userName}</div>
            </div>
            <div className={styles.user}>
              <div>Телефон:</div>
              <div>{phone}</div>
            </div>
          </div>
        </Center>
      </div>
    </>
  );
};
