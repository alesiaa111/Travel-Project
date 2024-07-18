import React from "react";
import {Routes, Route} from 'react-router-dom';
import { Header } from "./components/header";
import { Rent } from "./views/rent";
import { ListTourService } from "./components/list-tour-service";
import { Layout } from "./views/layout";
import { NotFound } from "./views/not-found";
import { Rivers} from "./views/rivers/rivers";





export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<ListTourService />}/>
                <Route path='/service' element={<ListTourService />}/>
                <Route path='/header' element={<Header />}/>
                <Route path='/rent' element={<Rent />}/>
                <Route path='/rivers' element={<Rivers />}/>
                <Route path="*" element={<NotFound />}/>
            </Route>
        </Routes>
    );
};
