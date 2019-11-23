import React, { Component, Fragment } from "react";
import Logo from "../../../assets/logo.png";
import { NavLink } from "react-router-dom";
import ProfileNavigation from "./ProfileNavigation";
import PullIcon from "../../../assets/pull-icon.png";
import mobileLogo from "../../../assets/logo_mobile.png";
import MobileNavigation from "./MobileNavigation";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: "closed"
    };

    this.handleShowHide = this.handleShowHide.bind(this);
  }

  handleShowHide(flag) {
    console.log("1", flag);
    this.setState({ showMenu: flag });

    if (flag == "open") {
      var element = document.getElementById("shadow-film");
      element.classList.remove("closed");
      element.classList.add("open");
    } else {
      var element = document.getElementById("shadow-film");
      element.classList.remove("open");
      element.classList.add("closed");
    }
  }

  render() {
    return (
      <Fragment>
        <div className="header-wrap">
          <header>
            <NavLink exact to="/">
              <figure className="logo">
                <img src={Logo} alt="logo" />
              </figure>
            </NavLink>
            <div
              className="mobile-menu-handler left primary"
              onClick={() => this.handleShowHide("open")}
            >
              <img src={PullIcon} alt="pull-icon" />
            </div>
            <NavLink exact to="/">
              <figure className="logo-mobile">
                <img src={mobileLogo} alt="logo-mobile" />
              </figure>
            </NavLink>
            <div className="mobile-account-options-handler right secondary">
              <span className="icon-user"></span>
            </div>
            <ProfileNavigation></ProfileNavigation>
          </header>
        </div>
        <MobileNavigation
          showMenu={this.state.showMenu}
          handler={this.handleShowHide}
        ></MobileNavigation>
      </Fragment>
    );
  }
}

export default Header;
