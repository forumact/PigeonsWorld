import React from 'react';
import LoginForm from '../Forms/LoginForm';
import axios from 'axios';

class Login extends React.Component {
  submit = values => {
    try {
      //axios.get(`http://pegionsworld.local/api/pigeons`)
      console.log(values);
      const userdata = {
        name: values.username,
        pass: values.password
      };
      axios.post(`http://pegionsworld.local/user/login?_format=json`, userdata, {
        headers: {
          'Content-Type': 'application/json',
        }
      })
        .then(res => {
          const user = res.data;
          console.log(user.csrf_token);
          localStorage.setItem('csrf', user.csrf_token);
          this.props.history.push("/");
        })
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

  componentDidMount() {
    document.title = `Pigeons World | Login`;
  }

}


export default Login;