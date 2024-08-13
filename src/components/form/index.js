import { useForm } from "react-hook-form";
import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { submitForm } from "../../store/async-action";
import { addFormUsers } from "../../store/selector";
import { Button } from "../button";
import styles from "./index.module.css";
import { Center } from "../center";

export const Form = ({ serviceId }) => {
  const dispatch = useDispatch();
  const addForm = useSelector(addFormUsers);
  const [userName, setName] = useState("");
  const [phone, setPhone] = useState("");
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    dispatch(submitForm());
  }, [dispatch]);

  

  const formSubmit = async (data) => {
    try {
      const resultAction = await dispatch(
        submitForm({ userName, phone, serviceId })
      );

      if (submitForm.fulfilled.match(resultAction));
      alert("Данные успешно отправлены!");
      reset();
    } catch (error) {
      alert("Ошибка при отправке данных: " + error.message);
    }
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
            type="text"
            value={userName}
            {...register("userName", {
              required: { value: true, message: "Заполните поле" },
              minLength: {
                value: 2,
                message: "Неверное имя",
              },
            })}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className={styles.field}>
          {errors.phone && (
            <div className={styles.error1}>{errors.phone.message}</div>
          )}
          <input
            placeholder="Ваш номер +375"
            type="tel"
            value={phone}
            {...register("phone", {
              required: { value: true, message: "Заполните поле" },
              pattern: {
                value: /^(\+375|80)(29|25|44|33)(\d{3})(\d{2})(\d{2})$/,
                message: "Неверный формат",
              },
            })}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <Center>
          <Button
            type="submit"
            className={styles.btn}
            text="Записаться"
          />
        </Center>
      </form>
    </>
  );
};