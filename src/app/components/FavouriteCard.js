import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { substring } from '../helper';

class FavouriteCard extends Component {
  render() {
    return (
      <div className="product-item">
        <Link to={`/products/${this.props.fav.nid}`}>
          <figure className="product-preview-image small">
            <img src={this.props.fav.img} alt="product" />
          </figure>
        </Link>
        <div className="product-info">
          <Link to={`/products/${this.props.fav.nid}`}>
            <p className="text-header">{this.props.fav.title}</p>
          </Link>
          <p className="product-description">{substring(this.props.fav.body, 15, '.....')}</p>
          <a href="shop-gridview-v1.html">
            <p className="category primary">PSD Templates</p>
          </a>
        </div>
        <div className="author-data">
          <div className="user-rating">
            <Link to={`/user-profile/${this.props.fav.uid}`}>
              <figure className="user-avatar small">
                <img src={this.props.fav.avatar} alt="user-avatar" />
              </figure>
            </Link>
            <Link to={`/user-profile/${this.props.fav.uid}`}>
              <p className="text-header tiny">{this.props.fav.uname}</p>
            </Link>
          </div>
          <div className="metadata">
            <div className="meta-item">
              <span className="icon-bubble"></span>
              <p>{this.props.fav.comment_count}</p>
            </div>
            <div className="meta-item">
              <span className="icon-eye"></span>
              <p>210</p>
            </div>
            <div className="meta-item">
              <span className="icon-heart"></span>
              <p>{this.props.fav.flag_count.favourites}</p>
            </div>
          </div>
        </div>
        <div className="item-metadata">
          <p className="text-header tiny">Files Included: <span>Psd, Ai, Jpeg, Png</span>
          </p>
          <p className="text-header tiny">Dimensions: <span>4x6 Inches (with 0,25 bleed)</span>
          </p>
          {/* <p className="text-header tiny">
                        Tags:
                        <span>
                            <a href="/">custom</a>,
                            <a href="/">clothing</a>,
                            <a href="/">monsters</a>,
                            <a href="/">photoshop</a>, ...
                        </span>
                    </p> */}
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