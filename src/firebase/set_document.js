import { collection, doc, setDoc, addDoc } from "firebase/firestore";
import { db } from "./firebase-config";

export const servicesDataRef = collection(db, "servicesData");

const docRef = await addDoc(servicesDataRef, {
  serviceId: "two_day",
  price: "от 180 руб.",
  title: "Однодневные asdasd  сплавы",
  serviceType:
    "Организовываем сборные группы на дневные сплавы выходного дня 4-5 часов с питанием и сопровождением инструктарами",
  imageUrl:
    "https://firebasestorage.googleapis.com/v0/b/travel-project-a2765.appspot.com/o/image%2Fblock1.png?alt=media&token=c373a4b5-5d60-4d67-ab49-cd1431d49959",
});

console.log(docRef);

// await setDoc(doc(servicesDataRef, "one_day_corporate"), {
//   serviceId: "one_day_corporate",
//   price: "от 6760 руб.",
//   title: "Однодневные корпоративные сплавы",
//   serviceType:
//     "Организовываем корпоративные сплавы выходного дня 4-5 часов с питанием и сопровождением инструктарами",
//   imageUrl: "gs://travel-project-a2765.appspot.com/image/block2",
// });
