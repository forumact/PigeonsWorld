import React, { Component } from 'react';
import { getSellerInfo } from '../../Networks';

export default class AuthorBio extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userBio: {},
    }
  }

  render() {
    console.log(this.state.userBio);
    return (
      <div className="sidebar-item author-bio">
        <a href="user-profile.html" className="user-avatar-wrap medium">
          <figure className="user-avatar medium">
            <img src={this.state.userBio.picture} alt="" />
          </figure>
        </a>
        <p className="text-header">{this.state.userBio.name}</p>
        <p className="text-oneline">Super Samurai Developers<br />Los Angeles, Usa</p>
        <ul className="share-links">
          <li><a href="/" className="fb">&nbsp;</a></li>
          <li><a href="/" className="twt">&nbsp;</a></li>
          <li><a href="/" className="db">&nbsp;</a></li>
        </ul>
        <a href="/" className="button mid dark spaced">Add to <span className="primary">Followers</span></a>
        <a href="/" className="button mid dark-light">Send a Private Message</a>
      </div>
    )
  }

  componentDidMount() {
    getSellerInfo(this.props).then((response) => {
      this.setState({
        userBio: response.data,
      });
    });

  }

}
