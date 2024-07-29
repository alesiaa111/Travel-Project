import React from "react";
import { Router } from "./router";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getTourServices } from "./store/async-action";

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTourServices());
  }, []);

  return <Router />;
};
