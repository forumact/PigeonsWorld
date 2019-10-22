import React, { Component } from 'react'

export default class ProductsFilter extends Component {
  render() {
    return (
      <div className="sidebar-item">
        <h4>Filter Products</h4>
        <hr className="line-separator" />
        <form id="shop_search_form" name="shop_search_form">
          <input type="checkbox" id="filter1" name="filter1" />
          <label htmlFor="filter1">
            <span className="checkbox tertiary"><span></span></span>
            Cartoon Characters
              <span className="quantity">350</span>
          </label>
          <input type="checkbox" id="filter2" name="filter2" />
          <label htmlFor="filter2">
            <span className="checkbox tertiary"><span></span></span>
            Flat Vector
              <span className="quantity">68</span>
          </label>
          <input type="checkbox" id="filter3" name="filter3" />
          <label htmlFor="filter3">
            <span className="checkbox tertiary"><span></span></span>
            People
              <span className="quantity">350</span>
          </label>
          <input type="checkbox" id="filter4" name="filter4" />
          <label htmlFor="filter4">
            <span className="checkbox tertiary"><span></span></span>
            Animals
              <span className="quantity">68</span>
          </label>
          <input type="checkbox" id="filter5" name="filter5" />
          <label htmlFor="filter5">
            <span className="checkbox tertiary"><span></span></span>
            Objects
              <span className="quantity">350</span>
          </label>
          <input type="checkbox" id="filter6" name="filter6" />
          <label htmlFor="filter6">
            <span className="checkbox tertiary"><span></span></span>
            Backgrounds
              <span className="quantity">68</span>
          </label>
        </form>
      </div>
    )
  }
}
