import React, { Component } from 'react'

export default class AuthorBio extends Component {
  render() {
    return (
      <div className="sidebar-item author-bio">
        <a href="user-profile.html" className="user-avatar-wrap medium">
          <figure className="user-avatar medium">
            <img src="images/avatars/avatar_09.jpg" alt="" />
          </figure>
        </a>
        <p className="text-header">Odin_Design</p>
        <p className="text-oneline">Super Samurai Developers<br />Los Angeles, Usa</p>
        <ul className="share-links">
          <li><a href="#" className="fb"></a></li>
          <li><a href="#" className="twt"></a></li>
          <li><a href="#" className="db"></a></li>
        </ul>
        <a href="#" className="button mid dark spaced">Add to <span className="primary">Followers</span></a>
        <a href="#" className="button mid dark-light">Send a Private Message</a>
      </div>
    )
  }
}
