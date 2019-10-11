import React, {Component} from 'react';
import BlogImg from "../assets/04s.jpg";
import {Link} from "react-router-dom";

class BlogCard extends Component {
  render() {
    return (
        <div className="blog-post-preview-item column">
          <Link to={'/product-details/1'}>
            <figure className="product-preview-image big liquid">
              <img src={BlogImg} alt=""/>
            </figure>
          </Link>
          <div className="blog-post-preview-item-info">
            <p className="text-header mid">
              <Link to={'/product-details/1'}>Check out the best web themes of the last year</Link>
            </p>
            <div className="meta-line">
              <a href="open-post.html">
                <p className="category primary">Design Inspires</p>
              </a>
              <p>March 15th, 2015</p>
            </div>
            <p className="description-preview">Lorem ipsum dolor sit amet, consectetur adipisicing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna ua. Ut enim ad minim veniam,
              quis nostrud exercitation.</p>
            <div className="metadata">
              <div className="meta-item">
                <span className="icon-bubble"></span>
                <p>05</p>
              </div>
              <div className="meta-item">
                <span className="icon-eye"></span>
                <p>68</p>
              </div>
            </div>
            <Link to={'/product-details/1'} className={"more-button primary"}>Read More...</Link>
          </div>
        </div>
    );
  }
}

export default BlogCard;