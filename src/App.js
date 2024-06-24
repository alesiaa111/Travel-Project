import React from "react";
import { Header } from "./views/Header.js";
import { InfoContent } from "./views/InfoContent.js";
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
