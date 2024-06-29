import React from "react";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <>
      <div>Страница не найдена</div>
      <Link to="/">Вернуться на главную</Link>
    </>
  );
};