import React from "react";
import { Router } from "./router";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getTourServices, addServicesData } from "./store/async-action";


export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addServicesData());
    dispatch(getTourServices());
  }, [dispatch]);

  return <Router />;
};
