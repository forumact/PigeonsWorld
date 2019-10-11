import React from 'react';
import {useTitle} from "../helper/MainHelper";
import LoginForm from '../components/LoginForm';

class Login extends React.Component {
    //const title = 'Login';
    //useTitle(title);
    submit = values => {
        // print the form values to the console
        console.log(values)
    }
    render(){
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