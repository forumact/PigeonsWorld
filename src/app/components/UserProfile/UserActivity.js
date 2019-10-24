import React, { Component } from 'react'

export default class UserActivity extends Component {
  render() {
    return (
      <ul className="dropdown hover-effect">
        <li className="dropdown-item active">
          <a href="author-profile.html">Profile Page</a>
        </li>
        <li className="dropdown-item">
          <a href="author-profile-items.html">Author's Items (103)</a>
        </li>
        <li className="dropdown-item">
          <a href="author-profile-messages.html">Message Board</a>
        </li>
        <li className="dropdown-item">
          <a href="author-profile-reviews.html">Customer Reviews (42)</a>
        </li>
        <li className="dropdown-item">
          <a href="author-profile-followers.html">Followers (5)</a>
        </li>
        <li className="dropdown-item">
          <a href="author-profile-following.html">Following (2)</a>
        </li>
        <li className="dropdown-item">
          <a href="author-badges.html">Author Badges (16)</a>
        </li>
      </ul>
    )
  }
}
