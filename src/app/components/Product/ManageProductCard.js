import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { substring } from '../../helper';
import ItemNavigation from '../Navigation/ItemNavigation';

class ManageProductCard extends Component {
  render() {
    return (
      <div className="product-item column" key={this.props.product.id}>
        <div className="product-preview-actions">
          <figure className="product-preview-image">
            <img src={this.props.product.img} alt="product"/>
          </figure>
          <ItemNavigation nid={this.props.product.id}></ItemNavigation>
        </div>
        <div className="product-info">
          <a href="item-v1.html">
            <p className="text-header" title={this.props.product.title}>{this.props.product.title}</p>
          </a>
          <p className="product-description">{substring(this.props.product.body, 35, '.....')}</p>
          <a href="shop-gridview-v1.html">
            <p className="category primary">{this.props.product.website}</p>
          </a>
          <p className="price"><span>₹</span>{(this.props.product.price) ? this.props.product.price : 'NA'}</p>
        </div>
        <hr className="line-separator" />
        <div className="user-rating">
          <a href="author-profile.html">
            <figure className="user-avatar small">
              <img src={this.props.product.avatar} alt="user-avatar" />
            </figure>
          </a>
          <NavLink to={`/user/${this.props.product.uid}`}>
            <p className="text-header tiny">{this.props.product.username}</p>
          </NavLink>
        </div>
      </div>
    )
  }
}


export default ManageProductCard;