import React from "react";
import {Routes, Route} from 'react-router-dom';
import { Header } from "./components/header";
import { Rent } from "./components/rent";
import { Service } from "./components/service";
import { Layout } from "./views/layout";
import { NotFound } from "./views/not-found";




export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<Service/>}/>
                {/* <Route path="/posts/*" element={<Posts/>}/> */}
                <Route path='/service' element={<Service/>}/>
                <Route path='/header' element={<Header/>}/>
                <Route path='/rent' element={<Rent/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Route>
        </Routes>
    );
};
