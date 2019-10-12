import React, { Component } from 'react';

class Loader extends Component {
  render() {
    return (
      <div className="section-wrap">
        <div className="section">
          <span className={'icon-reload'}>Loading...</span>
        </div>
      </div>
    );
  }
}

export default Loader;