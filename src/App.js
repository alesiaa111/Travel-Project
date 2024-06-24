import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Header } from "./Header.js";
import { Content } from "./Content.js";
import { Footer } from "./Footer.js";
import { Rivers } from './Rivers.js';
import { Rent } from './Rent.js';

export const App = () => {


    const router = createBrowserRouter([
      {
        path: "rivers/",
        element: <Rivers />,
      },
      {
        path: "rent/",
        element: <Rent />,
    },
    ]);
  
  
    return (
      <div>
        <Header />
        <Content />
        <Footer />
        <RouterProvider router={router} />
      </div>
    );
  };
 
