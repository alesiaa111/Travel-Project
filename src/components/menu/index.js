import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./index.module.css";

const menu = [
  {
    title: "Главная",
    link: "/total",
  },
  {
    title: "Услуги",
    link: "/service",
  },
  {
    title: "Аренда",
    link: "/rent",
  },
  {
    title: "Маршруты",
    link: "/rivers",
  },
];

export const Menu = () => {
  return (
    <>
      <div className={styles.navbar}>
        <div>
          {menu.map(({ title, link }) => (
            <NavLink to={link} key={link} className={styles.navText}>
              {title}
            </NavLink>
          ))}
        </div>

        <div className={styles.menu_phone}>
          <a href="tel:+375256555405"> +375(25) 655-54-05</a>
          <a href="tel:+375291145220"> +375(29) 114-52-20</a>
        </div>
      </div>
    </>
  );
};
