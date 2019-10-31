import React, { Component } from 'react';

class ProductInfo extends Component {
  render() {
    return (
      <div className="sidebar-item product-info">
        <h4>Product Information</h4>
        <hr className="line-separator" />
        <div className="information-layout">
          <div className="information-layout-item">
            <p className="text-header">Upload Date:</p>
            <p>{this.props.product.update}</p>
          </div>
          <div className="information-layout-item">
            <p className="text-header">Item Category:</p>
            <p>{this.props.product.category}</p>
          </div>
          <div className="information-layout-item">
            <p className="text-header">Item Condition:</p>
            <p className="strtoupper">{this.props.product.condition}</p>
          </div>
          <div className="information-layout-item">
            <p className="text-header">Author's City:</p>
            <p>{this.props.product.city}</p>
          </div>
          <div className="information-layout-item">
            <p className="text-header">Price:</p>
            <p>{this.props.product.price}</p>
          </div>
         
        </div>
      </div>
    );
  }
}

export default ProductInfo;