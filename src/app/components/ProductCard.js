import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import ProductImage from "../assets/joystick_m.jpg";
import Avator from "../assets/avatar.jpg";

class ProductCard extends Component {
    constructor(props) {
        super(props);
        //console.log(props)
    }
    render() {
        return (
            <div className="product-item column">
                <div className="product-preview-actions">
                    <figure className="product-preview-image">
                        <img src={ProductImage} alt="product" />
                    </figure>
                    <div className="preview-actions">
                        <div className="preview-action">
                            <NavLink exact to={`/product-details/${this.props.product.id}`}>
                                <div className="circle tiny primary">
                                    <span className="icon-tag"></span>
                                </div>
                            </NavLink>
                            <NavLink exact to={`/product-details/${this.props.product.id}`}>
                                <p>Go to Item</p>
                            </NavLink>
                        </div>
                        <div className="preview-action">
                            <a href="/">
                                <div className="circle tiny secondary">
                                    <span className="icon-heart"></span>
                                </div>
                            </a>
                            <a href="/">
                                <p>Favourites +</p>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="product-info">
                    <NavLink exact to={`/product-details/${this.props.product.id}`}>
                        <p className="text-header">{this.props.product.name}</p>
                    </NavLink>
                    <p className="product-description">{this.props.product.phone}</p>
                    <a href="products.html">
                        <p className="category tertiary">{this.props.product.website}</p>
                    </a>
                    <p className="price"><span>$</span>{this.props.product.id * 5}</p>
                </div>
                <hr className="line-separator" />
                <div className="user-rating">
                    <a href="author-profile.html">
                        <figure className="user-avatar small">
                            <img src={Avator} alt="user-avatar" />
                        </figure>
                    </a>
                    <NavLink to={`/user-profile`}>
                        <p className="text-header tiny">{this.props.product.username}</p>
                    </NavLink>
                </div>
            </div>
        );
    }
}

export default ProductCard;