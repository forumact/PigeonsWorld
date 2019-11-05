import React, { Component } from "react";
import { getProductFilter } from "../../Networks";
import { arrayRemove } from "../../helper";
import { GET_PRODUCTS } from "../../Redux/actions";
import { connect } from "react-redux";

let filter = [];
class ProductsFilter extends Component {
  constructor() {
    super();
    this.state = {
      productFilter: [],
      selected: {}
    };
  }

  handleChange(e) {
    if (filter.indexOf(e.target.value) !== -1) {
      filter = arrayRemove(filter, e.target.value);
    } else {
      filter.push(e.target.value);
    }
    console.log("final", filter);
    const payload = {
      numberofitem: 9,
      pagenumber: 0,
      filter: filter
    };
    this.props.getProducts(payload);
  }

  render() {
    return (
      <div className="sidebar-item">
        <h4>Filter Products</h4>
        <hr className="line-separator" />
        <form id="shop_search_form" name="shop_search_form">
          {(this.state.productFilter || []).map((product, i) => {
            return (
              <div key={i}>
                <input
                  type="checkbox"
                  id={`filter_${i}`}
                  name={`filter_${i}`}
                  value={product.field_category ? product.field_category : ""}
                  onChange={e => this.handleChange(e)}
                />
                <label htmlFor={`filter_${i}`}>
                  <span className="checkbox tertiary">
                    <span></span>
                  </span>
                  {product.field_category}
                  <span className="quantity">{product.nid_count}</span>
                </label>
              </div>
            );
          })}
        </form>
      </div>
    );
  }

  componentDidMount() {
    getProductFilter().then(response => {
      this.setState({ productFilter: response.data });
    });
  }
}

const mapStateToProps = state => {
  return {
    products: state.products
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getProducts: payload => {
      dispatch({ type: GET_PRODUCTS, payload: payload });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsFilter);
