import React, { useState} from "react";
import { createPortal } from "react-dom";
import styles from "./modal.module.css";
import { ModalContext } from "./context";
import { Form } from "../form/Form";



export const Modal = () => {
    const [persons, setPersons] = useState("");

    const onUserAdd = (userObj) => {
      setPersons((prevPersons) => [...prevPersons, userObj]);
    };


  return createPortal(
    <ModalContext.Provider>
      <div className={styles.modal}>
        <h1 style={{textAlign: "center"}}>Заказать звонок</h1>
      <Form onUserAdd={onUserAdd}/>
      </div>
    </ModalContext.Provider>,
    document.body
  );
};

