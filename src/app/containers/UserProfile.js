import React, { Component } from 'react'
import HeadLine from '../components/HeadLine'
import ProductCard from '../components/Product/ProductCard';
import UserBio from "../components/UserProfile/UserBio";
import { connect } from "react-redux";
import UserActivity from '../components/UserProfile/UserActivity';
import UserReputation from '../components/UserProfile/UserReputation';
import UserProfileMeta from '../components/UserProfile/UserProfileMeta';
import { GET_USER_PRODUCTS } from '../Redux/actions';


class UserProfile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userProducts: []
    }
  }

  render() {
    const title = "Author's Profile";
    return (
      <div>
        <HeadLine title={title}></HeadLine>
        <div className={'author-profile-banner'}></div>
        <UserProfileMeta></UserProfileMeta>
        <div className="section-wrap">
          <div className="section overflowable">
            <div className="sidebar left author-profile">
              <UserBio></UserBio>
              <UserActivity></UserActivity>
              <UserReputation></UserReputation>
            </div>
            <div className="content right">
              <div className="headline buttons primary">
                <h4>Latest Items</h4>
                <a href="author-profile-items.html" className="button mid-short dark-light">See all the items</a>
              </div>
              <div className="product-list grid column3-4-wrap">
                {(this.props.userProducts || []).map(product => {
                  return <ProductCard key={product.id} product={product}></ProductCard>
                })}
              </div>
              <div className="clearfix"></div>
            </div>
            <div className="clearfix"></div>
          </div>
        </div>
      </div>
    )
  }

  componentDidMount() {
    this.props.getUserProducts();
    const title = "Arulraj"
    document.title = `Pigeons World | ${title}`;
  }
}


const mapStateToProps = (state) => {
  return {
    userProducts: state.userProducts
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUserProducts: () => {
      dispatch({ type: GET_USER_PRODUCTS });
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);