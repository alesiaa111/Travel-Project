import React, { useContext } from "react";
import { ModalContext } from "./context";
import { Close } from "@mui/icons-material";
import styles from './index.module.css';


export const ModalHeader = () => {
    const {onClose} = useContext(ModalContext);
    

    return (
      <div className={styles.header}>
        <Close onClick = {onClose} className={styles.closeBtn} />
      </div>
    );
  };