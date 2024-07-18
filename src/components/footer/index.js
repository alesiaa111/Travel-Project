import React from "react";
import styles from "./index.module.css";



export const Footer = () => {
    return (
      <footer>
        <div className={styles.footer_wrapper}>
          <div className={styles.logo_end}>
            <img src={require("../../images/Logo.png")} alt="Сплавы в Гомеле" />
          </div>
          <div className={styles.contact}>
            <p>ИП Давыдов А.В.</p>
            <p>УНП 491683235</p>
            <p>Life +375(25) 655-54-05</p>
            <p> A1 +375(29) 114-52-20</p>
          </div>
          <div className={styles.footer_favicon}>
            <div className={styles.logo1}>
              <a href="https://instagram.com/avantyuristy.by?utm_source=qr&igshid=MzNlNGNkZWQ4Mg==">
                <img src={require("../../images/instagram_icon.png")} alt="Instagram" />
              </a>
            </div>
            <div className={styles.logo2}>
              <a href="https://www.youtube.com/@avantyuristy.by1234">
                <img src={require("../../images/youtube_icon.png")} alt="YouTube" />
              </a>
            </div>
          </div>
          <div className={styles.footer_bottom}>Гомель © 2024</div>
        </div>
      </footer>
    );
};
