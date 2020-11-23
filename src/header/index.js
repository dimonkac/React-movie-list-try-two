import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../img/film.svg";
import { navigation } from "../navigation";
import "./header.css";

export const Header = () => {
  const renderNav = () => {
    return navigation.map(({ name, route }) => (
      <Link className="nav-link" to={route} key={route}>
        {name}
      </Link>
    ));
  };
  return (
    <div className="header">
      <Logo />
      <nav className="nav">{renderNav()}</nav>
    </div>
  );
};
