import React, { Component } from 'react';
import ItemNavigation from '../components/Navigation/ItemNavigation';
import { GET_USER_PRODUCTS } from '../Redux/actions';
import { connect } from "react-redux";
import Pagination from "react-js-pagination";
import NewProduct from '../components/Product/NewProduct';
import { NavLink } from 'react-router-dom';
import { substring } from '../helper';

class ManageItems extends Component {

  constructor(props) {
    super(props);
    this.state = {
      products: {},
      activePage: 1,
      itemsCountPerPage: 9,
      totalItemsCount: 1
    }

    //Bind this event on click method
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  handlePageChange(pageNumber) {
    const payload = {
      'numberofitem': 11,
      'uid': localStorage.getItem('uid'),
      'pagenumber': pageNumber - 1,
    }
    console.log(`active page is ${pageNumber}`);
    this.props.getUserProducts(payload);
    this.setState({
      activePage: pageNumber
    })
  }


  componentDidMount() {
    const payload = {
      'numberofitem': 11,
      'pagenumber': 0,
      'uid': localStorage.getItem('uid'),
    }
    this.props.getUserProducts(payload);
    document.title = `Pigeons World | Products`;
  }


  render() {
    const { products, count } = this.props.userProducts;
    return (
      <div className="dashboard-content">
        <div className="headline buttons primary">
          <h4>{count} Manage Items</h4>
        </div>
        <div className="product-list grid column4-wrap">
          <NewProduct></NewProduct>
          {(products || []).map(product => {
            return (
              <div className="product-item column" key={product.id}>
                <div className="product-preview-actions">
                  <figure className="product-preview-image">
                    <img src={product.img} />
                  </figure>
                  <ItemNavigation></ItemNavigation>
                </div>
                <div className="product-info">
                  <a href="item-v1.html">
                    <p className="text-header" title={product.title}>{product.title}</p>
                  </a>
                  <p className="product-description">{substring(product.body, 35, '.....')}</p>
                  <a href="shop-gridview-v1.html">
                    <p className="category primary">{product.website}</p>
                  </a>
                  <p className="price"><span>₹</span>{(product.price) ? product.price : 'NA'}</p>
                </div>
                <hr className="line-separator" />
                <div className="user-rating">
                  <a href="author-profile.html">
                    <figure className="user-avatar small">
                      <img src={product.avatar} alt="user-avatar" />
                    </figure>
                  </a>
                  <NavLink to={`/user/${product.uid}`}>
                    <p className="text-header tiny">{product.username}</p>
                  </NavLink>
                </div>
              </div>
            )
          })}
        </div>
        <div className="clearfix"></div>
        <div className="pager tertiary">
          {count ?
            <Pagination
              activePage={this.state.activePage}
              itemsCountPerPage={this.state.numberofitem}
              totalItemsCount={count}
              pageRangeDisplayed={3}
              onChange={this.handlePageChange}
              itemClass="pager-item"
              linkClass="page-link-class"
            />
            : null
          }
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    userProducts: state.userProducts
  }
}

const mapDispatchToProps = (dispatch) => {

  return {
    getUserProducts: (payload) => {
      dispatch({ type: GET_USER_PRODUCTS, payload: payload });
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageItems);

//export default ManageItems;
