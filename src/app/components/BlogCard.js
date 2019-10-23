import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { substring } from '../helper/MainHelper';

class BlogCard extends Component {
  render() {
    let { id, img, title, created, body, country_of_origin, comment_count } = this.props.blog;
    return (
      <div className="blog-post-preview-item column">
        <Link to={`/product-details/${id}`}>
          <figure className="product-preview-image big liquid">
            <img src={img} alt="pigeon" />
          </figure>
        </Link>
        <div className="blog-post-preview-item-info">
          <p className="text-header mid">
            <Link to={`/product-details/${id}`}>{substring(title, 20, '.....')}</Link>
          </p>
          <div className="meta-line">
            <a href="open-post.html">
              <p className="category primary">{country_of_origin}</p>
            </a>
            <p>{created}</p>
          </div>
          <div className="description-preview">
            <p>
              {substring(body, 180, '.....')}
            </p>
            {/* <div dangerouslySetInnerHTML={{ __html: body }} /> */}
          </div>
          <div className="metadata">
            <div className="meta-item">
              <span className="icon-bubble"></span>
              <p>{comment_count}</p>
            </div>
            <div className="meta-item">
              <span className="icon-eye"></span>
              <p>68</p>
            </div>
          </div>
          <Link to={`/product-details/${id}`} className={"more-button primary"}>Read More...</Link>
        </div>
      </div>
    );
  }
}

export default BlogCard;