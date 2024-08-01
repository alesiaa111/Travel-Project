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

// Заппись данных о тур-услугах на сервер
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
    try{
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
      db = getFirestore();
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
