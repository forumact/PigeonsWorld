import React from 'react';

const renderField = ({
                       input,
                       placeholder,
                       type,
                       meta: {touched, error, warning}
                     }) => (

    <div>
      <input {...input} placeholder={placeholder} type={type} className={(touched && error) ? 'invalid' : ''}/>
    </div>

)

export default renderField;