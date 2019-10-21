import React, { Component } from 'react'
import { flag } from '../Networks';

export default class ProductMarketing extends Component {

  yourfavorites(e, id) {
    e.preventDefault();
    flag(id);    
  }

  render() {      
    return (
      <div className="sidebar-item void buttons">
        <a href="/" className="button big dark purchase">
          <span className="currency">199</span>
          <span>Purchase Now!</span>
        </a>
        <a href="/" className="button big tertiary wcart">
          <span className="icon-present"></span>
          Add to the Cart
          </a>
        <a href="/" className="button big secondary wfav" onClick={(e) => this.yourfavorites(e, this.props.nid)}>
          <span className="icon-heart"></span>
          <span className="fav-count">652</span>
          Add to Favourites
          </a>
      </div>
    )
  }
}