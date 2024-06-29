import React from "react";
import { NavLink } from "react-router-dom";
import styles from './menu.module.css';


export const Menu = () => {
    const getActiveClassName = ({isActive}) => {
        return isActive ? styles.active : "";
    }

    return (
        <>
            <h1>
                <NavLink to='/' className={getActiveClassName}>
                    Main
                </NavLink>
                <NavLink to='/categories' className={getActiveClassName}>
                    Categories
                </NavLink>
                <NavLink to='/post' className={getActiveClassName}>
                    Post
                </NavLink>
            </h1>
            <hr/>
        </>
    );
};