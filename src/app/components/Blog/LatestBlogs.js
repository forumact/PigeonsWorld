import React, { Component } from 'react';
import { Link } from "react-router-dom";

class LatestBlogs extends Component {
  render() {    
    return (
      <div className="sidebar-item author-items-v2">
        <h4>Latest Posts</h4>
        <hr className="line-separator" />
        <div className="item-preview">
          <Link to={'/blog/137'} replace>
            <figure className="product-preview-image small liquid">
              <img src="images/blog/01t.jpg" alt="" />
            </figure>
          </Link>
          <a href="/"><p className="text-header small">Check out the best web themes of the last year</p></a>
          <p className="category tiny primary"><a href="/">Design Inspires</a></p>
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
        </div>
      </div>
    )
  }
}


export default LatestBlogs;