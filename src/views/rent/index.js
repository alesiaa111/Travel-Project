import styles from "./index.module.css";

export const Rent = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.rent}>
        <h3 className={styles.rent_title}>Аренда байдарок и снаряжения</h3>
        <div className={styles.rent_text}>
          Аренда байдарок и туристического снаряжения:
          <ul className={styles.li}>
            <li>
              ✔ Байдарка + спасательный жилет + весла - 
              <span className={styles.price}>50 руб.</span>за сутки.
            </li>
            <li>
              ✔ Сапборд + спасательный жилет + весла - 
              <span className={styles.price}>40 руб.</span>за сутки.
            </li>
            <li>
              ✔ Катамаран (сборка катамарана включена в стоимость) + спасательный
              жилет + весла - <span className={styles.price}>100 руб.</span>за
              сутки.
            </li>
            <li className={styles.li_big}>
              Каждые последующие сутки аренды скидка -
              <span className={styles.price}>10 руб.</span>за сутки.
            </li>
          </ul>
          <p>Возможна доставка или самовывоз.</p>
          <p>
            Стоимость доставки расчитывается.
            <span className={styles.price}>1 км - 1 руб.</span>
          </p>
        </div>
      </div>
    </div>
  );
};
