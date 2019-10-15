import React, { Component } from 'react';
import HeadLine from "../components/HeadLine";
import CommentsList from "../components/CommentsList";
import ProductInfo from '../components/ProductInfo';
import { fetchProductDetails } from '../Networks';

class ProductDetails extends Component {
  constructor() {
    super();

    this.state = {
      product: ''
    }
  }


  render() {
    const { title, body, img } = this.state.product;
    return (
      <div>
        <HeadLine title={title}></HeadLine>
        <div className="section-wrap">
          <div className="section">
            <div className="sidebar right">
              <ProductInfo></ProductInfo>
            </div>
            <div className="content left">
              <article className="post">
                <div className="post-image">
                  <figure
                    className="product-preview-image large liquid imgLiquid_bgSize imgLiquid_ready">
                    <img src={img} alt="" />
                  </figure>
                </div>
                <div className="post-content">
                  <div className="post-paragraph">
                    {body}
                  </div>
                </div>
                <hr className="line-separator" />
                <div className="share-links-wrap">
                  <p className="text-header small">Share this:</p>
                  <ul className="share-links hoverable">
                    <li><a href="/" className="fb">FB</a></li>
                    <li><a href="/" className="twt">Twt</a></li>
                    <li><a href="/" className="db">Db</a></li>
                    <li><a href="/" className="rss">Rss</a></li>
                    <li><a href="/" className="gplus">Gplus</a></li>
                  </ul>
                </div>
              </article>
              <CommentsList nid={this.props.match.params.pid}></CommentsList>
            </div>
          </div>
        </div>
      </div>
    );
  }


  componentDidMount() {    
    const data = {
      id: this.props.match.params.pid
    };

    fetchProductDetails(data).then((response) => {
      this.setState({
        product: response.data
      })
      document.title = `Pigeons World | ${response.data.title}`;
    });
  }

}

export default ProductDetails;