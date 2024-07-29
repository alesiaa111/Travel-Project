import { collection, doc, setDoc } from "firebase/firestore";

const servicesDataRef = collection(db, "servicesData");

await setDoc(doc(servicesDataRef,'one-day'), {
    id:1,
    serviceId: "one-day",
    price: "от 60 руб.",
    title: "Однодневные сплавы",
    serviceType:
      "Организовываем сборные группы на дневные сплавы выходного дня 4-5 часов с питанием и сопровождением инструктарами",
    imageUrl: "gs://travel-project-bc057.appspot.com/image/FullScreenStart",
});
await setDoc(doc(servicesDataRef,'one-day-corporate'), {
    id:1,
    serviceId: "one-day",
    price: "от 60 руб.",
    title: "Однодневные сплавы",
    serviceType:
      "Организовываем сборные группы на дневные сплавы выходного дня 4-5 часов с питанием и сопровождением инструктарами",
    imageUrl: "gs://travel-project-bc057.appspot.com/image/FullScreenStart",
})