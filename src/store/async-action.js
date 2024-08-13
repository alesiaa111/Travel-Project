import { createAsyncThunk } from "@reduxjs/toolkit";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { signInWithEmailAndPassword } from 'firebase/auth';
import  { db, auth } from "../firebase/firebase-config";

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
      const data = await addDoc(collection(db, "users"), {
        userName,
        phone,
        serviceId,
      });
      alert("Данные успешно отправлены!");
      return thunkApi.fulfillWithValue({ userName, phone, serviceId});
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

export const loginAdmin = createAsyncThunk(
  'auth/loginAdmin',
  async ({ email, password }, thunkApi) => {
    try {
      const userlogIn = await signInWithEmailAndPassword(auth, email, password);
      return thunkApi.fulfillWithValue({...userlogIn});
    } catch (error) {
      console.error("Ошибка при отправке данных:", error);
      return thunkApi.rejectWithValue("Ошибка при отправке данных");
    }
  }
);
