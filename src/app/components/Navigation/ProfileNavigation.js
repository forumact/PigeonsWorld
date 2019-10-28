import React, { Component } from 'react';
import { Link, NavLink } from "react-router-dom";
import { Avatar, Uid } from "../../helper";
import { userLogout } from '../../Networks';
import { withRouter } from 'react-router-dom';

class ProfileNavigation extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hover: false
    }

    this.hoverOn = this.hoverOn.bind(this);
    this.hoverOff = this.hoverOff.bind(this);
  }

  hoverOn() {
    console.log(1);
    this.setState({
      hover: true
    })
  }

  hoverOff() {
    console.log(2);
    this.setState({
      hover: false
    })
  }

  onSubmit = (props) => {
    userLogout().then((response) => {
      localStorage.removeItem('csrf');
      localStorage.removeItem('avatar');
      localStorage.removeItem('uid');
      localStorage.removeItem('username');
      this.props.history.push("/");
      console.log('login session removed');
    });
    this.props.history.push("/");
  }

  render() {
    const loggedin = localStorage.getItem('csrf');
    const username = localStorage.getItem('username');

    return (
      <div className="user-board">
        {(loggedin) ?
          <>
            <div className="user-quickview" onMouseEnter={this.hoverOn}
              onMouseLeave={this.hoverOff}>
              <Link to={`/user/${Uid}`}>
                <div className="outer-ring">
                  <div className="inner-ring"></div>
                  <figure className="user-avatar">
                    <img src={Avatar} alt="avatar" />
                  </figure>
                </div>
              </Link>
              <p className="user-name" >{username}</p>
              <p className="user-money">$745.00</p>
              <ul className={this.state.hover ? "dropdown small hover-effect open" : "dropdown small hover-effect closed"}>
                <li className="dropdown-item">
                  <div className="dropdown-triangle"></div>
                  <a href="author-profile.html">Profile Page</a>
                </li>
                <li className="dropdown-item">
                  <a href="dashboard-settings.html">Account Settings</a>
                </li>
                <li className="dropdown-item">
                  <a href="dashboard-purchases.html">Your Purchases</a>
                </li>
                <li className="dropdown-item">
                  <a href="dashboard-statement.html">Sales Statement</a>
                </li>
                <li className="dropdown-item">
                  <a href="dashboard-buycredits.html">Buy Credits</a>
                </li>
                <li className="dropdown-item">
                  <a href="dashboard-withdrawals.html">Withdrawals</a>
                </li>
                <li className="dropdown-item">
                  <a href="dashboard-uploaditem.html">Upload Item</a>
                </li>
                <li className="dropdown-item">
                  <a href="dashboard-manageitems.html">Manage Items</a>
                </li>
              </ul>
            </div>
            <div className="account-information">
              <Link to={`/favourites/${Uid}`}>
                <div className="account-wishlist-quickview">
                  <span className="icon-heart"></span>
                </div>
              </Link>
            </div>
          </>
          : ''
        }
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
    )
  }
}
export default  withRouter(ProfileNavigation);