import React, { Component, Fragment } from "react";
import { MyRoutes } from "../../Routes/routes";
import { NavLink, withRouter, Link } from "react-router-dom";
import { userLogout } from "../../Networks";
import { fetuesrobject } from "../../helper";

class MobileProfileNavigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: "",
      userObject: {}
    };

    this.handleShow = this.handleShowHide.bind(this);
  }
  handleShowHide(flag) {
    //this.setState({ showMenu: "closed" });
    this.props.handler("closed");
  }

  onSubmit = props => {
    userLogout().then(response => {
      localStorage.removeItem("userObject");
      this.props.history.push("/");
      console.log("login session removed");
    });
    this.setState({
      userObject: {}
    });
    this.props.history.push("/");
  };

  componentDidMount() {
    const loggedin = fetuesrobject("csrf_token");
    const username = fetuesrobject("name");
    const userpic = fetuesrobject("user_pic");
    const uid = fetuesrobject("uid");

    let user = {
      username: username,
      loggedin: loggedin,
      userpic: userpic,
      uid: uid
    };
    this.setState({
      userObject: user
    });
  }

  render() {
    const { loggedin, userpic, username, uid } = this.state.userObject;
    return (
      <div
        id="account-options-menu"
        className={
          "side-menu right " +
          (this.state.showProfile ? `closed` : this.props.showProfile)
        }
      >
        <div className="svg-plus" onClick={() => this.handleShowHide("closed")}>
          x
        </div>
        {loggedin ? (
          <Fragment>
            <div className="side-menu-header">
              <div className="user-quickview">
                <a href="author-profile.html">
                  <div className="outer-ring">
                    <div className="inner-ring"></div>
                    <figure className="user-avatar">
                      <img src={userpic} alt="avatar" />
                    </figure>
                  </div>
                </a>
                <p className="user-name">{username}</p>
                <p className="user-money">$745.00</p>
              </div>
            </div>
            <p className="side-menu-title">Your Account</p>
            <ul className="dropdown dark hover-effect">
              {MyRoutes.map(route => {
                if (route.profilenav === "yes") {
                  return (
                    <li key={route.path} className="dropdown-item">
                      <NavLink exact to={route.path}>
                        {route.title}
                      </NavLink>
                    </li>
                  );
                } else {
                  return "";
                }
              })}
            </ul>
            <button
              type="submit"
              className="button secondary"
              onClick={() => {
                this.onSubmit(this.props);
              }}
            >
              Logout
            </button>
          </Fragment>
        ) : (
          <Link
            to={"/login"}
            className="button secondary"
            onClick={() => this.handleShowHide("closed")}
          >
            Login
          </Link>
        )}
      </div>
    );
  }
}

export default withRouter(MobileProfileNavigation);
