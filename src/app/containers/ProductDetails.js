import React, { Component } from "react";
import HeadLine from "../components/HeadLine";
import CommentsList from "../components/CommentsList";
import ProductInfo from "../components/Product/ProductInfo";
import { fetchProductDetails } from "../Networks";
import ProductSeller from "../components/Product/ProductSeller";
import ProductMarketing from "../components/Product/ProductMarketing";
import SocilaMediaShareLinks from "../components/SocilaMediaShareLinks";

class ProductDetails extends Component {
  constructor() {
    super();

    this.state = {
      product: []
    };
  }

  render() {
    const { title, body, img } = this.state.product;
    return (
      <div>
        <HeadLine title={title}></HeadLine>
        <div className="section-wrap">
          <div className="section">
            <div className="sidebar right">
              <ProductMarketing product={this.state.product}></ProductMarketing>
              <ProductInfo product={this.state.product}></ProductInfo>
              <ProductSeller uid={this.state.product.uid}></ProductSeller>
            </div>
            <div className="content left">
              <article className="post">
                <div className="post-image">
                  <figure className="product-preview-image large liquid imgLiquid_bgSize imgLiquid_ready">
                    <img src={img} alt="" />
                  </figure>
                </div>
                <div className="post-content">
                  <div className="post-paragraph">
                    {/* {body} */}
                    <div dangerouslySetInnerHTML={{ __html: body }} />
                  </div>
                </div>
                <hr className="line-separator" />
                <SocilaMediaShareLinks></SocilaMediaShareLinks>
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
      nid: this.props.match.params.nid
    };

    fetchProductDetails(data).then(response => {
      this.setState({
        product: response.data
      });
      document.title = `Pigeons World | ${response.data.title}`;
    });
  }
}

export default ProductDetails;
