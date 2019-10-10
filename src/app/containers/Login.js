import React from 'react';
import {Link} from "react-router-dom";
import {useTitle} from "../helper/MainHelper";

const Login = () => {
    const title = 'Login';
    useTitle(title);
    return (
        <div className="section-wrap">
            <div className="section">
                <div className="form-popup">
                    <div className="form-popup-headline secondary">
                        <h2>Login to your Account</h2>
                        <p>Enter now to your account and start buying and selling!</p>
                    </div>
                    <div className="form-popup-content">
                        <form id="login-form2">
                            <label htmlFor="username5" className="rl-label">Username</label>
                            <input type="text" id="username5" name="username5"
                                   placeholder="Enter your username here..."/>
                            <label htmlFor="password5" className="rl-label">Password</label>
                            <input type="password" id="password5" name="password5"
                                   placeholder="Enter your password here..."/>
                            <input type="checkbox" id="remember2" name="remember2"/>
                            <label htmlFor="remember2" className="label-check">
                                <span className="checkbox primary primary"><span></span></span>
                                Remember username and password
                            </label>
                            {/*<p>Forgot your password? <a href="/" className="primary">Click here!</a>*/}
                            {/*    <span className="right"> <Link to="/">Home</Link></span>*/}
                            {/*</p>*/}
                            <p> Back to home? <Link to={`/`} className={'primary'}>Home</Link></p>
                            &nbsp;
                            <p> New to Pigeons World? <Link to={`/user-register`} className={'primary'}>Sign up now</Link></p>
                            <button className="button mid dark">Login <span className="primary">Now!</span>
                            </button>
                        </form>
                        <hr className="line-separator double"/>
                        <a href="/" className="button mid fb half">Login with Facebook</a>
                        <a href="/" className="button mid twt half">Login with Twitter</a>
                    </div>
                </div>

            </div>
        </div>
    );
}


export default Login;