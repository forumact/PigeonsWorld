import React, {Component} from 'react';
import Avatar from '../assets/avatar.jpg';
import CommentForm from "./CommentForm";

class CommentsList extends Component {
    render() {
        return (
            <div>
                <div className="post-tab xmtab">
                    <div className="tab-header primary">
                        <div className="tab-item selected">
                            <p className="text-header">Comments (35)</p>
                        </div>
                    </div>
                    <div className="tab-content void open">
                        <div className="comment-list">
                            <div className="comment-wrap">
                                <a href="user-profile.html">
                                    <figure className="user-avatar medium">
                                        <img src={Avatar} alt=""/>
                                    </figure>
                                </a>
                                <div className="comment">
                                    <p className="text-header">View as Customer</p>
                                    <span className="pin greyed">Purchased</span>
                                    <p className="timestamp">5 Hours Ago</p>
                                    <a href="/" className="report">Report</a>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magnada. Ut enim ad minim veniam, quis nostrud
                                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                                        irure dolor in henderit in voluptate velit esse cillum dolore eu fugiat nulla
                                        pariatur.</p>
                                </div>
                            </div>
                            <hr className="line-separator"/>
                            <div className="comment-wrap">
                                <a href="user-profile.html">
                                    <figure className="user-avatar medium">
                                        <img src={Avatar} alt=""/>
                                    </figure>
                                </a>
                                <div className="comment">
                                    <p className="text-header">View as Customer</p>
                                    <p className="timestamp">6 Days Ago</p>
                                    <a href="/" className="report">Report</a>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magnada. Ut enim ad minim veniam, quis nostrud
                                        exercitation ullamco laboris.</p>
                                </div>
                            </div>
                            <div className="clearfix"></div>
                            <hr className="line-separator"/>
                            <CommentForm></CommentForm>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CommentsList;