import React, { Component } from 'react';
import SearchIcon from '../../assets/search-icon.png';
import { MyRoutes } from "../../const/routes";
import { NavLink } from 'react-router-dom';

class MainMenu extends Component {
  render() {
    return (
      <div className="main-menu-wrap">
        <div className="menu-bar">
          <nav>
            <ul className="main-menu">
              {MyRoutes.map(route => {
                if (route.menu === 'yes') {
                  return (
                    <li key={route.path} className="menu-item">
                      <NavLink exact to={route.path}>{route.title}</NavLink>
                    </li>
                  );
                } else {
                  return '';
                }
              })}
            </ul>
          </nav>
          <form className="search-form">
            <input type="text" className="rounded" name="search" id="search_products"
              placeholder="Search products here..." />
            <input type="image" src={SearchIcon} alt="search-icon" />
          </form>
        </div>
      </div>
    );
  }
}

export default MainMenu;