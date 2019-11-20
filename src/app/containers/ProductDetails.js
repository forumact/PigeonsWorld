import React, { Component, Fragment } from "react";
import HeadLine from "../components/HeadLine";
import CommentsList from "../components/CommentsList";
import ProductInfo from "../components/Product/ProductInfo";
import { fetchProductDetails } from "../Networks";
import ProductSeller from "../components/Product/ProductSeller";
import ProductMarketing from "../components/Product/ProductMarketing";
import SocilaMediaShareLinks from "../components/Product/SocilaMediaShareLinks";
import AuthorsItem from "../components/Product/AuthorsItem";
import ImageSlider from "../components/Product/ImageSlider";
import { Helmet } from "react-helmet";

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
    const { title, body, img } = this.state.product;
    let img1 = img ? img[0] : "";
    return (
      <Fragment>
        <Helmet>
          <meta charSet="utf-8" />          
          <meta name="description" content={title} />
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
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
                  image={img}
                  onChange={this.changeProductImage}
                ></ImageSlider>
                <div className="post-content">
                  {/* {body} */}
                  <div
                    className="post-paragraph"
                    dangerouslySetInnerHTML={{ __html: body }}
                  />
                </div>
                <hr className="line-separator" />
                <SocilaMediaShareLinks
                  url={`http://localhost:3000/products/${this.props.match.params.nid}`}
                ></SocilaMediaShareLinks>
              </article>
              <CommentsList nid={this.props.match.params.nid}></CommentsList>
            </div>
          </div>
        </div>
      </Fragment>
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
      document.title = `${response.data.title} | Pigeons World`;
    });
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.nid !== prevProps.match.params.nid) {
      //Typical usage, don't forget to compare the props
      const data = {
        nid: this.props.match.params.nid
      };

      fetchProductDetails(data).then(response => {
        this.setState({
          product: response.data
        });
        document.title = `${response.data.title} | Pigeons World`;
      });
    }
  }
}

export default ProductDetails;
