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

/**
 * Method used to render input field with error highlight.
 * 
 * @param {*} param0 
 */
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

/**
 * Method used to render textarea field with error highlight.
 * 
 * @param {*} param0 
 */
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

/**
* Method used to render input field with error message.
* 
* @param {*} param0 
*/
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

/**
 * 
 * @param {string} string 
 * @param {integer} limit 
 * @param {placeholder} ellipsis 
 */
export function substring(string, limit, ellipsis) {
  let text = string;
  if (string.length > limit) {
    text = string.substring(0, 18) + ellipsis;
  }
  return text;
}

export function preparecommentobject(commenttxt, nid) {
  const msg = {
    comment_body: (commenttxt) ? commenttxt : 'Pakkalam',
    created: + new Date(),
    uid: 1,
    subject: commenttxt,
    uname: 'admin',
    id: nid
  };

  return msg;
}