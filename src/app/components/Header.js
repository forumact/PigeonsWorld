import React, {Component} from 'react';
import Logo from '../assets/logo.png';
import Avatar from '../assets/avatar.jpg';
import {Link, NavLink} from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <div className="header-wrap">
                <header>
                    <NavLink exact to="/">
                        <figure className="logo">
                            <img src={Logo} alt="logo"/>
                        </figure>
                    </NavLink>
                    <div className="mobile-menu-handler left primary">
                        <img src="./Emerald Dragon _ Home_files/pull-icon.png" alt="pull-icon"/>
                    </div>
                    <a href="http://odindesign-themes.com/emerald-dragon/index.html">
                        <figure className="logo-mobile">
                            <img src="./Emerald Dragon _ Home_files/logo_mobile.png" alt="logo-mobile"/>
                        </figure>
                    </a>
                    <div className="mobile-account-options-handler right secondary">
                        <span className="icon-user"></span>
                    </div>
                    <div className="user-board">
                        <div className="user-quickview">
                            <a href="http://odindesign-themes.com/emerald-dragon/author-profile.html">
                                <div className="outer-ring">
                                    <div className="inner-ring"></div>
                                    <figure className="user-avatar">
                                        <img src={Avatar} alt="avatar"/>
                                    </figure>
                                </div>
                            </a>
                        </div>
                        <div className="account-information">
                            <Link to={'/your-favourites'}>
                                <div className="account-wishlist-quickview">
                                    <span className="icon-heart"></span>
                                </div>
                            </Link>
                        </div>
                        <div className="account-actions">
                            {/* <a href="http://odindesign-themes.com/emerald-dragon/index.html#"
                               className="button primary">Become a Seller</a> */}
                            <Link to={'/user-edit'} className="button primary">Become a Seller</Link>
                            <a href="http://odindesign-themes.com/emerald-dragon/index.html#"
                               className="button secondary">Logout</a>
                        </div>
                    </div>
                </header>
            </div>
        );
    }
}

export default Header;