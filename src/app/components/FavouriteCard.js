import React, {Component} from 'react';
import avatar from '../assets/avatar.jpg';

class FavouriteCard extends Component {
    render() {
        return (
            <div className="product-item">
                <a href="item-v1.html">
                    <figure className="product-preview-image small">
                        <img src={avatar} alt="product"/>
                    </figure>
                </a>
                <div className="product-info">
                    <a href="item-v1.html">
                        <p className="text-header">Westeros Custom Clothing</p>
                    </a>
                    <p className="product-description">Lorem ipsum dolor sit urarde...</p>
                    <a href="shop-gridview-v1.html">
                        <p className="category primary">PSD Templates</p>
                    </a>
                </div>
                <div className="author-data">
                    <div className="user-rating">
                        <a href="author-profile.html">
                            <figure className="user-avatar small">
                                <img src={avatar} alt="user-avatar"/>
                            </figure>
                        </a>
                        <a href="author-profile.html">
                            <p className="text-header tiny">Johnny Fisher</p>
                        </a>
                    </div>
                    <div className="metadata">
                        <div className="meta-item">
                            <span className="icon-bubble"></span>
                            <p>12</p>
                        </div>
                        <div className="meta-item">
                            <span className="icon-eye"></span>
                            <p>210</p>
                        </div>
                        <div className="meta-item">
                            <span className="icon-heart"></span>
                            <p>105</p>
                        </div>
                    </div>
                </div>
                <div className="item-metadata">
                    <p className="text-header tiny">Files Included: <span>Psd, Ai, Jpeg, Png</span>
                    </p>
                    <p className="text-header tiny">Dimensions: <span>4x6 Inches (with 0,25 bleed)</span>
                    </p>
                    <p className="text-header tiny">
                        Tags:
                        <span>
                            <a href="/">custom</a>,
                            <a href="/">clothing</a>,
                            <a href="/">monsters</a>,
                            <a href="/">photoshop</a>, ...
                        </span>
                    </p>
                </div>
                <div className="author-data-reputation">
                    <p className="text-header tiny">Reputation</p>
                </div>
                <div className="item-actions">
                    <a href="/" className="tooltip" title="Add to Favourites">
                        <div className="circle tiny">
                            <span className="icon-heart"></span>
                        </div>
                    </a>
                </div>
                <div className="price-info">
                    <p className="price medium"><span>$</span>14</p>
                </div>
            </div>
        );
    }
}

export default FavouriteCard;