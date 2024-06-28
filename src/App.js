import React from "react";
import { Header } from "./components/header";
import { Content } from "./components/content";
import { Footer } from "./components/footer/Footer";
import { Form } from "./components/form";
import styles from "./index.css";

export const App = () => {
  

  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  );
};
