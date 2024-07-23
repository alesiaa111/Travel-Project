import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "../button";
import styles from "./index.module.css";
import { Center } from "../center";
import * as firebase from 'firebase/app';
import 'firebase/database';

export const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const database = firebase.database();

  const formSubmit = (formData) => {
    console.log(formData);
    database.ref('users/' + formData.id).set({
      userName: formData.userName,
      phone: formData.phone
    })
    .then(() => {
      console.log('Данные успешно отправлены на сервер');
      reset();
    })
    .catch((error) => {
      console.error('Ошибка при отправке данных:', error);
    });
    reset();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(formSubmit)}>
      <div className={styles.field}>
        {errors.userName && (
          <div className={styles.error}>{errors.userName.message}</div>
        )}
        <input
          placeholder="Ваше имя"
          type="text"
          name="userName"
          {...register("userName", {
            required: { value: true, message: "Заполните поле" },
            minLength: {
              value: 2,
              message: "Неверное имя",
            },
          })}
        />
      </div>
      <div className={styles.field}>
        {errors.phone && (
          <div className={styles.error1}>{errors.phone.message}</div>
        )}

        <input
          placeholder="Ваш номер +375"
          type="phone"
          name="phone"
          {...register("phone", {
            required: { value: true, message: "Заполните поле" },
            pattern: {
              value: /^(\+375|80)(29|25|44|33)(\d{3})(\d{2})(\d{2})$/,
              message: "Неверный формат",
            },
          })}
        />
      </div>
      <Center>
        <Button className={styles.btn} text="Записаться" />
      </Center>
    </form>
  );
};
