import React, { Component } from 'react'

export default class SocilaMediaShareLinks extends Component {
  render() {
    return (
      <div>
        <div className="share-links-wrap">
          <p className="text-header small">Share this:</p>
          <ul className="share-links hoverable">
            <li><a href="/" className="fb">&nbsp;</a></li>
            <li><a href="/" className="twt">&nbsp;</a></li>
            <li><a href="/" className="db">&nbsp;</a></li>
            <li><a href="/" className="rss">&nbsp;</a></li>
            <li><a href="/" className="gplus">&nbsp;</a></li>
          </ul>
        </div>
      </div>
    )
  }
}
