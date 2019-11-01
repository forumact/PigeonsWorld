import React from "react";
import LoginForm from "../Forms/LoginForm";
import { login } from "../Networks";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userobject: ""
    };
  }

  submit = values => {
    try {
      const payload = {
        name: values.username,
        pass: values.password
      };

      //this.props.getUserlogin(payload);

      login(payload).then(response => {
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
  };

  redirect() {
    this.props.history.push("/");
  }

  render() {
    // const { userobject } = this.props;
    // const isactive = Object.keys(userobject).length;
    // console.log(isactive);
    return (
      <div className="section-wrap">
        <div className="section">
          {/* {(isactive > 0) ?
            this.redirect() :
            <LoginForm onSubmit={this.submit} />
          } */}
          <LoginForm onSubmit={this.submit} />
        </div>
      </div>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {
//     userobject: state.user
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     getUserlogin: (payload) => {
//       dispatch({ type: GET_USER, payload: payload });
//     },
//   }
// }

//export default connect(mapStateToProps, mapDispatchToProps)(Login);

export default Login;
