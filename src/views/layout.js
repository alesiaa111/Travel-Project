import React from "react";
import { Menu } from "../components/menu";
import { Footer } from "./footer";
import { Outlet } from "react-router-dom";




export const Layout = () => {
    return (
        <div>
            <Menu/>
            <Outlet/>
            <Footer/>
        </div>
    );
};