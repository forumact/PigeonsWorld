import React, { Component } from 'react';
import UploaditemForm from "../Forms/UploadItemForm";
import { productCreate } from '../Networks';
import { reset } from 'redux-form';
import UploadGuidelines from '../components/UploadItems/UploadGuidelines';
import UploadQueue from '../components/UploadItems/UploadQueue';

class UploadItem extends Component {


  submit = values => {
    // print the form values to the console
    console.log(values)
    // productCreate(values).then((response) => {
    //   console.log(response);
    //   this.props.history.push(`/products/${response.data.nid}`);
    // });

    reset('UploaditemForm');
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
          <UploadQueue></UploadQueue>
          <UploadGuidelines></UploadGuidelines>
        </div>
        <div className="clearfix"></div>
      </div>
    );
  }

}

export default UploadItem;
