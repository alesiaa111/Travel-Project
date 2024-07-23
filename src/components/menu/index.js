import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./index.module.css";

const menu = [
  {
    title: "Главная",
    link: "/header",
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
          <span>+375(25) 655-54-05 </span>
          <span>+375(29) 114-52-20 </span>
        </div>
      </div>
    </>
  );
};
