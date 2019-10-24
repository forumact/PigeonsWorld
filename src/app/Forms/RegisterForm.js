import React from 'react';
import { Field, reduxForm } from 'redux-form'
import { renderField } from "../helper";

const validate = values => {
  const errors = {}
  if (!values.email_address) {
    errors.email_address = 'Required'
  }
  if (!values.username) {
    errors.username = 'Required'
  }
  if (!values.password) {
    errors.password = 'Required'
  }
  if (!values.repeat_password) {
    errors.repeat_password = 'Required'
  }
  return errors
}

let RegisterForm = props => {
  const { handleSubmit } = props
  return (
    <div>
      <div className="form-popup">
        <div className="form-popup-headline secondary">
          <h2>Register Account</h2>
          <p>Register now and start making money from home!</p>
        </div>
        <div className="form-popup-content">
          <form id="register-form4" onSubmit={handleSubmit}>
            <label htmlFor="email_address6" className="rl-label required">Email Address</label>
            <Field name="email_address" component={renderField} type="email" placeholder="Enter your email address here..." />
            <label htmlFor="username" className="rl-label">Username</label>
            <Field name="username" component={renderField} type="text" placeholder="Enter your username here..." />
            <label htmlFor="password" className="rl-label required">Password</label>
            <Field name="password" component={renderField} type="password" placeholder="Enter your password here..." />
            <label htmlFor="repeat_password" className="rl-label required">Repeat Password</label>
            <Field name="repeat_password" component={renderField} type="password" placeholder="Repeat your password here..." />
            <button className="button mid dark">Register <span className="primary">Now!</span></button>
          </form>
        </div>
      </div>
    </div>
  );
}

RegisterForm = reduxForm({
  // a unique name for the form
  form: 'register',
  validate
})(RegisterForm)

export default RegisterForm;