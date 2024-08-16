import React from "react";
import styles from "./index.module.css";
import { Instagram, YouTube, Phone, Email } from "@mui/icons-material";

export const Footer = () => {
  return (
    <>
      <footer>
        <div className={styles.footer_wrapper}>
          <div className={styles.info}>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/travel-cac99.appspot.com/o/image%2FLogo.png?alt=media&token=6cc4403c-afc9-45c9-ae44-74230afadc91"
              alt="Сплавы в Гомеле"
            />
            <div>ИП Давыдов А.В.</div>
            <div>УНП 491683235</div>
          </div>
          <div className={styles.contact}>
            <p className={styles.tel}>Контакты</p>
            <div className={styles.phone}>
              <Phone />
              <a href="tel:+375256555405"> Life +375 (25) 655-54-05</a>
            </div>
            <div className={styles.phone}>
              <Phone />
              <a href="tel:+375291145220"> A1 +375(29) 114-52-20</a>
            </div>
            <div className={styles.email}>
              <Email />
              <a href="mailto:avantyuristyTravel@yandex.ru">
                avantyuristyTravel@yandex.ru
              </a>
            </div>
            <div className={styles.footer_favicon}>
              <div className={styles.favicon}>
                <a href="https://instagram.com/avantyuristy.by?utm_source=qr&igshid=MzNlNGNkZWQ4Mg==">
                  <Instagram />
                </a>
              </div>
              <div className={styles.favicon}>
                <a href="https://www.youtube.com/@avantyuristy.by1234">
                  <YouTube />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.footer_bottom}>Гомель © 2024</div>
      </footer>
    </>
  );
};
