import React from "react";
import { NavLink } from "react-router-dom";
import { substring } from "../../helper";
import AddNavigation from "../Navigation/AddNavigation";

export default function ManageProductCard(props) {
  return (
    <div className="product-item column" key={props.product.nid}>
      <div className="product-preview-actions">
        <figure className="product-preview-image">
          <img id="product-src" src={props.product.img[0]} alt="product" />
        </figure>
        <AddNavigation nid={props.product.nid}></AddNavigation>
      </div>
      <div className="product-info">
        <NavLink to={`/products/${props.product.nid}`}>
          <p className="text-header" title={props.product.title}>
            {props.product.title}
          </p>
        </NavLink>
        <p className="product-description">
          {substring(props.product.body, 35, ".....")}
        </p>
        <a href="shop-gridview-v1.html">
          <p className="category primary">{props.product.category}</p>
        </a>
        <p className="price">
          <span>₹</span>
          {props.product.price ? props.product.price : "NA"}
        </p>
      </div>
      <hr className="line-separator" />
      <div className="user-rating">
        <NavLink to={`/user/${props.product.uid}`}>
          <figure className="user-avatar small">
            <img src={props.product.avatar} alt="user-avatar" />
          </figure>
        </NavLink>
        <NavLink to={`/user/${props.product.uid}`}>
          <p className="text-header tiny">{props.product.username}</p>
        </NavLink>
      </div>
    </div>
  );
}
