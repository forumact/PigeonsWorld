import React, { Component } from 'react';
import UploaditemForm from "../Forms/UploadItemForm";
import UploadGuidelines from '../components/UploadItems/UploadGuidelines';
import UploadQueue from '../components/UploadItems/UploadQueue';

class UploadItem extends Component {
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
            <UploaditemForm />
          </div>
        </div>
        <div className="form-box-items wrap-1-3 right">
          <UploadQueue></UploadQueue>
          <UploadGuidelines></UploadGuidelines>
        </div>
        <div className="clearfix"></div>
      </div>
    );
  }
}

export default UploadItem;
