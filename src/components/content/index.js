import React, { useState } from "react";
import { Button } from "../button/index.js";
import { Modal } from "../modal/index.js";
import styles from "./index.module.css";

export const Content = ({ onClick }) => {
  const [showModal, setShowModal] = useState(false);

  const toggler = (prev) => !prev;

  return (
    <div className={styles.wraper}>
      <div>
        <h2>Сборные сплавы</h2>
        {<Button onClick={() => {setShowModal(toggler)}} />}
         {showModal &&  (
          <Modal isOpen={showModal}>
          <div className={styles.modal}>
            <div className={styles.title}>
            <span>Остались вопросы?</span>
            <span>Оставьте Ваш номер и мы перезвоним Вам прямо сейчас!</span>
          </div>
          </div>
          </Modal>
         )};
      </div>
      <div>
        <h2>Корпоративные сплавы</h2>
        {<Button onClick={() => {setShowModal(toggler)}} />}
      </div>
      <div>
        <h2>Дневные сплавы</h2>
        {<Button onClick={() => {setShowModal(toggler)}} />}
      </div>
      <div>
        <h2>Вечерние сплавы</h2>
        {<Button onClick={() => {setShowModal(toggler)}} />}
      </div>
      <div>
        <h2>Квесты для детей</h2>
        {<Button onClick={() => {setShowModal(toggler)}}/>}
      </div>
    </div>
  );
};
