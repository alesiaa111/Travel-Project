import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from "react-redux";

 export const PrivateRoute = ({ children }) => {
  // Здесь Вы можете проверять, авторизован ли пользователь
  // Например, используя данные из Redux-стора
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return isAuthenticated ? children : <Navigate to="/admin" />;
};