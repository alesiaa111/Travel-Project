import { collection, doc, setDoc } from "firebase/firestore";
import { db } from "./firebase-config";

export const servicesDataRef = collection(db, "servicesData");

await setDoc(doc(servicesDataRef, "one_day"), {
  id: 1,
  serviceId: "one_day",
  price: "от 60 руб.",
  title: "Однодневные сплавы",
  serviceType:
    "Организовываем сборные группы на дневные сплавы выходного дня 4-5 часов с питанием и сопровождением инструктарами",
  imageUrl: "gs://travel-project-a2765.appspot.com/image/FullScreenStart.png",
});
await setDoc(doc(servicesDataRef, "one_day_corporate"), {
  id: 2,
  serviceId: "one_day_corporate",
  price: "от 60 руб.",
  title: "Однодневные корпоративные сплавы",
  serviceType:
    "Организовываем корпоративные сплавы выходного дня 4-5 часов с питанием и сопровождением инструктарами",
  imageUrl: "gs://travel-project-a2765.appspot.com/image/block2",
});
