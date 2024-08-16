import React from "react";
import styles from './index.module.css';

export const CenterButton = ({children}) => {
    return (<div className={styles.center}>{children}</div>)
};