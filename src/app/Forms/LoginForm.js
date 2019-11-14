import React, { Component } from "react";
import { Link } from "react-router-dom";
import { LoginFormValidation } from "../const";
import { login, loginCheckandCreate } from "../../app/Networks";
import FacebookLogin from "react-facebook-login";
import GoogleLogin from "react-google-login";
import { withRouter } from "react-router-dom";

import FormValidator from "../FormValidator";

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.validator = new FormValidator(LoginFormValidation);

    this.state = {
      username: "",
      password: "",
      validation: this.validator.valid()
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.submitted = false;
  }

  handleInputChange(event) {
    const { name, value } = event.target;
    let formv = {
      [name]: value
    };
    this.setState(formv);
  }

  handleSubmit(event) {
    event.preventDefault();

    const validation = this.validator.validate(this.state);
    this.setState({ validation });
    this.submitted = true;

    if (validation.isValid) {
      try {
        const payload = {
          name: this.state.username,
          pass: this.state.password
        };
        login(payload).then(response => {
          if (response.data.invalid) {
            document.getElementById("error").innerHTML = response.data.invalid;
            return false;
          }
          const userdetails = {
            csrf: response.data.csrf_token,
            uid: response.data.uid,
            avatar: response.data.avatar
          };
          this.setState({ user: userdetails });
          localStorage.setItem("csrf", response.data.csrf_token);
          localStorage.setItem("avatar", response.data.user_pic);
          localStorage.setItem("uid", response.data.uid);
          localStorage.setItem("username", response.data.name);
          this.props.history.push("/");
        });
      } catch (e) {
        console.log(`Axios request failed: ${e}`);
      }
    }
  }

  responseGoogle(response) {
    loginCheckandCreate(response).then(response => {
      console.log(response.data);
      if (response.data.status === 1) {
        console.log("user logged in");
      }
    });
  }

  responseFacebook() {}

  render() {
    let validation = this.submitted
      ? this.validator.validate(this.state)
      : this.state.validation;

    return (
      <div className="form-popup">
        <div className="form-popup-headline secondary">
          <h2>Login to your Account</h2>
          <p>Enter now to your account and start buying and selling!</p>
        </div>
        <div className="form-popup-content">
          <form
            onSubmit={this.handleSubmit}
            id="login-form2"
            autoComplete="offs"
          >
            <div className="input-container">
              <label htmlFor="username5" className="rl-label">
                Username
              </label>
              <input
                name="username"
                type="text"
                placeholder="Enter your username here..."
                value={this.state.username}
                onChange={this.handleInputChange}
              />
              <span className="form-error">{validation.username.message}</span>
            </div>
            <div className="input-container">
              <label htmlFor="password5" className="rl-label">
                Password
              </label>
              <input
                name="password"
                type="password"
                placeholder="Enter your password here..."
                value={this.state.password}
                onChange={this.handleInputChange}
              />
              <span className="form-error">{validation.password.message}</span>
            </div>
            <input name="remember" id="remember" type="checkbox" />
            <label htmlFor="remember" className="label-check">
              <span className="checkbox primary primary">
                <span></span>
              </span>
              Remember username and password
            </label>
            <p>
              {" "}
              Back to home?{" "}
              <Link to={`/`} className={"primary"}>
                Home
              </Link>
            </p>
            &nbsp;
            <p>
              {" "}
              New to Pigeons World?{" "}
              <Link to={`/user-register`} className={"primary"}>
                Sign up now
              </Link>
            </p>
            <button type="submit" className="button mid dark">
              Login <span className="primary">Now!</span>
            </button>
            <span id="error" className="form-error"></span>
          </form>
          <hr className="line-separator double" />

          <FacebookLogin
            appId="Your FacebookAPP ID"
            autoLoad={false}
            fields="name,email,picture"
            callback={this.responseFacebook}
            cssClass="button mid fb half mt-0"
          />

          <GoogleLogin
            clientId="451309071348-s18cpe800jrf5ajf4kq1drne328clv97.apps.googleusercontent.com"
            buttonText="Login with Google"
            onSuccess={this.responseGoogle}
            onFailure={this.responseGoogle}
            className="button mid tertiary half gchanges mt-0"
          />
        </div>
      </div>
    );
  }
}

export default withRouter(LoginForm);

// const validate = values => {
//   const errors = {};
//   if (!values.username) {
//     errors.username = "Required";
//   }
//   if (!values.password) {
//     errors.password = "Required";
//   }
//   return errors;
// };

// const responseFacebook = response => {
//   console.log(response);
// };

// const responseGoogle = response => {
//   loginCheckandCreate(response).then(response => {
//     console.log(response.data);
//     if (response.data.status === 1) {
//     }
//   });
// };

// let LoginForm = props => {
//   const { handleSubmit } = props;
//   return (
//     <div className="form-popup">
//       <div className="form-popup-headline secondary">
//         <h2>Login to your Account</h2>
//         <p>Enter now to your account and start buying and selling!</p>
//       </div>
//       <div className="form-popup-content">
//         <form onSubmit={handleSubmit} id="login-form2" autoComplete="offs">
//           <div className="input-container">
//             <label htmlFor="username5" className="rl-label">
//               Username
//             </label>
//             <Field
//               name="username"
//               component={renderField}
//               type="text"
//               placeholder="Enter your username here..."
//             />
//           </div>
//           <div className="input-container">
//             <label htmlFor="password5" className="rl-label">
//               Password
//             </label>
//             <Field
//               name="password"
//               component={renderField}
//               type="password"
//               placeholder="Enter your password here..."
//             />
//           </div>
//           <Field
//             name="remember"
//             id="remember"
//             component="input"
//             type="checkbox"
//           />
//           <label htmlFor="remember" className="label-check">
//             <span className="checkbox primary primary">
//               <span></span>
//             </span>
//             Remember username and password
//           </label>
//           <p>
//             {" "}
//             Back to home?{" "}
//             <Link to={`/`} className={"primary"}>
//               Home
//             </Link>
//           </p>
//           &nbsp;
//           <p>
//             {" "}
//             New to Pigeons World?{" "}
//             <Link to={`/user-register`} className={"primary"}>
//               Sign up now
//             </Link>
//           </p>
//           <span id="error"></span>
//           <button type="submit" className="button mid dark">
//             Login <span className="primary">Now!</span>
//           </button>
//         </form>
//         <hr className="line-separator double" />

//         <FacebookLogin
//           appId="Your FacebookAPP ID"
//           autoLoad={false}
//           fields="name,email,picture"
//           callback={responseFacebook}
//           cssClass="button mid fb half mt-0"
//         />

//         <GoogleLogin
//           clientId="451309071348-s18cpe800jrf5ajf4kq1drne328clv97.apps.googleusercontent.com"
//           buttonText="Login with Google"
//           onSuccess={responseGoogle}
//           onFailure={responseGoogle}
//           className="button mid tertiary half gchanges mt-0"
//         />
//       </div>
//     </div>
//   );
// };

// LoginForm = reduxForm({
//   // a unique name for the form
//   form: "login",
//   validate
// })(LoginForm);

// export default LoginForm;
