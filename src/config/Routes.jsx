import React from "react";
import { Route, Routes } from "react-router-dom";
import Catelog from "../pages/Catelog";
import Home from "../pages/Home";
import Detail from "../pages/detail/Detail";

const routes = [
    {
        path: "/:category/search/:keyword",
        element: <Catelog />
    },
    {
        path: "/:category/:id",
        element: <Detail />
    },
    {
        path: "/:category",
        element: <Catelog />
    },
    {
        path: "/",
        element: <Home />
    }
];
export default routes;
