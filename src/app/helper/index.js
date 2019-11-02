import React, { useEffect } from "react";
import defaultPic from "../assets/avatar.jpg";

export const Avatar = localStorage.getItem("avatar")
  ? localStorage.getItem("avatar")
  : defaultPic;

export const Uid = localStorage.getItem("uid")
  ? localStorage.getItem("uid")
  : "";
export const Username = localStorage.getItem("username")
  ? localStorage.getItem("username")
  : "Anonymous";

/**
 * Method used to set page title
 * @param titleOrFn
 */
export function useTitle(titleOrFn) {
  useEffect(() => {
    document.title = `Pigeons World | ${titleOrFn}`;
  });
}

/**
 * Const used to hide Header and Footer regions.
 * @type {*[]}
 */
export const HideHeaderRegion = ["/login", "/user-register"];

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
    <input
      {...input}
      placeholder={placeholder}
      type={type}
      className={touched && error ? "invalid" : ""}
    />
  </div>
);

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
    <textarea
      {...input}
      placeholder={placeholder}
      type={type}
      className={touched && error ? "invalid" : ""}
    ></textarea>
  </div>
);

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
      ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
  </div>
);

/**
 *
 * @param {string} string
 * @param {integer} limit
 * @param {placeholder} ellipsis
 */
export function substring(string, limit, ellipsis) {
  let text = string;
  if (string && string.length > limit) {
    text = string.substring(0, limit) + ellipsis;
  }
  return text;
}

export function preparecommentobject(commenttxt, nid) {
  const msg = {
    comment_body: commenttxt ? commenttxt : "Pakkalam",
    created: +new Date(),
    uid: Uid,
    subject: commenttxt,
    uname: Username,
    id: nid,
    avatar: Avatar
  };

  return msg;
}

export function querystring(params) {
  const querystring = Object.keys(params)
    .map(key => key + "=" + params[key])
    .join("&");
  return querystring;
}

export function arrayRemove(arr, value) {
  return arr.filter(function(ele) {
    return ele != value;
  });
}


export const IndianRupee = '₹';