import React from 'react';
import LoginForm from '../Forms/LoginForm';
import { login } from '../Networks';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      user: []
    }
  }

  submit = values => {
    try {
      const userdata = {
        name: values.username,
        pass: values.password
      };
      login(userdata).then((response) => {
        const userdetails = {
          'csrf': response.data.csrf_token,
          'uid': response.data.uid,
          'avatar': response.data.avatar
        }
        this.setState({ user: userdetails })
        localStorage.setItem('csrf', response.data.csrf_token);
        localStorage.setItem('avatar', response.data.user_pic);
        localStorage.setItem('uid', response.data.current_user.uid);
        this.props.history.push("/");
      });
    } catch (e) {
      console.log(`Axios request failed: ${e}`);
    }

  }

  render() {
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
