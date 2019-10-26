import React, { Component } from 'react';
import { Link } from "react-router-dom";
import CommentForm from "../Forms/CommentForm";
import { fetchCommentList, commentcreate } from '../Networks';
import { reset } from 'redux-form';
import { preparecommentobject } from '../helper';

class CommentsList extends Component {

  constructor() {
    super();
    this.state = {
      commentlist: []
    }
  }


  submit = (values, dispatch) => {
    // print the form values to the console
    console.log(values.comment)
    let msg = preparecommentobject(values.comment, this.props.nid);
    this.setState({
      commentlist: [...this.state.commentlist, msg],
    });
    dispatch(reset('comment'));
    commentcreate(msg);
  }

  render() {
    return (
      <div>
        <div className="post-tab xmtab">
          <div className="tab-header primary">
            <div className="tab-item selected">
              <p className="text-header">Comments ({this.state.commentlist.length})</p>
            </div>
          </div>
          <div className="tab-content void open">
            <div className="comment-list">
              {this.state.commentlist.map(c => (
                <div key={c.id}>
                  <div className="comment-wrap" key={c.id}>
                    <Link to={`/user/${c.uid}`}>
                      <figure className="user-avatar medium">
                        <img src={c.avatar} alt="" />
                      </figure>
                    </Link>
                    <div className="comment">
                      <p className="text-header">{c.uname}</p>
                      {/* <span className="pin greyed">Purchased</span> */}
                      <p className="timestamp">{c.created}</p>
                      {/* <a href="/" className="report">Report</a> */}
                      <div dangerouslySetInnerHTML={{ __html: c.comment_body }} />
                    </div>
                  </div>
                  <hr className="line-separator" />
                </div>
              ))}
              <div className="clearfix"></div>
              <CommentForm onSubmit={this.submit} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    const data = {
      id: this.props.nid
    };

    fetchCommentList(data).then((response) => {
      this.setState({
        commentlist: response.data
      })
      //document.title = `Pigeons World | ${response.data.title}`;
    });
  }

  componentDidUpdate(prevProps) {

    if (this.props.nid !== prevProps.nid) {
      //Typical usage, don't forget to compare the props
      const data = {
        id: this.props.nid
      };

      fetchCommentList(data).then((response) => {
        this.setState({
          commentlist: response.data
        })
        //document.title = `Pigeons World | ${response.data.title}`;
      });
    }

  }
}

export default CommentsList;