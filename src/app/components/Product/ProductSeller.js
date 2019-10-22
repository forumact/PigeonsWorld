import React, { Component } from 'react'
import Avator from "../../assets/avatar.jpg";
import { Link } from "react-router-dom";

export default class ProductSeller extends Component {
  render() {
    return (
      <div className="sidebar-item author-bio">
        <h4>Product Seller</h4>
        <hr className="line-separator" />
        <a href="user-profile.html" className="user-avatar-wrap medium">
          <figure className="user-avatar medium">
            <img src={Avator} alt="" />
          </figure>
        </a>
        <p className="text-header">Kratos Cave</p>
        <p className="text-oneline">Lorem ipsum dolor sit amet,<br />consectetur sicing elit.</p>
        <ul className="share-links">
          <li><a href="/" className="fb"></a></li>
          <li><a href="/" className="twt"></a></li>
          <li><a href="/" className="db"></a></li>
        </ul>
        <Link to={`/user-profile/${this.props.product.uid}`} className="button mid dark spaced">Go to Profile Page</Link>
        <a href="/" className="button mid dark-light">Send a Private Message</a>
      </div>
    )
  }
}
