import React, { Component } from "react";
import CreateAddForm from "../Forms/CreateAddForm";
import UploadGuidelines from "../components/UploadItems/UploadGuidelines";
import UploadQueue from "../components/UploadItems/UploadQueue";

export default class UpdateAd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hide: true
    };
  }
  render() {
    return (
      <div className="dashboard-content">
        <div className="headline simple primary">
          <h4>Tell us about what you're advertising</h4>
        </div>
        <div className="form-box-items wrap-3-1 left">
          <div className="form-box-item full">
            <h4>Advert Details</h4>
            <hr className="line-separator" />
            <CreateAddForm nid={this.props.match.params.nid} />
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
