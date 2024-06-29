import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "../button";
import styles from "./index.module.css";

export const Form = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  
  const formSubmit = (data) => {
    console.log(data);
  };

  console.log(errors);

  return (
    <form className={styles.form} onSubmit={handleSubmit(formSubmit)}>
      <div className={styles.field}>
        {errors.name && <div className={styles.error}>{errors.name.message}</div>}
        <label htmlFor="name">Ваше имя</label>
        <input
          type="text"
          id="name"
          {...register("name", {
            required: true,
          })}
        />
      </div>
      <div className={styles.field}>
        {errors.phone && (
          <div className={styles.error}>{errors.phone.message}</div>
        )}
        <label htmlFor="phone">Ваш номер телефона</label>
        <input
        placeholder="+375"
          type="phone"
          id="phone"
          {...register("phone", {
            minLength: {
              value: 14,
              message: "length should be = 14",
            },
            required: { value: true, 
              pattern: {
                value: /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/,
                message: "incorrect email",
              }},
          })}
        />
      </div>
      <Button />
    </form>
  );
};

