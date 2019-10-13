import React, { Component } from 'react'
import HeadLine from "../components/HeadLine";
import ProductCard from "../components/ProductCard";
import { connect } from "react-redux";
import { GET_PRODUCTS } from '../Redux/actions';

class Products extends Component {

  constructor(props) {
    super(props);
    this.state = {
      products: []
    }
  }

  componentDidMount() {
    this.props.getProducts();
    document.title = `Pigeons World | Products`;
  }

  render() {
    const title = 'Products';
    //console.log(this.props.products);
    return (
      <div>
        <HeadLine title={title}></HeadLine>
        <div className="section-wrap">
          <div className="section">
            <div className="content">
              <div className="headline tertiary">
                <h4>12.580 Products Found</h4>
                <form id="shop_filter_form" name="shop_filter_form">
                  <label htmlFor="price_filter" className="select-block">
                    <select name="price_filter" id="price_filter">
                      <option value="0">Price (High to Low)</option>
                      <option value="1">Price (Low to High)</option>
                    </select>
                  </label>
                  <label htmlFor="itemspp_filter" className="select-block">
                    <select name="itemspp_filter" id="itemspp_filter">
                      <option value="0">12 Items Per Page</option>
                      <option value="1">6 Items Per Page</option>
                    </select>
                  </label>
                </form>
              </div>
              <div className="product-showcase">
                <div className="product-list grid column3-4-wrap">
                  {(this.props.products || []).map(product => {
                    return <ProductCard key={product.id} product={product}></ProductCard>
                  })}
                </div>
              </div>
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

const mapDispatchToProps = (dispatch) => {
  return {
    getProducts: () => {
      dispatch({ type: GET_PRODUCTS });
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);