import React, { Component } from "react";
import { Avatar } from "../helper";
import { privatemessagecreate } from "../Networks";
import Modal from "../components/Modal/Modal";

export default class PrivateMessage extends Component {
  constructor() {
    super();

    this.state = {
      isShowing: false
    };
  }

  openModalHandler = () => {
    this.setState({
      isShowing: true
    });
  };

  closeModalHandler = () => {
    this.setState({
      isShowing: false
    });
  };

  render() {
    return (
      <div className="dashboard-content">
        {this.state.isShowing ? (
          <div onClick={this.closeModalHandler} className="back-drop"></div>
        ) : null}

        <div className="headline buttons two primary">
          <h4>Your Inbox (36)</h4>
          <a
            href="#new-message-popup"
            className="button mid-short secondary open-new-message"
            onClick={this.openModalHandler}
          >
            New Message
          </a>
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
        <Modal
          className="modal"
          show={this.state.isShowing}
          close={this.closeModalHandler}
        >
          <div id="new-message-popup" className="form-popup new-message">
            <div className="form-popup-content">
              <h4 className="popup-title">Write a New Message</h4>
              <hr className="line-separator" />
              <form className="new-message-form">
                <div className="input-container field-add">
                  <label htmlFor="mailto" className="rl-label b-label required">
                    To:
                  </label>
                  <label htmlFor="mailto" className="select-block">
                    <select name="mailto" id="mailto">
                      <option value="0">
                        Select from the authors you follow...
                      </option>
                      <option value="1">Vynil Brush</option>
                      <option value="2">Jenny_Block</option>
                    </select>
                  </label>
                  <div className="button dark-light add-field"></div>
                </div>
                <div className="input-container">
                  <label htmlFor="subject" className="rl-label b-label">
                    Subject:
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Enter your subject here..."
                  />
                </div>
                <div className="input-container">
                  <label htmlFor="message" className="rl-label b-label required">
                    Your Message:
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Write your message here..."
                  ></textarea>
                </div>
                <button className="button mid dark">
                  Send <span className="primary">Message</span>
                </button>
              </form>
            </div>
            <div className="close-btn mfp-close"></div>
          </div>
        </Modal>
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
