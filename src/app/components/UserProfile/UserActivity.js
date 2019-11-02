import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class UserActivity extends Component {
  render() {
    return (
      <ul className="dropdown hover-effect">
        <li className="dropdown-item">
          <NavLink to={`/user/${this.props.uid}`}>Profile Page</NavLink>
        </li>
        <li className="dropdown-item">
          <NavLink to={`/user/${this.props.uid}/items`}>Author's Items</NavLink>
        </li>
        <li className="dropdown-item" onClick={e => e.preventDefault()}>
          <NavLink to={`/user/${this.props.uid}/message`}>Message Board</NavLink>          
        </li>
        <li className="dropdown-item" onClick={e => e.preventDefault()}>
          <a href="author-profile-reviews.html">Customer Reviews (42)</a>
        </li>
        <li className="dropdown-item" onClick={e => e.preventDefault()}>
          <a href="author-profile-followers.html">Followers (5)</a>
        </li>
        <li className="dropdown-item" onClick={e => e.preventDefault()}>
          <a href="author-profile-following.html">Following (2)</a>
        </li>
        <li className="dropdown-item" onClick={e => e.preventDefault()}>
          <a href="author-badges.html">Author Badges (16)</a>
        </li>
      </ul>
    );
  }
}

export default UserActivity;
