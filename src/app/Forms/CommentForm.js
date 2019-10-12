import React from 'react';
import Avatar from "../assets/avatar.jpg";
import { Field, reduxForm } from "redux-form";

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
          <Field name="comment" component="textarea" type="text" placeholder="Write your comment here..." />
          <button className="button primary">Post Comment</button>
        </form>
      </div>
    </div>
  );
}


CommentForm = reduxForm({
  // a unique name for the form
  form: 'comment'
})(CommentForm)

export default CommentForm