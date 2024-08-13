import { createAsyncThunk } from "@reduxjs/toolkit";
import { collection, getDocs, addDoc } from "firebase/firestore";
import  { db } from "../firebase/firebase-config";

export const getTourServices = createAsyncThunk(
    "getTourServices",
    async (payload, thunkApi) => {
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


export const submitForm = createAsyncThunk(
  "form",
  async ({ userName, phone, serviceId }, thunkApi) => {
    try {
      await addDoc(collection(db, "users"), {
        userName,
        phone,
        serviceId,
      });
      return { userName, phone, serviceId };
    } catch (error) {
      console.error("Ошибка при отправке данных:", error);
      return thunkApi.rejectWithValue("Ошибка при отправке данных");
    }
  }
);

export const getUserList = createAsyncThunk(
  "getUserList",
  async (payload, thunkApi) => {
    try {
      const querySnapshot = await getDocs(collection(db, "users"));
      const users = querySnapshot.docs.map((doc) => doc.data());
      return thunkApi.fulfillWithValue(users);
    } catch (error) {
      console.error("Ошибка при получении данных:", error);
      return thunkApi.rejectWithValue("Ошибка при получении данных");
    }
  }
);