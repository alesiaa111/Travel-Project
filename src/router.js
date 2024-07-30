import React from "react";
import {Routes, Route} from 'react-router-dom';
import { Rent } from "./views/rent";
import { ListTourService } from "./components/list-tour-service";
import { Layout } from "./views/layout";
import { NotFound } from "./views/not-found";
import { Rivers} from "./views/rivers/index";
import { Total } from "./views/total/index"





export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Total/>}/>
                <Route path='/service' element={<ListTourService />}/>
                <Route path='/total' element={<Total/>}/>
                <Route path='/rent' element={<Rent />}/>
                <Route path='/rivers' element={<Rivers />}/>
                <Route path="*" element={<NotFound />}/>
            </Route>
        </Routes>
    );
};
