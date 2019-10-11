import React from 'react';
import {Field, reduxForm} from 'redux-form'

let RegisterForm = props => {
  const {handleSubmit} = props
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
              <Field name="email_address" component="input" type="email" placeholder="Enter your email address here..."/>
              <label htmlFor="username6" className="rl-label">Username</label>
              <Field name="username6" component="input" type="text" placeholder="Enter your username here..."/>
              <label htmlFor="password6" className="rl-label required">Password</label>
              <Field name="password6" component="input" type="password" placeholder="Enter your password here..."/>
              <label htmlFor="repeat_password6" className="rl-label required">Repeat Password</label>
              <Field name="repeat_password6" component="input" type="password" placeholder="Repeat your password here..."/>
              <button className="button mid dark">Register <span className="primary">Now!</span></button>
            </form>
          </div>
        </div>
      </div>
  );
}

RegisterForm = reduxForm({
  // a unique name for the form
  form: 'register'
})(RegisterForm)

export default RegisterForm;