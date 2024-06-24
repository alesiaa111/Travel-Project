import React from "react";
import { Header } from "./views/header/Header.js";
import { InfoContent } from "./views/info-content/InfoContent.js";
import { Footer } from "./views/Footer.js";

export const App = () => {
  return (
    <div>
      <Header />
      <InfoContent/>
      <Footer/>
    </div>
  );
};
