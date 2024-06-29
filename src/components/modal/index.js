import React, { useState, useMemo, memo  } from "react";
import { createPortal } from "react-dom";
import styles from "./index.module.css";
import { ModalContext } from "./context";
import { Form } from "../form";
import { ModalHeader } from "./modal-header";

export const Modal = memo(({ isOpen, onClose }) => {
  const [persons, setPersons] = useState("");
  const value = useMemo(() => ({ onClose }), [onClose]);

  if (!isOpen) {
    return null;
  }

  const onUserAdd = (userObj) => {
    setPersons((prevPersons) => [...prevPersons, userObj]);
  };

  return createPortal(
    <ModalContext.Provider value ={value}>
      <ModalHeader />
         <div className={styles.modal}>
            <div className={styles.title}>
            <span>Остались вопросы?</span>
            <span>Оставьте Ваш номер и мы перезвоним Вам прямо сейчас!</span>
          </div>
          <Form onUserAdd={onUserAdd} />
          </div>
    </ModalContext.Provider>,
    document.body
  );
});

Modal.Header = ModalHeader;