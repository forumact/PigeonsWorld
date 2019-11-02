import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { substring, IndianRupee } from "../../helper";
import ProductImage from "../../assets/joystick_m.jpg";
import Flag from "./Flag";

class ProductCard extends Component {
  render() {
    let img = this.props.product.img ? this.props.product.img : ProductImage;
    return (
      <div className="product-item column">
        <div className="product-preview-actions">
          <figure className="product-preview-image">
            <img src={img} alt="product" />
          </figure>
          <div className="preview-actions">
            <div className="preview-action">
              <NavLink exact to={`/products/${this.props.product.nid}`}>
                <div className="circle tiny primary">
                  <span className="icon-tag"></span>
                </div>
              </NavLink>
              <NavLink exact to={`/products/${this.props.product.nid}`}>
                <p>Go to Item</p>
              </NavLink>
            </div>
            <Flag
              nid={this.props.product.nid}
              flag={this.props.product.flag}
            ></Flag>
          </div>
        </div>
        <div className="product-info">
          <NavLink exact to={`/products/${this.props.product.nid}`}>
            <p className="text-header" title={this.props.product.title}>
              {substring(this.props.product.title, 18, ".....")}
            </p>
          </NavLink>
          <p>&nbsp;</p>
          {/* <p className="product-description">{substring(this.props.product.body, 10, '.....')}</p> */}
          <NavLink exact to={`/products/${this.props.product.nid}`}>
            <p className="category tertiary">{this.props.product.category}</p>
          </NavLink>
          <p className="price">
            <span>{IndianRupee}</span>
            {this.props.product.price ? this.props.product.price : "NA"}
          </p>
        </div>
        <hr className="line-separator" />
        <div className="user-rating">
          <NavLink to={`/user/${this.props.product.uid}`}>
            <figure className="user-avatar small">
              <img src={this.props.product.avatar} alt="user-avatar" />
            </figure>
          </NavLink>
          <NavLink to={`/user/${this.props.product.uid}`}>
            <p className="text-header tiny">{this.props.product.username}</p>
          </NavLink>
        </div>
      </div>
    );
  }
}

export default ProductCard;
