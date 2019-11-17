import React, { Component } from "react";
import { Avatar, preparecommentobject } from "../helper";
import { CommentFormValidation } from "../const";
import { commentcreate } from "../Networks";
import FormValidator from "../FormValidator";

class CommentForm extends Component {
  constructor(props) {
    super(props);

    this.validator = new FormValidator(CommentFormValidation);

    this.state = {
      comment: "",
      validation: this.validator.valid()
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.submitted = false;
  }

  handleInputChange(event) {
    const { name, value } = event.target;
    let formv = {
      [name]: value
    };
    console.log(formv);
    this.setState(formv);
  }

  handleSubmit(event) {
    event.preventDefault();

    console.log(this.state);
    const validation = this.validator.validate(this.state);
    this.setState({ validation });
    this.submitted = true;

    if (validation.isValid) {
      let msg = preparecommentobject(this.state.comment, this.props.nid);
      this.props.attachComment(msg);
      commentcreate(msg);
      this.setState({
        comment: ""
      });
    }
  }

  render() {
    let validation = this.submitted
      ? this.validator.validate(this.state)
      : this.state.validation;

    return (
      <div>
        <h3>Leave a Comment</h3>
        <div className="comment-wrap comment-reply">
          <a href="user-profile.html">
            <figure className="user-avatar medium">
              <img src={Avatar} alt="user" />
            </figure>
          </a>
          <form
            className="comment-reply-form"
            onSubmit={this.handleSubmit}
            autoComplete="off"
          >
            <textarea
              name="comment"
              type="text"
              placeholder="Write your comment here..."
              value={this.state.comment}
              onChange={this.handleInputChange}
            ></textarea>
            <span className="form-error">{validation.comment.message}</span>
            <button className="button primary">Post Comment</button>
          </form>
        </div>
      </div>
    );
  }
}

export default CommentForm;
