import React from "react";
import logoImg from '../../images/Logo.png';
import styles from "./index.module.css";
import { Instagram, YouTube } from "@mui/icons-material";

// TODO: все require поменять на import


export const Footer = () => {
    return (
      <footer>
        <div className={styles.footer_wrapper}>
          <div className={styles.logo_end}>
            <img src={logoImg} alt="Сплавы в Гомеле" />
          </div>
          <div className={styles.contact}>
            <p>ИП Давыдов А.В.</p>
            <p>УНП 491683235</p>
            <p>Life +375(25) 655-54-05</p>
            <p> A1 +375(29) 114-52-20</p>
          </div>
          <div className={styles.footer_favicon}>
            <div className={styles.favicon}> 
              <a href="https://instagram.com/avantyuristy.by?utm_source=qr&igshid=MzNlNGNkZWQ4Mg==">
                <Instagram  htmlColor="#000000"/>
              </a>
            </div>
            <div className={styles.favicon}>
              <a href="https://www.youtube.com/@avantyuristy.by1234">
                <YouTube  htmlColor="#000000"/>
              </a>
            </div>
          </div>
          <div className={styles.footer_bottom}>Гомель © 2024</div>
        </div>
      </footer>
    );
};
