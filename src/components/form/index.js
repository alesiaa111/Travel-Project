// import React from "react";
// import { useForm } from "react-hook-form";
// import { Button } from "../button";
// import styles from "./index.module.css";
// import { Center } from "../center";
// import { getDatabase, ref, set } from "firebase/database";

// export const Form = () => {
//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors },
//   } = useForm();

//   const formSubmit = (formData) => {
//     const db = getDatabase();
//     const newUserRef = ref(db, "users/" + formData.serviceId);
//     set(newUserRef, {
//       userName: formData.userName,
//       phone: formData.phone,
//     })
//       .then(() => {
//         console.log("Данные успешно отправлены на сервер");
//         reset();
//       })
//       .catch((error) => {
//         console.error("Ошибка при отправке данных:", error);
//       });
//     reset();
//   };

//   return (
//     <form className={styles.form} onSubmit={handleSubmit(formSubmit)}>
//       <div className={styles.field}>
//         {errors.userName && (
//           <div className={styles.error}>{errors.userName.message}</div>
//         )}
//         <input
//           placeholder="Ваше имя"
//           type="text"
//           name="userName"
//           {...register("userName", {
//             required: { value: true, message: "Заполните поле" },
//             minLength: {
//               value: 2,
//               message: "Неверное имя",
//             },
//           })}
//         />
//       </div>
//       <div className={styles.field}>
//         {errors.phone && (
//           <div className={styles.error1}>{errors.phone.message}</div>
//         )}

//         <input
//           placeholder="Ваш номер +375"
//           type="phone"
//           name="phone"
//           {...register("phone", {
//             required: { value: true, message: "Заполните поле" },
//             pattern: {
//               value: /^(\+375|80)(29|25|44|33)(\d{3})(\d{2})(\d{2})$/,
//               message: "Неверный формат",
//             },
//           })}
//         />
//       </div>
//       <Center>
//         <Button className={styles.btn} text="Записаться" />
//       </Center>
//     </form>
//   );
// };
import { useForm } from "react-hook-form";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setFormData, clearFormData } from "../../store/slice-form";
import { db } from "../../firebase/firebase-config"; // Импортируйте вашу настройку Firebase
import { collection, addDoc } from "firebase/firestore";
import { Button } from "../button";
import styles from "./index.module.css";
import { Center } from "../center";

export const Form = ({ serviceId, onClose }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const {
    register,
    reset,
    formState: { errors },
  } = useForm();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "users"), {
        name,
        phone,
        serviceId: serviceId,
      });

      dispatch(setFormData({ name, phone, serviceId: serviceId }));
      alert("Данные успешно отправлены!");
      onClose();
    } catch (error) {
      console.error("Ошибка при отправке данных:", error);
    }
  };

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
         <div className={styles.field}>
        {errors.name && (
          <div className={styles.error}>{errors.name.message}</div>
        )}
          <input
            placeholder="Ваше имя"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required 
            {...register("name", {
              required: { value: true, message: "Заполните поле" },
              minLength: {
                value: 2,
                message: "Неверное имя",
              },
            })}
          />
          <input
            placeholder="Ваш номер +375"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required 
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
      </>
  );
};
