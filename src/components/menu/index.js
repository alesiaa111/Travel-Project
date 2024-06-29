import React from "react";
import { NavLink } from "react-router-dom";
import styles from './index.module.css';


export const Menu = () => {
    const getActiveClassName = ({isActive}) => {
        return isActive ? styles.active : "";
    }

    return (
        <>
            <div className={styles.nav}>
                <NavLink to='/header' className={getActiveClassName}>
                    Главная
                </NavLink>
                <NavLink to='/main' className={getActiveClassName}>
                    Услуги
                </NavLink>
                <NavLink to='/rent' className={getActiveClassName}>
                    Аренда
                </NavLink>
                <NavLink to='/footer' className={getActiveClassName}>
                    Контакты
                </NavLink>
            </div>
            <hr/>
        </>
    );
};