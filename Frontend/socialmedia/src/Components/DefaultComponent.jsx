import React from "react";
import { NavLink } from "react-router-dom";

const DefaultComponent = () => {
    return (
        <nav className="navbar">
            <NavLink to="/Login" className="nav-link">Login</NavLink>
        </nav>
    );
};

export default DefaultComponent;
