import React, { Component } from 'react';
import UploaditemForm from "../Forms/UploadItemForm";

class UploadItem extends Component {
  submit = values => {
    // print the form values to the console
    console.log(values)
  }

  render() {
    return (
      <div className="dashboard-content">
        <div className="headline simple primary">
          <h4>Upload Item</h4>
        </div>
        <div className="form-box-items wrap-3-1 left">
          <div className="form-box-item full">
            <h4>Item Specifications</h4>
            <hr className="line-separator" />
            <UploaditemForm onSubmit={this.submit} />
          </div>
        </div>
        <div className="form-box-items wrap-1-3 right">
          <div className="form-box-item full">
            <h4>Upload Queue</h4>
            <hr className="line-separator" />
            <div className="pg-bar-list">
              <div className="pg-bar-list-item">
                <div className="pg-bar-list-item-info">
                  <p className="text-header">Professional Business Card</p>
                  <p className="text-header">86%</p>
                  <p className="timestamp">4 days ago</p>
                </div>
              </div>
              <div className="pg-bar-list-item">
                <div className="pg-bar-list-item-info">
                  <p className="text-header">Professional Business Card</p>
                  <p className="text-header">92%</p>
                  <p className="timestamp">12 days ago</p>
                </div>
              </div>
            </div>
          </div>
          <div className="form-box-item full">
            <h4>Upload Guidelines</h4>
            <hr className="line-separator" />
            <div className="plain-text-box">
              <div className="plain-text-box-item">
                <p className="text-header">File Upload:</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
                            ut labore.</p>
              </div>
              <div className="plain-text-box-item">
                <p className="text-header">Photos and Images:</p>
                <p>Lorem ipsum dolor sit amet.<br />Consectetur adipisicing elit, sed do.</p>
                <p>Eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
              <div className="plain-text-box-item">
                <p className="text-header">Guide with Links:</p>
                <p><a href="/" className="primary">Click here for the link.</a></p>
              </div>
            </div>
          </div>
        </div>
        <div className="clearfix"></div>
      </div>
    );
  }
 
}

export default UploadItem;
