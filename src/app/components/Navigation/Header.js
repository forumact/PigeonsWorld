import React, { Component } from 'react';
import Logo from '../../assets/logo.png';
import { Link, NavLink } from "react-router-dom";
import ProfileNavigation from './ProfileNavigation';

class Header extends Component {

  render() {
    const loggedin = localStorage.getItem('csrf');
    const username = localStorage.getItem('username');

    return (
      <div className="header-wrap">
        <header>
          <NavLink exact to="/">
            <figure className="logo">
              <img src={Logo} alt="logo" />
            </figure>
          </NavLink>
          <div className="mobile-menu-handler left primary">
            <img src="./Emerald Dragon _ Home_files/pull-icon.png" alt="pull-icon" />
          </div>
          <a href="http://odindesign-themes.com/emerald-dragon/index.html">
            <figure className="logo-mobile">
              <img src="./Emerald Dragon _ Home_files/logo_mobile.png" alt="logo-mobile" />
            </figure>
          </a>
          <div className="mobile-account-options-handler right secondary">
            <span className="icon-user"></span>
          </div>
          <ProfileNavigation></ProfileNavigation>
        </header>
      </div>
    );
  }


}

export default Header;
