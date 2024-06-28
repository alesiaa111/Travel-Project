import React from "react";
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
        {errors.login && <div className={styles.error}>{errors.login.message}</div>}
        <label htmlFor="email">Login (email)</label>
        <input
          type="text"
          id="email"
          {...register("login", {
            required: true,
            pattern: {
              value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
              message: "incorrect email",
            },
          })}
        />
      </div>
      <div className={styles.field}>
        {errors.password && (
          <div className={styles.error}>{errors.password.message}</div>
        )}
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          {...register("password", {
            required: { value: true, message: "this field is required" },
            minLength: {
              value: 6,
              message: "length should be > 6",
            },
          })}
        />
      </div>
      <Button />
    </form>
  );
};

