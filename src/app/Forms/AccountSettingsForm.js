import React from 'react';
import { Field, reduxForm } from 'redux-form'
import { renderField, city } from "../helper"


const validate = values => {
  const errors = {}
  if (!values.acc_name) {
    errors.acc_name = 'Required'
  }
  if (!values.new_pwd) {
    errors.new_pwd = 'Required'
  }
  if (!values.new_pwd2) {
    errors.new_pwd2 = 'Required'
  }
  if (!values.new_email) {
    errors.new_email = 'Required'
  }

  if (!values.website_url) {
    errors.website_url = 'Required'
  }

  if (!values.about) {
    errors.about = 'Required'
  }

  return errors
}

let AccountSettingsForm = props => {
  const { handleSubmit } = props;
  return (
    <div>
      <form id="profile-info-form" onSubmit={handleSubmit}>
        <div className="input-container">
          <label htmlFor="acc_name" className="rl-label required">Account Name</label>
          <Field id="acc_name" name="acc_name" type="text" component={renderField}
            placeholder="Enter your account name here..." />
        </div>
        <div className="input-container half">
          <label htmlFor="new_pwd" className="rl-label">New Password</label>
          <Field id="new_pwd" name="new_pwd" type="password" component={renderField}
            placeholder="Enter your password here..." />
        </div>

        <div className="input-container half">
          <label htmlFor="new_pwd2" className="rl-label">Repeat Password</label>
          <Field id="new_pwd2" name="new_pwd2" type="password" component={renderField}
            placeholder="Repeat your password here..." />
        </div>

        <div className="input-container">
          <label htmlFor="new_email" className="rl-label">Email</label>
          <Field id="new_email" name="new_email" type="email" component={renderField}
            placeholder="Enter your email address here..." />
        </div>

        <div className="input-container half">
          <label htmlFor="website_url" className="rl-label">Website</label>
          <Field id="website_url" name="website_url" type="text" component={renderField}
            placeholder="Enter your website link here..." />
        </div>

        <div className="input-container half">
          <label htmlFor="country1" className="rl-label required">City</label>
          <label htmlFor="country1" className="select-block">
            <Field name="country1" component="select">
              <option value="0">Select your City...</option>
              {city.map((c, i) => (
                <option value={c} key={i}>{c}</option>
              ))}
            </Field>
          </label>
        </div>

        <div className="input-container">
          <label htmlFor="about" className="rl-label">About</label>
          <Field id="about" name="about" type="text" component={renderField}
            placeholder="This will appear bellow your avatar... (max 140 char)" />
        </div>

        <div className="input-container">
          <label className="rl-label">Preferences</label>
          <Field id="show_balance" name="show_balance" type="checkbox" component="input" />
          <label htmlFor="show_balance" className="label-check">
            <span className="checkbox primary"><span></span></span>
            Show account balance in the status bar
          </label>
          <Field id="email_notif" name="email_notif" type="checkbox" component="input" />
          <label htmlFor="email_notif" className="label-check">
            <span className="checkbox primary"><span></span></span>
            Send me email notifications
          </label>
        </div>
        <button form="profile-info-form" className="button mid-short primary">Save Changes</button>
      </form>
    </div>
  );
}


AccountSettingsForm = reduxForm({
  form: 'accountsettings',
  validate
})(AccountSettingsForm)

export default AccountSettingsForm;