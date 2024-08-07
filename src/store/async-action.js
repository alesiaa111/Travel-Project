import { createAsyncThunk } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";
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