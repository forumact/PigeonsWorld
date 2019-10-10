import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import ProductImage from "../assets/joystick_m.jpg";
import Avator from "../assets/avatar.jpg";

class ProductCard extends Component {
    render() {
        return (
            <div className="product-item column">
                <div className="product-preview-actions">
                    <figure className="product-preview-image">
                        <img src={ProductImage} alt="product"/>
                    </figure>
                    <div className="preview-actions">
                        <div className="preview-action">
                            <NavLink exact to="/product-details/1">
                                <div className="circle tiny primary">
                                    <span className="icon-tag"></span>
                                </div>
                            </NavLink>
                            <NavLink exact to="/product-details/1">
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
                    <NavLink exact to="/product-details/1">
                        <p className="text-header">PX4 Crimson Joystick (Used)</p>
                    </NavLink>
                    <p className="product-description">Lorem ipsum dolor sit urarde...</p>
                    <a href="products.html">
                        <p className="category tertiary">Accesories</p>
                    </a>
                    <p className="price"><span>$</span>24</p>
                </div>
                <hr className="line-separator" />
                <div className="user-rating">
                    <a href="author-profile.html">
                        <figure className="user-avatar small">
                            <img src={Avator} alt="user-avatar"/>
                        </figure>
                    </a>
                    <a href="author-profile.html">
                        <p className="text-header tiny">Kratos Cave</p>
                    </a>
                </div>
            </div>
        );
    }
}

export default ProductCard;