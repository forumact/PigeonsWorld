import React from 'react';
import LoginForm from '../Forms/LoginForm';
import { login } from '../Networks';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      csrf: ''
    }
  }

  submit = values => {
    try {
      const userdata = {
        name: values.username,
        pass: values.password
      };
      login(userdata).then((response) => {
        this.setState({ csrf: response.data.csrf_token })
        localStorage.setItem('csrf', response.data.csrf_token);
        this.props.history.push("/");
      });
    } catch (e) {
      console.log(`Axios request failed: ${e}`);
    }

  }

  render() {
    console.log(this.projectName);
    return (
      <div className="section-wrap">
        <div className="section">
          <LoginForm onSubmit={this.submit} />
        </div>
      </div>
    );
  }  

}


export default Login;
