import React, { Component } from "react";
import { siteSeach } from "../Networks";
import HeadLine from "../components/HeadLine";
import ProductCard from "../components/Product/ProductCard";
import NoDataFound from "../components/NoDataFound";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchItems: [],
      noData: 0
    };
  }

  render() {
    console.log(this.state);
    if (this.state.noData === 0) {
      return (
        <div>
          <HeadLine title="Search"></HeadLine>
          <NoDataFound></NoDataFound>
        </div>
      );
    }

    return (
      <div>
        <HeadLine title="Search"></HeadLine>
        <section className="section-wrap">
          <div className="section">
            <div className="content full">
              <div className="headline primary">
                <h4>
                  {this.state.searchItems ? this.state.searchItems.length : "0"}{" "}
                  Product Found
                </h4>
                <div className="view-selectors">
                  <a href="/" className="view-selector grid active">
                    &nbsp;
                  </a>
                  <a href="/" className="view-selector list">
                    &nbsp;
                  </a>
                </div>
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
                <div className="clearfix"></div>
              </div>
            </div>
            <div className="product-showcase">
              <div className="product-list grid column4-wrap">
                {(this.state.searchItems || []).map(product => {
                  return (
                    // <ProductCard></ProductCard>
                    <ProductCard
                      key={product.nid}
                      product={product}
                    ></ProductCard>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  componentDidMount() {
    console.log(this.props.match.params);
    const payload = {
      key: this.props.match.params.input
      //category: this.props.match.params.input
    };
    siteSeach(payload).then(response => {
      this.setState({
        searchItems: response.data.searchItems,
        noData: response.data.searchItems ? response.data.searchItems.length : 0
      });
    });
  }
}

export default Search;
