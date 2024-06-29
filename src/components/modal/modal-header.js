import {useContext} from "react";
import { Close } from "@mui/icons-material";
import { ModalContext } from './context';
import styles from './index.module.css';


export const ModalHeader = ({ text }) => {
    const {onClose} = useContext(ModalContext);
  
    // const icon = Object.keys(icons).includes(iconName)
    //   ? icons[iconName]
    //   : icons["info"];
  
    return (
      <div className={styles.header}>
        <Close onClick={onClose} className={styles.closeBtn} />
      </div>
    );
  };