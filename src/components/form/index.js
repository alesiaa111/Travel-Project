import { useForm } from "react-hook-form";
import React from "react";
import { useDispatch } from "react-redux";
import { submitForm } from "../../store/async-action";
import { Button } from "../button";
import styles from "./index.module.css";
import { Center } from "../center";

export const Form = ({ serviceId }) => {
  const dispatch = useDispatch();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const formSubmit = (data) => {
    dispatch(submitForm({ ...data, serviceId }));
    reset();
  };

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit(formSubmit)}>
        <div className={styles.field}>
          {errors.userName && (
            <div className={styles.error}>{errors.userName.message}</div>
          )}
          <input
            placeholder="Ваше имя"
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
            type="tel"
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
          <Button type="submit" className={styles.btn} text="Записаться" />
        </Center>
      </form>
    </>
  );
};
