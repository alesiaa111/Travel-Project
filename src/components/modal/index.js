import React, { useMemo, memo } from "react";
import styles from "./index.module.css";
import { Form } from "../form";
import { ModalHeader } from "./modal-header";
import { ModalContext } from "./context";


export const Modal = memo(({ isOpen, onClose, serviceId }) => {
  const value = useMemo(() => ({ onClose }), [onClose]);

  if (!isOpen) {
    return null;
  }
 
  return (<>
          <ModalContext.Provider value={value}>
            <div className={styles.modal}>
              <ModalHeader onClick={onClose} />
              <div className={styles.title}>
                <span className={styles.titleMain}>Остались вопросы?</span>
                <span>Оставьте Ваш номер и мы перезвоним Вам прямо сейчас!</span>
              </div>
              <Form serviceId={serviceId} />
            </div>
          </ModalContext.Provider>,
          document.body
    </>
  );
});
        
Modal.Header = ModalHeader;
