import React, { Component } from 'react'
import HeadLine from "../components/HeadLine";
import BlogCard from "../components/Blog/BlogCard";
import { connect } from "react-redux";
import { GET_BLOGS } from '../Redux/actions';

class Blog extends Component {

  // constructor() {
  //   super();
  //   this.state = {
  //     bloglist: []
  //   }
  // }

  render() {
    const title = "Blog";
    return (
      <div>
        <HeadLine title={title}></HeadLine>
        <div className="section-wrap">
          <div className="section">
            <div className="blog-post-preview v1 column3-wrap">
              {this.props.blogs.map(blog => (
                <BlogCard key={blog.id} blog={blog}></BlogCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.props.getBlogs();
  }

}


const mapStateToProps = (state) => {
  return {
    blogs: state.blogs
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getBlogs: () => {
      dispatch({ type: GET_BLOGS });
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Blog);
