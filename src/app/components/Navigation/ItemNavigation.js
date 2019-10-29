import React, { Component } from 'react';

class ItemNavigation extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hover: false
    }

    this.hoverOn = this.hoverOn.bind(this);
    this.hoverOff = this.hoverOff.bind(this);
  }

  hoverOn() {
    this.setState({
      hover: true
    })
  }

  hoverOff() {
    this.setState({
      hover: false
    })
  }


  render() {
    return (
        <div onMouseEnter={this.hoverOn} onMouseLeave={this.hoverOff}>
          <div className="product-settings primary dropdown-handle">
              <span className="sl-icon icon-settings"></span>
          </div>
          <ul className={this.state.hover ? "dropdown small hover-effect open" : "dropdown small hover-effect closed"}>
            <li className="dropdown-item">
              <div className="dp-triangle"></div>
              <a href="#">Edit Item</a>
            </li>
            <li className="dropdown-item">
              <a href="#">Duplicate</a>
            </li>
            <li className="dropdown-item">
              <a href="#">Share</a>
            </li>
            <li className="dropdown-item">
              <a href="#">Delete</a>
            </li>
          </ul>
        </div>
    );
  }
}

export default ItemNavigation;
