import React, { Component } from "react";


export default class UserProfileMeta extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     userbasic: []
  //   };
  // }

  render() {
    return (
      <div className="author-profile-meta-wrap">
        <div className="author-profile-meta">
          <div className="author-profile-info">
            <div className="author-profile-info-item">
              <p className="text-header">Member Since:</p>
              <p>{this.props.userbasic.member_since}</p>
            </div>
            <div className="author-profile-info-item">
              <p className="text-header">Total Sales:</p>
              <p>{this.props.userbasic.total_items}</p>
            </div>
            <div className="author-profile-info-item">
              <p className="text-header">Mail:</p>
              <p>{this.props.userbasic.email}</p>
            </div>
            <div className="author-profile-info-item">
              <p className="text-header">Contact:</p>
              <p>{this.props.userbasic.contact}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    //console.log(this.props);
 
  }
}
