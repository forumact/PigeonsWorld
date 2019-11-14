import React, { Component } from "react";
import { Avatar } from "../helper";
import { privatemessagecreate } from "../Networks";
import Modal from "../components/Modal/Modal";

export default class PrivateMessage extends Component {
  // constructor() {
  //   super();
  // }

  render() {
    return (
      <div className="dashboard-content">
        <div className="headline buttons two primary">
          <h4>Your Inbox (36)</h4>
          <Modal />
          <a href="/" className="button mid-short primary">
            Delete Selected
          </a>
        </div>
        <div className="inbox-messages">
          <div className="inbox-message">
            <div className="inbox-message-actions">
              <input type="checkbox" id="msg1" name="msg1" />
              <label htmlFor="msg1" className="label-check">
                <span className="checkbox primary">
                  <span></span>
                </span>
              </label>
            </div>
            <div className="inbox-message-author">
              <figure className="user-avatar">
                <img src={Avatar} alt="user-img" />
              </figure>
              <p className="text-header">
                Sarah-Imaginarium
                <span className="message-icon icon-envelope secondary"></span>
              </p>
            </div>

            <a href="dashboard-openmessage.html">
              <div className="inbox-message-content">
                <p className="text-header">Product Question</p>
                <p className="description">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium
                </p>
              </div>
            </a>

            <div className="inbox-message-type">
              <span className="message-icon icon-envelope secondary"></span>
            </div>

            <div className="inbox-message-date">
              <p>May 18th, 2014</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    const userpayload = {
      uid: this.props.match.params.uid
    };
    privatemessagecreate(userpayload).then(response => {});
  }
}
