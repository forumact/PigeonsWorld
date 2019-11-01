import React, { Component } from "react";
import { getUserBasicInfo } from "../../Networks";

export default class UserProfileMeta extends Component {
  constructor() {
    super();
    this.state = {
      userbasic: []
    };
  }

  render() {
    return (
      <div className="author-profile-meta-wrap">
        <div className="author-profile-meta">
          <div className="author-profile-info">
            <div className="author-profile-info-item">
              <p className="text-header">Member Since:</p>
              <p>{this.state.userbasic.member_since}</p>
            </div>
            <div className="author-profile-info-item">
              <p className="text-header">Total Sales:</p>
              <p>{this.state.userbasic.total_items}</p>
            </div>
            <div className="author-profile-info-item">
              <p className="text-header">Mail:</p>
              <p>{this.state.userbasic.email}</p>
            </div>
            <div className="author-profile-info-item">
              <p className="text-header">Contact:</p>
              <p>{this.state.userbasic.contact}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    //console.log(this.props);
    getUserBasicInfo(this.props).then(response => {
      this.setState({ userbasic: response.data });
    });
  }
}
