import { createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../firebase/firebase-config";
import {
  getFirestore,
  collection,
  doc,
  setDoc,
  getDocs,
} from "firebase/firestore";
import { servicesDataRef } from "../firebase/set_document";
// import { collection, doc, setDoc, addDoc } from "firebase/firestore";
// import { db } from "./firebase-config";

// Запись данных о тур-услугах на сервер
export const addServicesData = createAsyncThunk(
  "addServicesDate",
  async (servicesData, thunkApi) => {
    servicesDataRef = collection(db, "servicesData");
    try {
      await Promise.all(
        servicesData.map(async (service) => {
          await setDoc(doc(servicesDataRef, service.serviceId), service);
        })
      );
      return servicesData;
    } catch (error) {
      console.error("Ошибка при отправке данных:", error);
      return thunkApi.rejectWithValue("Ошибка при отправке данных");
    }
  }
);

// Получение данных о тур-услугах с сервера в list-tour-service
export const getTourServices = createAsyncThunk(
  "getTourServices",
  async (_, thunkApi) => {
    console.log('CALL');
    try {
      const querySnapshot = await getDocs(collection(db, "servicesData"));

      const servicesData = querySnapshot.docs.map((doc) => doc.data());

      return thunkApi.fulfillWithValue(servicesData);
    } catch (error) {
      console.error("Ошибка при получении данных:", error);
      return thunkApi.rejectWithValue("Ошибка при получении данных");
    }
  }
);

// Отправка формы
export const submitForm = createAsyncThunk(
  "form/submit",
  async (formData, thunkApi) => {
    try {
      const newUserRef = doc(db, "users", formData.serviceId);
      await setDoc(newUserRef, {
        userName: formData.userName,
        phone: formData.phone,
      });
    } catch (error) {
      console.error("Ошибка при отправке данных:", error);
      return thunkApi.rejectWithValue("Ошибка при отправке данных");
    }
  }
);

// export const addService = createAsyncThunk("addService", async (formData, thunkApi) => {
//   const servicesDataRef = collection(db, "servicesData");
// try {
//   const docRef = await addDoc(servicesDataRef, {
//     serviceId: "two_day",
//     price: "от 180 руб.",
//     title: "Однодневные asdasd  сплавы",
//     serviceType:
//       "Организовываем сборные группы на дневные сплавы выходного дня 4-5 часов с питанием и сопровождением инструктарами",
//     imageUrl:
//       "https://firebasestorage.googleapis.com/v0/b/travel-project-a2765.appspot.com/o/image%2Fblock1.png?alt=media&token=c373a4b5-5d60-4d67-ab49-cd1431d49959",
//   });

//   return thunkApi.fulfillWithValue(docRef)
// } catch (e) {
//   return thunkApi.rejectWithValue(e)
// }

 
// });


export const subscribe = createAsyncThunk(async () => {
  // firebase getDoc setDoc addDoc
})