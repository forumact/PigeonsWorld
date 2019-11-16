import React from "react";
//import Popup from "reactjs-popup";

export default () => (
  // <Popup
  //   trigger={
  //     <button className="button mid-short secondary open-new-message">
  //       New Message
  //     </button>
  //   }
  //   modal
  // >
    <div className="mfp-content">
      <div id="new-message-popup" className="form-popup1 new-message">
        <div className="form-popup-content1">
          <hr className="line-separator" />
          <div className="input-container field-add">
            <label htmlFor="mailto" className="rl-label b-label required">
              To:
            </label>
            <label htmlFor="mailto" className="select-block">
              <select name="mailto" id="mailto">
                <option value="0">Select from the authors you follow...</option>
                <option value="1">Vynil Brush</option>
                <option value="2">Jenny_Block</option>
              </select>
            </label>
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
        </div>
        <div className="close-btn mfp-close"></div>
      </div>
    </div>
  
);
