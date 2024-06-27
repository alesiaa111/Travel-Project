import React, { useState } from "react";
import styles from "./form.module.css";


export const Form = ({ onUserAdd }) => {
  const [userInfo, setUserInfo] = useState({ name: "", phone: "" });

  const onUserInfoChange = ({ target }) => {
    setUserInfo((prevUserInfo) => ({
      ...prevUserInfo,
      [target.name]: target.value,
    }));
  };

  const onSubmitClick = () => {
    onUserAdd({ id: Math.random(), ...userInfo });
  };

  return (
    <div className={styles.container}>
      <input
        type="text"
        name="name"
        placeholder="Ваше имя"
        onChange={onUserInfoChange}
        value={userInfo.name}
      />
      <input
        type="text"
        name="phone"
        placeholder="Ваш номер телефона"
        onChange={onUserInfoChange}
        value={userInfo.phone}
      />
      <button className={styles.btn} onClick={onSubmitClick}>
        Заказать
      </button>
    </div>
  );
};
