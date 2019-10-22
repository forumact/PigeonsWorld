import React, { Component } from 'react'
import HeadLine from '../components/HeadLine'
import ProductCard from '../components/Product/ProductCard';
import { connect } from "react-redux";

class UserProfile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      products: []
    }
  }

  render() {
    const title = "Author's Profile";
    return (
      <div>
        <HeadLine title={title}></HeadLine>
        <div className={'author-profile-banner'}></div>
        <div class="author-profile-meta-wrap">
          <div class="author-profile-meta">
            <div class="author-profile-info">
              <div class="author-profile-info-item">
                <p class="text-header">Member Since:</p>
                <p>December 26th, 2013</p>
              </div>
              <div class="author-profile-info-item">
                <p class="text-header">Total Sales:</p>
                <p>820</p>
              </div>
              <div class="author-profile-info-item">
                <p class="text-header">Freelance Work:</p>
                <p>Available</p>
              </div>
              <div class="author-profile-info-item">
                <p class="text-header">Website:</p>
                <p><a href="http://www.odindesign-themes.com/" class="primary">www.odindesign-themes.com</a></p>
              </div>
            </div>
          </div>
        </div>
        <div className="section-wrap">
          <div className="section overflowable">
            <div className="content right">
              <div class="headline buttons primary">
                <h4>Latest Items</h4>
                <a href="author-profile-items.html" class="button mid-short dark-light">See all the items</a>
              </div>
              <div className="product-list grid column3-4-wrap">
                {(this.props.products || []).map(product => {
                  return <ProductCard key={product.id} product={product}></ProductCard>
                })}
              </div>
              <div class="clearfix"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}



const mapStateToProps = (state) => {
  return {
    products: state.products
  }
}

export default connect(mapStateToProps, null)(UserProfile);