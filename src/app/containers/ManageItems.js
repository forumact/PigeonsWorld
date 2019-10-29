import React, { Component } from 'react';
import FileUpload from '../components/FileUpload';
import uploadnew from '../assets/uploadnew-bg.jpg';
import ItemNavigation from '../components/Navigation/ItemNavigation';
import { Link } from "react-router-dom";

class ManageItems extends Component {
  render() {
    return (
      <div className="dashboard-content">
        <div className="headline buttons primary">
          <h4>Manage Items</h4>
        </div>
       <div className="product-list grid column4-wrap">
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
        <div className="product-item column">
          <div className="product-preview-actions">
            <figure className="product-preview-image">
              <img src="images/items/westeros_m.jpg" alt="product-image" />
            </figure>
           <ItemNavigation></ItemNavigation>
          </div>
          <div className="product-info">
            <a href="item-v1.html">
              <p className="text-header">Westeros Custom Clothing</p>
            </a>
            <p className="product-description">Lorem ipsum dolor sit urarde...</p>
            <a href="shop-gridview-v1.html">
              <p className="category primary">PSD Templates</p>
            </a>
            <p className="price"><span>$</span>14</p>
          </div>
          <hr className="line-separator" />
          <div className="user-rating">
            <a href="author-profile.html">
              <figure className="user-avatar small">
                <img src="images/avatars/avatar_01.jpg" alt="user-avatar" />
              </figure>
            </a>
            <a href="author-profile.html">
              <p className="text-header tiny">Johnny Fisher</p>
            </a>
          </div>
        </div>
      </div>
      <div className="clearfix"></div>
      </div>
    );
  }
}


export default ManageItems;
