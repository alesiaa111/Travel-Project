import { useEffect, useState } from 'react';
import { auth } from '../../firebase/firebase-config';
import { onAuthStateChanged } from 'firebase/auth';

export const useAuth = () => {
const [user, setUser] = useState(null); // Начальное значение пользователя — null

 useEffect(() => {
 const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
 setUser(currentUser); // Обновляем состояние пользователя
});

 return () => unsubscribe(); // Убираем подписку при размонтировании 
 }, []);
 return user; // Возвращаем текущего пользователя
};
