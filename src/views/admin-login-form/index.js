import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
// import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginAdmin } from "../../store/async-action";
// import { loadingLogIn } from "../../store/selector"
import { Button } from "../../components/button";
import { Center } from "../../components/center";
import { Title } from "../../components/title";
import styles from "./index.module.css";

export const AdminLoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
    // const loading = useSelector(state => loadingLogIn(state));

  const onSubmit = (data) => {
    // dispatch(loadingLogIn(true));
    dispatch(loginAdmin(data))
      .unwrap()
      .then(() => {
        console.log("успешно");
        navigate("/user-list");
      })
      .catch((error) => {
        alert("Вы не являетесь Администратором");
        reset();
        console.error(error);
      })
      // .finally(() => {dispatch(loadingLogIn(false))
      // });
  };

  return (
    <>
      <div className="wrapper">
        <Center>
          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <Title size="m" title="Вход для Администратора" />
            <div className={styles.field}>
              {errors.email && (
                <div className={styles.error}>{errors.email.message}</div>
              )}
              <input
                placeholder="Email"
                {...register("email", {
                  required: { value: true, message: "Заполните поле" },
                  pattern: {
                    value: /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/,
                    message: "Неверный формат",
                  },
                })}
              />
            </div>
            <div className={styles.field}>
              {errors.password && (
                <div className={styles.error1}>{errors.password.message}</div>
              )}
              <input
                placeholder="Пароль"
                {...register("password", {
                  required: { value: true, message: "Заполните поле" },
                  minLength: {
                    value:6,
                    message: "Не менее 6 символов",
                  }
                })}
              />
            </div>
            <Button type="submit" className={styles.btn} text="Войти" />
          </form>
        </Center>
      </div>
    </>
  );
};
