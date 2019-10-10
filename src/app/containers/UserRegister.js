import React from 'react';

const UserRegister = () => {
    return (
        <div className="section-wrap">
            <div className="section">
                <div className="form-popup">
                    <div className="form-popup-headline secondary">
                        <h2>Register Account</h2>
                        <p>Register now and start making money from home!</p>
                    </div>
                    <div className="form-popup-content">
                        <form id="register-form4">
                            <label for="email_address6" className="rl-label required">Email Address</label>
                            <input type="email" id="email_address6" name="email_address6" placeholder="Enter your email address here..." />
                            <label for="username6" className="rl-label">Username</label>
                            <input type="text" id="username6" name="username6" placeholder="Enter your username here..." />
                            <label for="password6" className="rl-label required">Password</label>
                            <input type="password" id="password6" name="password6" placeholder="Enter your password here..." />
                            <label for="repeat_password6" className="rl-label required">Repeat Password</label>
                            <input type="password" id="repeat_password6" name="repeat_password6" placeholder="Repeat your password here..." />
                            <button className="button mid dark">Register <span className="primary">Now!</span></button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserRegister;