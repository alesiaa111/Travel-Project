import React from "react";
import Logo from './assets/Logo.png'


export const Header = () => {

  return (
    <div>
      <img src={Logo} alt="Logo" />
      <div>
        <h1>Организация сплавов</h1>
        <h2>
          +375(89) 668-54-05 <br />
          +375(55) 664-58-25
        </h2>
      </div>
    </div>
  );
};