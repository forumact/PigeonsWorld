import React from 'react'
import { Field, reduxForm } from 'redux-form'

let ContactForm = props => {
    const { handleSubmit } = props
    return (
        <div className="form-popup-content">
            <form onSubmit={handleSubmit} id="login-form">
                <label htmlFor="firstName" className={'rl-label1'}>First Name</label>
                <Field name="firstName" component="input" type="text" />
                <label htmlFor="lastName">Last Name</label>
                <Field name="lastName" component="input" type="text" />
                <label htmlFor="email">Email</label>
                <Field name="email" component="input" type="email" />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

ContactForm = reduxForm({
    // a unique name for the form
    form: 'contact'
})(ContactForm)

export default ContactForm