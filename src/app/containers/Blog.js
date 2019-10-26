import React, { Component } from 'react'
import HeadLine from "../components/HeadLine";
import BlogCard from "../components/Blog/BlogCard";
import { connect } from "react-redux";
import Pagination from "react-js-pagination";
import { GET_BLOGS } from '../Redux/actions';

class Blog extends Component {

  constructor(props) {
    super(props);
    this.state = {
      blogs: {},
      activePage: 1,
      itemsCountPerPage: 9,
      totalItemsCount: 1
    }

    //Bind this event on click method
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  handlePageChange(pageNumber) {
    const payload = {
      'numberofitem': 9,
      'pagenumber': pageNumber - 1,
    }
    console.log(`active page is ${pageNumber}`);
    this.props.getBlogs(payload);
    this.setState({
      activePage: pageNumber
    })
  }

  render() {
    const title = "Blog";
    const { blogs, count } = this.props.blogs;
    return (
      <div>
        <HeadLine title={title}></HeadLine>
        <div className="section-wrap">
          <div className="section">
            <div className="blog-post-preview v1 column3-wrap">
              {(blogs || []).map(blog => (
                <BlogCard key={blog.id} blog={blog}></BlogCard>
              ))}
            </div>
            <div className="pager tertiary">
              {(count > this.state.itemsCountPerPage) ?
                <Pagination
                  activePage={this.state.activePage}
                  itemsCountPerPage={this.state.itemsCountPerPage}
                  totalItemsCount={count}
                  pageRangeDisplayed={5}
                  onChange={this.handlePageChange}
                  itemClass="pager-item"
                  linkClass="page-link-class"
                />
                : null
              }
            </div>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    const payload = {
      'numberofitem': 9,
      'pagenumber': 0,
    }
    this.props.getBlogs(payload);
  }

}


const mapStateToProps = (state) => {
  return {
    blogs: state.blogs
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getBlogs: (payload) => {
      dispatch({ type: GET_BLOGS, payload: payload });
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Blog);
