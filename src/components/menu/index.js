import React from "react";
import { NavLink } from "react-router-dom";
import styles from './index.module.css';


export const Menu = () => {
    // const getActiveClassName = ({isActive}) => {
    //     return isActive ? styles.active : "";
    // }

    return (
        <>
            <div className={styles.navbar}>
                <NavLink to='/header' className={styles.navText}>
                    Главная
                </NavLink>
                <NavLink to='/service' className={styles.navText}>
                    Услуги
                </NavLink>
                <NavLink to='/rent' className={styles.navText}>
                    Аренда
                </NavLink>
                <NavLink  to='/not' className={styles.navText}>
                    Контакты
                </NavLink>
                
            </div>
            <hr/>
        </>
    );
};