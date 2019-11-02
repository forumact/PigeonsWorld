import React, { Component } from "react";
import { userRegister } from "../Networks";
import FileUpload from "../components/FileUpload";
import { withRouter } from "react-router-dom";

class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      user_name: "",
      email: "",
      password: "",
      user_picture: ""
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputFileChange = this.handleInputFileChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    let formv = {
      [name]: value
    };
    this.setState(formv);
  }

  handleInputFileChange(field, value) {
    this.setState({ [field]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    //console.log(this.state);
    const file = document.querySelector(".file");
    file.value = "";
    userRegister(this.state).then(response => {
      console.log(response.data.uid);
      if (response.data.uid > 1) {
        //this.props.history.push(`/user/${response.data.uid}`);
      }
    });

    return false;
  }
  render() {
    const fileApi = "/api/v1/file/upload/user/user/user_picture";
    return (
      <div className="form-popup">
        <div className="form-popup-headline secondary">
          <h2>Register Account</h2>
          <p>Register now and start making money from home!</p>
        </div>
        <div className="form-popup-content">
          <form
            id="register-form4"
            onSubmit={this.handleSubmit}
            autoComplete="off"
          >
            <label htmlFor="first_name" className="rl-label required">
              First Name
            </label>
            <input
              name="first_name"
              type="text"
              placeholder="Enter them first name here..."
              value={this.state.first_name}
              onChange={this.handleInputChange}
              maxLength="150"
            ></input>
            <label htmlFor="last_name" className="rl-label required">
              Last Name
            </label>
            <input
              name="last_name"
              type="text"
              placeholder="Enter them first name here..."
              value={this.state.last_name}
              onChange={this.handleInputChange}
              maxLength="150"
            ></input>
            <label htmlFor="user_name" className="rl-label required">
              User Name
            </label>
            <input
              name="user_name"
              type="text"
              placeholder="Enter them user name here..."
              value={this.state.user_name}
              onChange={this.handleInputChange}
              maxLength="150"
            ></input>
            <label htmlFor="email" className="rl-label required">
              Email
            </label>
            <input
              name="email"
              type="text"
              placeholder="Enter them email here..."
              value={this.state.email}
              onChange={this.handleInputChange}
              maxLength="150"
            ></input>

            <label htmlFor="password" className="rl-label required">
              Password
            </label>
            <input
              name="password"
              type="text"
              placeholder="Enter them password name here..."
              value={this.state.password}
              onChange={this.handleInputChange}
              maxLength="150"
            ></input>
            <label htmlFor="password" className="rl-label">
              Profile Image
            </label>
            <FileUpload
              onChange={this.handleInputFileChange}
              targetField="user_picture"
              fileApi={fileApi}
            ></FileUpload>
            <input
              className="hide"
              name="user_picture"
              id="pic1"
              type="hidden"
              placeholder="Enter them item name here..."
              value={this.state.item_picture}
              onChange={this.handleInputChange}
            ></input>
            <button className="button mid dark">
              Register <span className="primary">Now!</span>
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(RegisterForm);
