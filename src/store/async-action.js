import { createAsyncThunk } from "@reduxjs/toolkit";
import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "../firebase/firebase-config";

export const servicesDataRef = collection(db, "servicesData");

// Запись данных о тур-услугах на сервер 
export const addServicesData = createAsyncThunk(
  "addService",
  async (formServiceData, thunkApi) => {
    const servicesDataRef = collection(db, "servicesData");
    try {
      const docRef = await addDoc(servicesDataRef, {
        serviceId: formServiceData.serviceId,
        price: formServiceData.price,
        title: formServiceData.title,
        serviceType: formServiceData.serviceType,
        imageUrl: formServiceData.imageUrl,
      });
      return thunkApi.fulfillWithValue(docRef);
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
      const newUserRef = collection(db, "users", formData.serviceId);
      await addDoc(newUserRef, {
        userName: formData.userName,
        phone: formData.phone,
      });
      return thunkApi.fulfillWithValue(newUserRef);
    } catch (error) {
      console.error("Ошибка при отправке данных:", error);
      return thunkApi.rejectWithValue("Ошибка при отправке данных");
    }
  }
);
