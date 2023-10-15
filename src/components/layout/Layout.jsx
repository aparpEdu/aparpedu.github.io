import { Outlet } from "react-router-dom";

import React from "react";
import "./layout-style.css"
import Header from "../header/Header";
import Background from "../background/Background";

const Layout = () => {
    return (
        <div className="layout-container">
            <Background />
            <Header />

            <Outlet />
        </div>

    );
};

export default Layout;
