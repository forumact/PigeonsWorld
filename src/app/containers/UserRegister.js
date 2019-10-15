import React from 'react';
import RegisterForm from "../Forms/RegisterForm";

class UserRegister extends React.Component {
  submit = values => {
    // print the form values to the console
    console.log(values)
  }

  render() {
    return (
      <div className="section-wrap">
        <div className="section">
          <RegisterForm onSubmit={this.submit} />
        </div>
      </div>
    );
  }

  componentDidMount() {
    document.title = `Pegions World | User Register`;
  }
}

export default UserRegister;
