import React, { Component } from "react";
import AccountSettingsForm from "../Forms/AccountSettingsForm";
import UploadQueue from "../components/UploadItems/UploadQueue";
import UploadGuidelines from "../components/UploadItems/UploadGuidelines";

class AccountSettings extends Component {
  // submit = values => {
  //   console.log(values);
  //   try {
  //     const userdata = {
  //       name: values.acc_name,
  //       pass: values.password,
  //       email: values.new_email,
  //       website_url: values.website_url,
  //       about: values.about,
  //     };
  //     userUpdate(userdata).then((response) => {
  //       console.log(response);
  //     });
  //   } catch (e) {
  //     console.log(`Axios request failed: ${e}`);
  //   }

  // }

  socialsubmit = values => {
    console.log(values);
  };

  render() {
    return (
      <div className="dashboard-content">
        <div className="headline buttons primary">
          <h4>Account Settings</h4>
        </div>
        <div className="form-box-items wrap-3-1 left">
          <div className="form-box-item full">
            <AccountSettingsForm></AccountSettingsForm>
          </div>
        </div>
        <div className="form-box-items wrap-1-3 right">
          <UploadQueue></UploadQueue>
          <UploadGuidelines></UploadGuidelines>
        </div>
        <div class="clearfix"></div>
      </div>
    );
  }
}

export default AccountSettings;
