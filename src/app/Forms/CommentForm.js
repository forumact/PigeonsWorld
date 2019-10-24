import React from 'react';
import { Avatar, renderFieldTextarea } from "../helper";
import { Field, reduxForm } from "redux-form";

const validate = values => {
  const errors = {}
  if (!values.comment) {
    errors.comment = 'Required'
  }
  return errors
}

let CommentForm = props => {
  const { handleSubmit } = props
  return (
    <div>
      <h3>Leave a Comment</h3>
      <div className="comment-wrap comment-reply">
        <a href="user-profile.html">
          <figure className="user-avatar medium">
            <img src={Avatar} alt="" />
          </figure>
        </a>
        <form className="comment-reply-form" onSubmit={handleSubmit}>
          <Field name="comment" component={renderFieldTextarea} type="textarea" placeholder="Write your comment here..." />
          <button className="button primary">Post Comment</button>
        </form>
      </div>
    </div>
  );
}


CommentForm = reduxForm({
  // a unique name for the form
  form: 'comment',
  validate
})(CommentForm)

export default CommentForm