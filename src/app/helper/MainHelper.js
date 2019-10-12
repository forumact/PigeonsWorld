import React, { useEffect } from 'react'

/**
 * Method used to set page title
 * @param titleOrFn
 */
export function useTitle(titleOrFn) {
  useEffect(
    () => {
      document.title = `Pigeons World | ${titleOrFn}`;
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