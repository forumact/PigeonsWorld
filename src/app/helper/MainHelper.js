import React, { useEffect } from 'react'

/**
 * Method used to set page title
 * @param titleOrFn
 */
export function useTitle(titleOrFn) {
  useEffect(
    () => {
      document.title = `Pegions World | ${titleOrFn}`;
    }
  );
}

/**
 * Const used to hide Header and Footer regions.
 * @type {*[]}
 */
export const HideHeaderRegion = ['/login', '/user-register'];

export const renderField = ({
  input,
  placeholder,
  type,
  meta: { touched, error, warning }
}) => (
    <div>
      <input {...input} placeholder={placeholder} type={type} className={(touched && error) ? 'invalid' : ''} />
    </div>
  )

  export const renderFieldTextarea = ({
    input,
    placeholder,
    type,
    meta: { touched, error, warning }
  }) => (
      <div>
        <textarea {...input} placeholder={placeholder} type={type} className={(touched && error) ? 'invalid' : ''}></textarea>
      </div>
    )

export const renderFieldError = ({
  input,
  placeholder,
  type,
  meta: { touched, error, warning }
}) => (
    <div>
      <input {...input} placeholder={placeholder} type={type} />
      {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  )

export function substring(string, limit, ellipsis) {
  let text = string;
  if (string.length > limit) {
    text = string.substring(0, 20) + ellipsis;
  }
  return text;
}