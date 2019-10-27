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
            <p className="text-header">Item Condition:</p>
            <p className="strtoupper">{this.props.product.condition}</p>
          </div>
          <div className="information-layout-item">
            <p className="text-header">Author's Country:</p>
            <p>{this.props.product.city}</p>
          </div>
          <div className="information-layout-item">
            <p className="text-header">International Shipping:</p>
            <p>Free - Except USA</p>
          </div>
          <div className="information-layout-item">
            <p className="text-header">Returns:</p>
            <p>No Returns Accepted</p>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductInfo;