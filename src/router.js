import React from "react";
import { Routes, Route } from "react-router-dom";
import { Rent } from "./views/rent";
import { ListTourService } from "./components/list-tour-service";
import { Layout } from "./views/layout";
import { NotFound } from "./views/not-found";
import { Rivers } from "./views/rivers/index";
import { Total } from "./views/total/index";
import { AdminLoginForm } from "./views/admin-login-form/index";
import { UserList } from "./views/user-list/index";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Total />} />
        <Route path="/service" element={<ListTourService />} />
        <Route path="/total" element={<Total />} />
        <Route path="/rent" element={<Rent />} />
        <Route path="/rivers" element={<Rivers />} />
        <Route
          path="/user-list/ceqruty/admin/***secret***/router"
          element={<UserList />}
        />
        <Route path="/admin" element={<AdminLoginForm />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
