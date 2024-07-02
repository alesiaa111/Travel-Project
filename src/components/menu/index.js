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
                    <span className={styles.navText}>Главная</span>
                </NavLink>
                <NavLink to='/main' className={getActiveClassName}>
                    <span className={styles.navText}>Услуги</span>
                </NavLink>
                <NavLink to='/rent' className={getActiveClassName}>
                    <span className={styles.navText}>Аренда</span>
                </NavLink>
                <NavLink to='/footer' className={getActiveClassName}>
                    <span className={styles.navText}>Контакты</span>
                </NavLink>
            </div>
            <hr/>
        </>
    );
};