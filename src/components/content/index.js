import React, { useState, useCallback } from "react";
import { Button } from "../button/index.js";
import { Modal } from "../modal/index.js";
import styles from "./index.module.css";
import { Center } from "../center/index.js";
import { Rent } from "../rent/index.js";

export const Content = () => {
  const [showModal, setShowModal] = useState(false);

  const toggler = (prev) => !prev;

  const onModalClose = useCallback(() => setShowModal(false), []);

  return (
    <>
    <Center>
    <div className={styles.wrapper}>
      <div className={styles.blok1} id="block">
        <div className={styles.price}>
          <div className={styles.price1}>Однодневные от 50 pyб</div>
          <div className={styles.price2}>Двухдневные от 200 pyб</div>
        </div>
        <h2 className={styles.blok_title}>Корпоративные сплавы</h2>
        <p className={styles.blok_text}>
          Предлагаем коллективу Вашей организации активно провести отдых.
          Возможны любые варианты маршрута по рекам РБ. Однодневные,
          двухдневные, трехдневные сплавы с питанием, походной баней. В
          стоимость входит:
          <br /> ✓ разработка маршрута;
          <br /> ✓ доставка снаряжения к месту старта; <br /> ✓ сопровождение
          инструкторами; <br /> ✓ питание на маршруте; <br /> ✓ место в
          байдарке; <br /> ✓ спасательный жилет;
          <br /> ✓ место в палатке;
          <br /> ✓ туристический коврик;
          <br /> ✓ спальный мешок.
        </p>
        <Center>
        {
          <Button
            onClick={() => {
              setShowModal(toggler);
            }}
          />
        }
        </Center>
        {showModal && <Modal isOpen={showModal} onClose={onModalClose} />}
      </div>

      <div className={styles.blok2} id="block">
        <div className={styles.price}>
          <div className={styles.price1}>Однодневные от 50 pyб</div>
          <div className={styles.price2}>Двухдневные от 200 pyб</div>
        </div>
        <h2 className={styles.blok_title}>Сборные сплавы</h2>
        <p className={styles.blok_text}>
          Организовываем сборные группы на дневные сплавы выходного дня по
          разным маршрутам. Сплав занимает 4-5 часов, включая остановки на
          стоянки. Возможно дополнительное питание на маршруте. В стоимость
          входит: <br /> ✓ сопровождение опытными инструкторами на маршруте;
          <br /> ✓ место в байдарке;
          <br /> ✓ спасательный жилет;
          <br /> ✓ чай, кофе и сладости.
        </p>
        <Center>
        {
          <Button
            onClick={() => {
              setShowModal(toggler);
            }}
          />
        }
        </Center>
        {showModal && <Modal isOpen={showModal} onClose={onModalClose} />}
      </div>

      <div className={styles.blok3} id="block">
        <div className={styles.price1}>от 40 pyб</div>
        <h2 className={styles.blok_title}>Вечерние сплавы</h2>
        <p className={styles.blok_text}>
            Предлагае Вам встретить закаты на воде. Вместе с семьей провести
          незабываемый вечер. Наша команда поможет в сопровождении на маршруте
          даже новичкам. В стоимость входит:
          <br /> ✓ сопровождение опытными инструкторами на маршруте;
          <br /> ✓ место в байдарке;
          <br /> ✓ спасательный жилет; <br /> ✓ чай, кофе и сладости.
        </p>
        <Center>
        {
          <Button
            onClick={() => {
              setShowModal(toggler);
            }}
          />
        }
        </Center>
        {showModal && <Modal isOpen={showModal} onClose={onModalClose} />}
      

      </div>
      <div className={styles.blok4} id="block">
        <div className={styles.price1}>Стоимость расчитывается индивидуально</div>
        <h2 className={styles.blok_title}>Квесты для детей</h2>
        <p className={styles.blok_text}>
            Квест для детей. Остров сокровищ. Ребята отправляются на поиски сокровищ и
          встречают настоящего пирата. Помогают ему сориентироваться по карте и найти
          клад на острове. Найденный вкусный клад достается ребятам. В стоимость
          входит: 
          <br /> ✓ сопровождение инструкторами на маршруте в каждой байдарке с
          детьми;
          <br /> ✓ место в байдарке;
          <br /> ✓ спасательный жилет. 
          <br /> ✓ чай, кофе и сладости.
        </p>
        <Center>
        {
          <Button
            onClick={() => {
              setShowModal(toggler);
            }}
          />
        }
        </Center>
        {showModal && <Modal isOpen={showModal} onClose={onModalClose} />}
      </div>
    </div>
    </Center>
    <Rent />
    </>
  );
};
