import { Outlet } from "react-router-dom";

import React from "react";
import "./layout-style.css"
import Header from "../header/Header";
import Background from "../background/Background";
import NavBar from "../navbar/Nav-Bar";

const Layout = () => {
    return (
        <div className="layout-container">
            <Background />
            <Header />
            <NavBar/>

            <Outlet />
        </div>

    );
};

export default Layout;
