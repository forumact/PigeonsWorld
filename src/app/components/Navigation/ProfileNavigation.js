import React, { Component } from "react";
import { Link } from "react-router-dom";
import { userLogout } from "../../Networks";
import { withRouter } from "react-router-dom";

class ProfileNavigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
      userObject: {}
    };

    this.hoverOn = this.hoverOn.bind(this);
    this.hoverOff = this.hoverOff.bind(this);
  }

  componentDidMount() {
    const loggedin = localStorage.getItem("csrf");
    const username = localStorage.getItem("username");
    const userpic = localStorage.getItem("avatar");
    const uid = localStorage.getItem("uid");

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

  hoverOn() {
    this.setState({
      hover: true
    });
  }

  hoverOff() {
    this.setState({
      hover: false
    });
  }

  onSubmit = props => {
    userLogout().then(response => {
      localStorage.removeItem("csrf");
      localStorage.removeItem("avatar");
      localStorage.removeItem("uid");
      localStorage.removeItem("username");
      this.props.history.push("/");
      console.log("login session removed");
    });
    this.props.history.push("/");
  };

  render() {
    const { loggedin, userpic, username, uid } = this.state.userObject;
    return (
      <div className="user-board">
        {loggedin ? (
          <>
            <div
              className="user-quickview"
              onMouseEnter={this.hoverOn}
              onMouseLeave={this.hoverOff}
            >
              <div className="outer-ring">
                <div className="inner-ring"></div>
                <figure className="user-avatar">
                  <img src={userpic} alt="avatar" />
                </figure>
              </div>
              <p className="user-name">{username}</p>
              <p className="user-money">$745.00</p>
              <ul
                className={
                  this.state.hover
                    ? "dropdown small hover-effect open"
                    : "dropdown small hover-effect closed"
                }
              >
                <li className="dropdown-item">
                  <div className="dropdown-triangle"></div>
                  <Link to={`/user/${uid}`}>Profile Page</Link>
                </li>
                <li className="dropdown-item">
                  <Link to={`/user-edit`}>Account Settings</Link>
                </li>
                <li className="dropdown-item">
                  <Link to={`/upload-items`}>Upload Item</Link>
                </li>
                <li className="dropdown-item">
                  <Link to={`/manage-items`}>Manage Item</Link>
                </li>
              </ul>
            </div>
            <div className="account-information">
              <Link to={`/favourites/${uid}`}>
                <div className="account-wishlist-quickview">
                  <span className="icon-heart"></span>
                </div>
              </Link>
            </div>
          </>
        ) : (
          ""
        )}
        <div className="account-actions">
          {!loggedin ? (
            <Link to={"/login"} className="button secondary">
              Login
            </Link>
          ) : (
            <>
              <Link to={"/user-edit"} className="button primary">
                Become a Seller
              </Link>
              <button
                type="submit"
                className="button secondary"
                onClick={() => {
                  this.onSubmit(this.props);
                }}
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    );
  }
}
export default withRouter(ProfileNavigation);
