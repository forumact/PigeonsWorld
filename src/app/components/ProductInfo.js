import React, { Component } from 'react';

class ProductInfo extends Component {
  render() {
    console.log(this.props);    
    return (
      <div className="sidebar-item product-info">
        <h4>Product Information</h4>
        <hr className="line-separator" />
        <div className="information-layout">
          <div className="information-layout-item">
            <p className="text-header">Upload Date:</p>
            <p>August 18th, 2015</p>
          </div>
          <div className="information-layout-item">
            <p className="text-header">Item Condition:</p>
            <p>New</p>
          </div>
          <div className="information-layout-item">
            <p className="text-header">Author's Country:</p>
            <p>United States</p>
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