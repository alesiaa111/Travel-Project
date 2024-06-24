import React from "react";
import { Header } from "./views/header/Header.js";
import { InfoContent } from "./views/info-content/InfoContent.js";
import { Footer } from "./views/Footer.js";
// import { Button } from '.components/button/Buton.js'

export const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Rivers/>,
    },
    {
      path: "product/:productId",
      element: <Rent/>,
  },
  ]);



  return (
    <div className={appContainer}>
      <Header />
      <InfoContent/>
      <Footer/>
      <RouterProvider router={router} />
    </div>
  );
};
