import React, { Component } from 'react';
import { Link } from "react-router-dom";
import uploadnew from '../../assets/uploadnew-bg.jpg';

export default class NewProduct extends Component {
  render() {
    return (
      <div>
        <Link to={`/upload-items`}>
          <div className="product-item upload-new column">
            <div className="product-preview-actions">
              <figure className="product-preview-image">
                <img src={uploadnew} alt="product-image" />
              </figure>
            </div>
            <div className="product-info">
              <p className="text-header">Upload New Item</p>
              <p className="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
            </div>
          </div>
        </Link>
      </div>
    )
  }
}