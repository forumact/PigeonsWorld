import React, { Component } from 'react'

export default class UserProfileMeta extends Component {
  render() {
    return (
      <div className="author-profile-meta-wrap">
        <div className="author-profile-meta">
          <div className="author-profile-info">
            <div className="author-profile-info-item">
              <p className="text-header">Member Since:</p>
              <p>December 26th, 2013</p>
            </div>
            <div className="author-profile-info-item">
              <p className="text-header">Total Sales:</p>
              <p>820</p>
            </div>
            <div className="author-profile-info-item">
              <p className="text-header">Freelance Work:</p>
              <p>Available</p>
            </div>
            <div className="author-profile-info-item">
              <p className="text-header">Website:</p>
              <p><a href="http://www.odindesign-themes.com/" className="primary">www.odindesign-themes.com</a></p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
