import React, { Component } from "react";
import { Avatar } from "../helper";
import { privatemessagecreate } from "../Networks";
import Modal from "../components/Modal/Modal";

export default class PrivateMessage extends Component {
  constructor(props) {
    super(props);
    this.state = { showModal: false };

    this.handleShow = this.handleShow.bind(this);
    this.handleHide = this.handleHide.bind(this);
  }

  handleShow() {
    this.setState({ showModal: true });
  }

  handleHide() {
    this.setState({ showModal: false });
  }

  render() {
    const modal = this.state.showModal ? (
      <Modal>
        <div className="modal">
          <div id="new-message-popup" className="form-popup new-message">
            <div className="form-popup-content">
              <h4 className="popup-title">Write a New Message</h4>
              <hr className="line-separator" />
              <form className="new-message-form">
                <div className="input-container field-add">
                  <label for="mailto" className="rl-label b-label required">
                    To:
                  </label>
                  <label for="mailto" className="select-block">
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
                  <label for="subject" className="rl-label b-label">
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
                  <label for="message" className="rl-label b-label required">
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
            <div onClick={this.handleHide} className="close-btn mfp-close">
              x
            </div>
          </div>
        </div>
      </Modal>
    ) : null;

    return (
      <div className="dashboard-content">
        <div className="headline buttons two primary">
          <h4>Your Inbox (36)</h4>
          <button
            onClick={this.handleShow}
            href="#new-message-popup"
            class="button mid-short secondary open-new-message"
          >
            New Message
          </button>
          {modal}
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
