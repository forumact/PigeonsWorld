import React, { Component } from 'react';
import SocialMediaForm from '../Forms/SocialMediaForm';
import BillingInformation from '../Forms/BillingInformation';
import ShippingInformation from '../Forms/ShippingInformation';
import AccountSettingsForm from '../Forms/AccountSettingsForm';
import { userUpdate } from '../Networks';
import FileUpload from '../components/FileUpload';

class AccountSettings extends Component {

  submit = values => {
    console.log(values);
    try {
      const userdata = {
        name: values.acc_name,
        pass: values.password,
        email: values.new_email,
        website_url: values.website_url,
        about: values.about,
      };
      userUpdate(userdata).then((response) => {
        console.log(response);
      });
    } catch (e) {
      console.log(`Axios request failed: ${e}`);
    }

  }

  socialsubmit = values => {
    console.log(values);
  }

  render() {
    return (
      <div className="dashboard-content">
        <div className="headline buttons primary">
          <h4>Account Settings</h4>
        </div>
        <div className="form-box-items">
          <div className="form-box-item">
            <h4>Profile Information</h4>
            <hr className="line-separator" />
            <div className="profile-image">
              {/* <div className="profile-image-data">
                <figure className="user-avatar medium">
                  <img src="images/dashboard/profile-default-image.png" alt="profile-default" />
                </figure>
                <p className="text-header">Profile Photo</p>
                <p className="upload-details">Minimum size 70x70px</p>
              </div> */}
              <FileUpload></FileUpload>              
            </div>
            <AccountSettingsForm onSubmit={this.submit}></AccountSettingsForm>
          </div>
          <div className="form-box-item spaced">
            <SocialMediaForm onChange={this.socialsubmit}></SocialMediaForm>
          </div>
          <div className="form-box-item">
            <BillingInformation></BillingInformation>
          </div>
          <div className="form-box-item padded">
            <ShippingInformation></ShippingInformation>
          </div>
        </div>
      </div>
    );
  }

}

export default AccountSettings;