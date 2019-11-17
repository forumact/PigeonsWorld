import React, { Component } from "react";
import { Link } from "react-router-dom";
import CommentForm from "../Forms/CommentForm";
import { fetchCommentList } from "../Networks";


class CommentsList extends Component {
  constructor() {
    super();
    this.state = {
      commentlist: []
    };

    this.attachComment = this.attachComment.bind(this);
  }

  attachComment(messagejson) {
    this.setState({
      commentlist: [...this.state.commentlist, messagejson]
    });
  }

  render() {
    return (
      <div>
        <div className="post-tab xmtab">
          <div className="tab-header primary">
            <div className="tab-item selected">
              <p className="text-header">
                Comments ({this.state.commentlist.length})
              </p>
            </div>
          </div>
          <div className="tab-content void open">
            <div className="comment-list">
              {this.state.commentlist.map(c => (
                <div key={c.cid}>
                  <div className="comment-wrap" key={c.cid}>
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
                      <div
                        dangerouslySetInnerHTML={{ __html: c.comment_body }}
                      />
                    </div>
                  </div>
                  <hr className="line-separator" />
                </div>
              ))}
              <div className="clearfix"></div>
              <CommentForm
                attachComment={this.attachComment}
                nid={this.props.nid}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    const data = {
      nid: this.props.nid
    };

    fetchCommentList(data).then(response => {
      this.setState({
        commentlist: response.data
      });      
    });
  }

  componentDidUpdate(prevProps) {
    if (this.props.nid !== prevProps.nid) {
      //Typical usage, don't forget to compare the props
      const data = {
        nid: this.props.nid
      };

      fetchCommentList(data).then(response => {
        this.setState({
          commentlist: response.data
        });        
      });
    }
  }
}

export default CommentsList;
