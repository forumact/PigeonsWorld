import React, { Component } from 'react'

export default class LatestBlogs extends Component {
  render() {
    return (
      <div class="sidebar-item author-items-v2">
        <h4>Latest Posts</h4>
        <hr class="line-separator" />
        <div class="item-preview">
          <a href="/">
            <figure class="product-preview-image small liquid">
              <img src="images/blog/01t.jpg" alt="" />
            </figure>
          </a>
          <a href="/"><p class="text-header small">Check out the best web themes of the last year</p></a>
          <p class="category tiny primary"><a href="/">Design Inspires</a></p>
          <div class="metadata">
            <div class="meta-item">
              <span class="icon-bubble"></span>
              <p>05</p>
            </div>
            <div class="meta-item">
              <span class="icon-eye"></span>
              <p>68</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
