import React, { Component } from "react";
import { city } from "../const";
import { userUpdate, fetchUserDetails } from "../Networks";
import FileUpload from "../components/FileUpload";

const validate = values => {
  const errors = {};
  if (!values.username) {
    errors.username = "Required";
  }
  if (!values.new_pwd) {
    errors.new_pwd = "Required";
  }
  if (!values.new_pwd2) {
    errors.new_pwd2 = "Required";
  }
  if (!values.email) {
    errors.email = "Required";
  }

  if (!values.website) {
    errors.website = "Required";
  }

  if (!values.about) {
    errors.about = "Required";
  }

  return errors;
};

class AccountSettingsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      username: "",
      mobile: "",
      new_pwd: "",
      new_pwd2: "",
      website: "",
      email: "",
      city: "",
      about: "",
      show_balance: "",
      notification: "",
      user_picture: "",
      uid: 0
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputFileChange = this.handleInputFileChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
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
    console.log(this.state);
    const file = document.querySelector(".file");
    file.value = "";
    userUpdate(this.state).then(response => {
      console.log(response);
      this.setState({
        first_name: "",
        last_name: "",
        username: "",
        mobile: "",
        new_pwd: "",
        new_pwd2: "",
        website: "",
        email: "",
        city: "",
        about: "",
        show_balance: "",
        notification: "",
        user_picture: "",
        uid: response.data.uid
      });
    });
  }

  render() {
    const fileApi = "/api/v1/file/upload/user/user/user_picture";
    return (
      <div>
        <form id="profile-info-form" onSubmit={this.handleSubmit}>
          <h4>Profile Information</h4>
          <hr className="line-separator" />
          <div className="profile-image">
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
              value={this.state.user_picture}
              onChange={this.handleInputChange}
            ></input>
          </div>
          <div className="input-container half">
            <label htmlFor="first_name" className="rl-label">
              First Name
            </label>
            <input
              id="first_name"
              name="first_name"
              value={this.state.first_name}
              onChange={this.handleInputChange}
              type="text"
              placeholder="Enter your first name here..."
            />
          </div>
          <div className="input-container half">
            <label htmlFor="last_name" className="rl-label">
              Last Name
            </label>
            <input
              id="last_name"
              name="last_name"
              value={this.state.last_name}
              onChange={this.handleInputChange}
              type="text"
              placeholder="Enter your last name here..."
            />
          </div>
          <div className="input-container">
            <label htmlFor="username" className="rl-label required">
              Account Name
            </label>
            <input
              id="username"
              name="username"
              value={this.state.username}
              onChange={this.handleInputChange}
              type="text"
              placeholder="Enter your account name here..."
            />
          </div>
          <div className="input-container">
            <label htmlFor="mobile" className="rl-label required">
              Mobile
            </label>
            <input
              id="mobile"
              name="mobile"
              value={this.state.mobile}
              onChange={this.handleInputChange}
              type="text"
              placeholder="Enter your mobile number here..."
            />
          </div>
          <div className="input-container half">
            <label htmlFor="new_pwd" className="rl-label">
              New Password
            </label>
            <input
              id="new_pwd"
              name="new_pwd"
              value={this.state.new_pwd}
              onChange={this.handleInputChange}
              type="password"
              placeholder="Enter your password here..."
            />
          </div>

          <div className="input-container half">
            <label htmlFor="new_pwd2" className="rl-label">
              Repeat Password
            </label>
            <input
              id="new_pwd2"
              name="new_pwd2"
              value={this.state.new_pwd2}
              onChange={this.handleInputChange}
              type="password"
              placeholder="Repeat your password here..."
            />
          </div>

          <div className="input-container">
            <label htmlFor="email" className="rl-label">
              Email
            </label>
            <input
              id="email"
              name="email"
              value={this.state.email}
              onChange={this.handleInputChange}
              type="email"
              placeholder="Enter your email address here..."
            />
          </div>

          <div className="input-container half">
            <label htmlFor="website" className="rl-label">
              Website
            </label>
            <input
              id="website"
              name="website"
              value={this.state.website}
              onChange={this.handleInputChange}
              type="text"
              placeholder="Enter your website link here..."
            />
          </div>

          <div className="input-container half">
            <label htmlFor="city" className="rl-label required">
              City
            </label>
            <label htmlFor="city" className="select-block">
              <select
                name="city"
                form="carform"
                value={this.state.city}
                onChange={this.handleInputChange}
              >
                <option value="0">Select your City...</option>
                {city.map((c, i) => (
                  <option value={c} key={i}>
                    {c}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <div className="input-container">
            <label htmlFor="about" className="rl-label">
              About
            </label>
            <input
              id="about"
              name="about"
              value={this.state.about}
              onChange={this.handleInputChange}
              type="text"
              placeholder="This will appear bellow to your avatar... (max 140 char)"
            />
          </div>

          <div className="input-container">
            <label className="rl-label">Preferences</label>
            <input
              id="notification"
              name="notification"
              value={this.state.notification}
              onChange={this.handleInputChange}
              type="checkbox"
              component="input"
            />
            <label htmlFor="notification" className="label-check">
              <span className="checkbox primary">
                <span></span>
              </span>
              Send me email notifications
            </label>
          </div>
          {/* <button form="profile-info-form" className="button mid-short primary">Save Changes</button> */}
          <input
            type="submit"
            className="button mid-short primary"
            value="Save Changes"
          />
        </form>
      </div>
    );
  }

  componentDidMount() {
    console.log(this.props);
    fetchUserDetails().then(response => {
      this.setState({
        first_name: response.data.first_name,
        last_name: response.data.last_name,
        username: response.data.username,
        mobile: response.data.mobile,
        new_pwd: response.data.uid,
        new_pwd2: response.data.uid,
        website: response.data.website,
        email: response.data.email,
        city: response.data.city,
        about: response.data.about,
        show_balance: "",
        notification: response.data.notification,
        user_picture: "",
        uid: response.data.uid
      });
    });
  }
}

export default AccountSettingsForm;
