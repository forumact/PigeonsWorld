import React, { Component } from 'react';
import TopImage from '../assets/top_items.png';

class HomeBanner extends Component {
  render() {
    return (
      <div className="banner-wrap">
        <section className="banner">
          <h5>Welcome to</h5>
          <h1>The Biggest <span>Marketplace</span></h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore.</p>
          <img src={TopImage} alt="banner-img" />
          <div className="search-widget">
            <form className="search-widget-form">
              <input type="text" name="category_name" placeholder="Search goods or services here..." />
              <label htmlFor="categories" className="select-block">
                <select name="categories" id="categories">
                  <option value="0">All Categories</option>
                  <option value="1">PSD Templates</option>
                  <option value="2">Hero Images</option>s
                  <option value="3">Shopify</option>
                  <option value="4">Icon Packs</option>
                  <option value="5">Graphics</option>
                  <option value="6">Flyers</option>
                  <option value="7">Backgrounds</option>
                  <option value="8">Social Covers</option>
                </select>
              </label>
              <button className="button medium dark">Search Now!</button>
            </form>
          </div>
        </section>
      </div>
    );
  }
}

export default HomeBanner;