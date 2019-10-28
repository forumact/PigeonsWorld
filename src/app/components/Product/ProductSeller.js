import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { getSellerInfo } from '../../Networks';

export default class ProductSeller extends Component {

  constructor(props) {
    super(props);
    this.state = {
      sellerInfo: {},
    }
  }

  render() {
    const { name, picture, uid, created } = this.state.sellerInfo;
    return (
      <div className="sidebar-item author-bio">
        <h4>Product Seller</h4>
        <hr className="line-separator" />
        <Link to={`/user/${uid}`} className="user-avatar-wrap medium">
          <figure className="user-avatar medium">
            <img src={picture} alt="" />
          </figure>
        </Link>
        <p className="text-header">{name}</p>
        <p className="text-oneline">User Since: {created}</p>
        <ul className="share-links">
          <li><a href="/" className="fb">&nbsp;</a></li>
          <li><a href="/" className="twt">&nbsp;</a></li>
          <li><a href="/" className="db">&nbsp;</a></li>
        </ul>
        <Link to={`/user/${uid}`} className="button mid dark spaced">Go to Profile Page</Link>
        <Link to={`/user/${uid}`} className="button mid dark-light">Send a Private Message</Link>
      </div>
    )
  }

  componentDidMount() {
    const payload = {
      'uid': 5,
    }
    getSellerInfo(payload).then((response) => {
      this.setState({
        sellerInfo: response.data,
      });
    });

  }

}
