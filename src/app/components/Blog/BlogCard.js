import React, { Component } from "react";
import { Link } from "react-router-dom";
import { substring } from "../../helper";

class BlogCard extends Component {
  render() {
    let {
      nid,
      img,
      title,
      created,
      body,
      country_of_origin,
      comment_count,
      flag_count
    } = this.props.blog;
    return (
      <div className="blog-post-preview-item column">
        <Link to={`/blog/${nid}`}>
          <figure className="product-preview-image big liquid">
            <img src={img} alt="pigeon" />
          </figure>
        </Link>
        <div className="blog-post-preview-item-info">
          <p className="text-header mid">
            <Link to={`/blog/${nid}`}>{substring(title, 20, ".....")}</Link>
          </p>
          <div className="meta-line">
            <Link to={`/blog/${nid}`}>
              <p className="category primary">{country_of_origin}</p>
            </Link>
            <p>{created}</p>
          </div>
          <div className="description-preview">
            <p>{substring(body, 180, ".....")}</p>
            {/* <div dangerouslySetInnerHTML={{ __html: body }} /> */}
          </div>
          <div className="metadata">
            <div className="meta-item">
              <span className="icon-bubble"></span>
              <p>{comment_count}</p>
            </div>
            <div className="meta-item">
              <span className="icon-eye"></span>
              <p>{flag_count}</p>
            </div>
          </div>
          <Link to={`/blog/${nid}`} className={"more-button primary"}>
            Read More...
          </Link>
        </div>
      </div>
    );
  }
}

export default BlogCard;
