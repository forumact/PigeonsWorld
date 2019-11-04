import React, { Component } from "react";
import { IndianRupee } from "../../helper";

export default class AuthorsItem extends Component {
  render() {
    return (
      <div className="sidebar-item author-items">
        <h4>More Author's Items</h4>
        <div className="product-list grid column4-wrap">
          <div className="product-item column">
            <span className="pin featured">Featured</span>
            <div className="product-preview-actions">
              <figure className="product-preview-image">
                <img src={this.props.product.img} alt="product-image" />
              </figure>
              <div className="preview-actions">
                <div className="preview-action">
                  <a href="item-v1.html">
                    <div className="circle tiny primary">
                      <span className="icon-tag"></span>
                    </div>
                  </a>
                  <a href="item-v1.html">
                    <p>Go to Item</p>
                  </a>
                </div>
                <div className="preview-action">
                  <a href="#">
                    <div className="circle tiny secondary">
                      <span className="icon-heart"></span>
                    </div>
                  </a>
                  <a href="#">
                    <p>Favourites +</p>
                  </a>
                </div>
              </div>
            </div>
            <div className="product-info">
              <a href="item-v1.html">
                <p className="text-header">{this.props.product.title}</p>
              </a>
              <p className="product-description">Lorem ipsum dolor sit urarde...</p>
              <a href="shop-gridview-v1.html">
                <p className="category primary">{this.props.product.category}</p>
              </a>
              <p className="price">
                <span>{IndianRupee}</span>12
              </p>
            </div>
            <hr className="line-separator" />
            <div className="user-rating">
              <a href="author-profile.html">
                <figure className="user-avatar small">
                  <img src="images/avatars/avatar_09.jpg" alt="user-avatar" />
                </figure>
              </a>
              <a href="author-profile.html">
                <p className="text-header tiny">Odin_Design</p>
              </a>
            </div>
          </div>
        </div>
        <div className="clearfix"></div>
      </div>
    );
  }
}
