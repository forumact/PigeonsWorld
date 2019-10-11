import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Link } from "react-router-dom";

let LoginForm = props => {
    const { handleSubmit } = props
    return (
        <div className="form-popup" >
            <div className="form-popup-headline secondary">
                <h2>Login to your Account</h2>
                <p>Enter now to your account and start buying and selling!</p>
            </div>
            <div className="form-popup-content">
                <form onSubmit={handleSubmit} id="login-form2">
                    <label htmlFor="username5" className="rl-label">Username</label>
                    <Field name="firstName" component="input" type="text" placeholder="Enter your username here..." />
                    <label htmlFor="password5" className="rl-label">Password</label>
                    <Field name="password" component="input" type="password" placeholder="Enter your password here..." />
                    <Field name="checkbox" component="input" type="checkbox" />
                    <label htmlFor="remember2" className="label-check">
                        <span className="checkbox primary primary"><span></span></span>
                        Remember username and password
                            </label>
                    <p> Back to home? <Link to={`/`} className={'primary'}>Home</Link></p>
                    &nbsp;
                            <p> New to Pigeons World? <Link to={`/user-register`} className={'primary'}>Sign up now</Link></p>
                    <button className="button mid dark">Login <span className="primary">Now!</span>
                    </button>
                </form>
                <hr className="line-separator double" />
                <a href="/" className="button mid fb half">Login with Facebook</a>
                <a href="/" className="button mid twt half">Login with Twitter</a>
            </div>
        </div>
    )
}

LoginForm = reduxForm({
    // a unique name for the form
    form: 'login'
})(LoginForm)

export default LoginForm