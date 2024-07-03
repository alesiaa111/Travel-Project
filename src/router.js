import React from "react";
import {Routes, Route} from 'react-router-dom';
import { Header } from "./components/header";
import { Rent } from "./components/rent";
import { Service } from "./components/service";
import { Layout } from "./views/layout";
import { NotFound } from "./views/not-found";
import { Not } from "./views/not";




export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Service />}/>
                <Route path='/service' element={<Service />}/>
                <Route path='/header' element={<Header />}/>
                <Route path='/rent' element={<Rent />}/>
                <Route path='/not' element={<Not/>}/>
                <Route path="*" element={<NotFound />}/>
            </Route>
        </Routes>
    );
};
