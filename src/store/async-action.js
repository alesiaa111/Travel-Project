import { createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../firebase/firebase-config";
import { collection, doc, setDoc, getDocs } from "firebase/firestore";
import { servicesDataRef } from "../firebase/set_document";

export const addServiceData = async (service) => {
  servicesDataRef = collection(db, "servicesData");
  await setDoc(doc(servicesDataRef, service.serviceId), service);
  console.log(`Отправка данных: ${JSON.stringify(service)}`);
};

export const addServicesData = createAsyncThunk(
  "addServicesDate",
  async (servicesData, thunkApi) => {
    servicesDataRef = collection(db, "servicesData");
    try {
      servicesData.map(async (service) => {
        await setDoc(doc(servicesDataRef, service.serviceId), service);
      });

      return servicesData; // Возвращаем данные об услугах для дальнейшего использования
    } catch (error) {
      return thunkApi.rejectWithValue(error.message); // Обработка ошибок
    }
  }
);

export const getTourServices = createAsyncThunk(
  "getTourServices",
  async (payload, thunkApi) => {
    const querySnapshot = await getDocs(collection(db, "servicesData"));
    const servicesData = querySnapshot.docs.map((doc) => doc.data());
    return thunkApi.fulfillWithValue(servicesData);
  }
);
