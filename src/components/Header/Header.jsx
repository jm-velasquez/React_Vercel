import React from "react";
import { NavLink } from "react-router-dom";

import "../../styles/Components/Header.scss";
export default function Header() {
  return (
    <div className="header">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/profile">Profile</NavLink>
    </div>
  );
}
