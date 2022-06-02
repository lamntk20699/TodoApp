import React from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="topnav">
            <NavLink to="/login" activeClassName="active" >Login</NavLink>
            <NavLink to="/todos" activeClassName="active">Todos</NavLink>
            <NavLink to="/" activeClassName="active" exact={true}>Home</NavLink>
        </div>
    )
}

export default NavBar;