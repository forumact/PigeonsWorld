import React, { Component } from "react";
import { getProductFilter } from "../../Networks";

export default class ProductsFilter extends Component {
  constructor() {
    super();
    this.state = {
      productFilter: []
    };
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
                <input type="checkbox" id={`filter${i}`} name={`filter${i}`} />
                <label htmlFor={`filter${i}`}>
                  <span className="checkbox tertiary">
                    <span></span>
                  </span>
                  {product.field_item_category}
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
