import React from "react";
import styles from "./index.css";
import Logo from './assets/Logo.png'


export const Header = () => {



  return (
    <div>
      <img src={Logo} alt="Logo" />
      <div>
        <h1>Организация сплавов</h1>
        <h2>
          +375(25) 655-54-05 <br />
          +375(29) 114-52-20
        </h2>
      </div>
    </div>
  );
};