import React, { Component } from 'react';
import ProductCard from "./ProductCard";
import { connect } from "react-redux";

class ProductShowcase extends Component {

  constructor(props) {
    super(props);
    this.state = {
      products: []
    }
  }

  render() {
    return (
      <div id="product-sideshow-wrap">
        <div id="product-sideshow">
          <div className="product-showcase">
            <div className="headline primary">
              <h4>Latest Online Products</h4>
            </div>
            <div id="pl-1" className="product-list grid column4-wrap">
              {(this.props.products || []).map(product => {
                return <ProductCard key={product.id} product={product}></ProductCard>
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

//export default ProductShowcase;


const mapStateToProps = (state) => {
  console.log(state);
  return {
    products: state.products
  }
}

export default connect(mapStateToProps, null)(ProductShowcase);