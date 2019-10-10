import React, {Component} from 'react';
import Avatar from "../assets/avatar.jpg";

class CommentForm extends Component {
    render() {
        return (
            <div>
                <h3>Leave a Comment</h3>
                <div className="comment-wrap comment-reply">
                    <a href="user-profile.html">
                        <figure className="user-avatar medium">
                            <img src={Avatar} alt=""/>
                        </figure>
                    </a>
                    <form className="comment-reply-form">
                        <textarea name="treply1" placeholder="Write your comment here..."></textarea>
                        <button className="button primary">Post Comment</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default CommentForm;