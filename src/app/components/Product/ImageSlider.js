import React, { Component } from "react";

export default class ImageSlider extends Component {
  constructor() {
    super();

    this.state = {
      slider: []
    };
  }
  render() {
    const items = [254, 45, 212, 365, 2543];
    return (
      <div className="post-image-slides" style={{ left: "0px" }}>
        <div className="image-slides-wrap full">
          <div
            className="image-slides"
            data-slide-visible-full="5"
            data-slide-visible-small="2"
            data-slide-count="5"
          >
            {items.map((item, i) => (
              <div
                arul={i}
                key={i}
                className={(i==0) ? `image-slide selected` : `image-slide`}
                style={{ left: `${i * 106}px` }}
              >
                <div className="overlay"></div>
                <figure
                  className="product-preview-image thumbnail liquid"
                  style={{ backgroundImage: `url(${this.props.image})` }}
                >
                  {/* <img src={ProductImg1} alt="" /> */}
                </figure>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
