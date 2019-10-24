import React, { Component } from 'react';
import Logo from '../../assets/logo.png';
import { Link, NavLink } from "react-router-dom";
import { withRouter } from 'react-router-dom';
import { userLogout } from '../../Networks';
import { Avatar, Uid } from "../../helper";

class Header extends Component {


  render() {
    const loggedin = localStorage.getItem('csrf');

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
          <div className="user-board">
            <div className="user-quickview">
              <Link to={'/user-profile/1'}>
                <div className="outer-ring">
                  <div className="inner-ring"></div>
                  <figure className="user-avatar">
                    <img src={Avatar} alt="avatar" />
                  </figure>
                </div>
              </Link>
            </div>
            <div className="account-information">
              <Link to={`/favourites/${Uid}`}>
                <div className="account-wishlist-quickview">
                  <span className="icon-heart"></span>
                </div>
              </Link>
            </div>
            <div className="account-actions">
              {!(loggedin) ?
                <Link to={'/login'} className="button secondary">Login</Link> :
                <>
                  <Link to={'/user-edit'} className="button primary">Become a Seller</Link>
                  <button type="submit" className="button secondary" onClick={() => { this.onSubmit(this.props) }}>Logout</button>
                </>
              }
            </div>
          </div>
        </header>
      </div>
    );
  }

  onSubmit = (props) => {
    userLogout().then((response) => {
      localStorage.removeItem('csrf');
      localStorage.removeItem('avatar');
      this.props.history.push("/");
      console.log('login session removed');
    });
    this.props.history.push("/");
  }
}

export default withRouter(Header);
