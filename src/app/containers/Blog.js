import React, { Component } from 'react'
import HeadLine from "../components/HeadLine";
import BlogCard from "../components/BlogCard";
import { fetchBlogList } from '../Networks';

class Blog extends Component {

  constructor() {
    super();
    this.state = {
      bloglist: []
    }
  }

  render() {
    const title = "Blog";
    console.log(this.state.bloglist);
    return (
      <div>
        <HeadLine title={title}></HeadLine>
        <div className="section-wrap">
          <div className="section">
            <div className="blog-post-preview v1 column3-wrap">
              {this.state.bloglist.map(blog => (
                <BlogCard key={blog.id} blog={blog}></BlogCard>
              ))}
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

    fetchBlogList(data).then((response) => {
      this.setState({
        bloglist: response.data
      })
    });
    document.title = `Pigeons World | Blog`;

  }

}

export default Blog;