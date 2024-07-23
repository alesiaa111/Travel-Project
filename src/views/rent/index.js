import Resct from "react";
import styles from "./index.module.css";

export const Rent = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.rent}>
        <h3 className={styles.rent_title}>Аренда байдарок и снаряжения</h3>
        <p className={styles.rent_text}>
          Аренда байдарок и туристического снаряжения (спасательные жилеты,
          палатки, туристические коврики, спальные мешки).
          <br /> Стоимость аренды байдарки + спасательный жилет + весла -
          <span className={styles.price}>50 руб.</span>за сутки. Возможна
          доставка или самовывоз. <br />
          Стоимость доставки расчитывается.
          <span className={styles.price}>1 км - 1 руб.</span>
        </p>
      </div>
    </div>
  );
};
