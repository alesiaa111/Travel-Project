import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { submitForm } from "../../store/async-action";
import styles from "./index.module.css";
import { Button } from "../button/index.js";
import { Center } from "../center/index.js"

export const Form = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const formSubmit = async (formData) => {
    const resultAction = await dispatch(submitForm(formData));

    if (submitForm.fulfilled.match(resultAction)) {
      console.log("Данные успешно отправлены на сервер");
      reset();
    } else {
      console.error("Ошибка при отправке данных:", resultAction.payload);
    }
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
