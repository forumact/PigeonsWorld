import React, { Component } from "react";
import HeadLine from "../components/HeadLine";
import CommentsList from "../components/CommentsList";
import ProductInfo from "../components/Product/ProductInfo";
import { fetchProductDetails } from "../Networks";
import ProductSeller from "../components/Product/ProductSeller";
import ProductMarketing from "../components/Product/ProductMarketing";
import SocilaMediaShareLinks from "../components/SocilaMediaShareLinks";
import AuthorsItem from "../components/Product/AuthorsItem";

import ImageSlider from "../components/Product/ImageSlider";

class ProductDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      product: [],
      image: ""
    };
    this.changeProductImage = this.changeProductImage.bind(this);
  }

  changeProductImage(field, value) {    
    this.setState({ [field]: value });    
  }

  render() {
    const { title, body, img1, img2, img3, img4 } = this.state.product;
    let imgArray = [img1, img2, img3, img4];
    return (
      <div>
        <HeadLine title={title}></HeadLine>
        <div className="section-wrap">
          <div className="section">
            <div className="sidebar right">
              <ProductMarketing product={this.state.product}></ProductMarketing>
              <ProductInfo product={this.state.product}></ProductInfo>
              <ProductSeller uid={this.state.product.uid}></ProductSeller>
              <AuthorsItem uid={this.state.product.uid}></AuthorsItem>
            </div>
            <div className="content left">
              <article className="post">
                <div className="post-image">
                  <figure className="product-preview-image large liquid imgLiquid_bgSize imgLiquid_ready">
                    <img
                      id="product-src"
                      src={this.state.image ? this.state.image : img1}
                      alt="product"
                    />
                  </figure>
                </div>
                <ImageSlider
                  image={imgArray}
                  onChange={this.changeProductImage}
                ></ImageSlider>
                <div className="post-content">
                  <div className="post-paragraph">
                    {/* {body} */}
                    <div dangerouslySetInnerHTML={{ __html: body }} />
                  </div>
                </div>
                <hr className="line-separator" />
                <SocilaMediaShareLinks></SocilaMediaShareLinks>
              </article>
              <CommentsList nid={this.props.match.params.nid}></CommentsList>
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
