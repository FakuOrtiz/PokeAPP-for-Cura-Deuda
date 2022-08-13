import React from "react";
import "./BurgerMenu.css";
import { NavLink } from "react-router-dom";

const burgerMenu = () => {
  return (
    <div>
      <input id="menu__toggle" type="checkbox" />
      <label className="menu__btn" htmlFor="menu__toggle">
        <span></span>
      </label>
      <ul className="menu__box">
        <NavLink to="/" className="menu__item">
          <li className="menu__item">Home</li>
        </NavLink>
        <NavLink to="/aboutMe" className="menu__item">
          <li className="menu__item">About me</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default burgerMenu;
