import React, { Component } from 'react';
import HeadLine from "../components/HeadLine";
import CommentsList from "../components/CommentsList";
import { fetchBlogDetails } from '../Networks';
import SocilaMediaShareLinks from '../components/SocilaMediaShareLinks';
import LatestBlogs from '../components/Blog/LatestBlogs';

class BlogDetails extends Component {
  constructor() {
    super();

    this.state = {
      blog: []
    }
  }


  render() {
    const { title, body, img } = this.state.blog;
    return (
      <div>
        <HeadLine title={title}></HeadLine>
        <div className="section-wrap">
          <div className="section">
            <div className="sidebar right">
              <LatestBlogs></LatestBlogs>
              <LatestBlogs></LatestBlogs>
            </div>
            <div className="content left">
              <article className="post">
                <div className="post-image">
                  <figure
                    className="product-preview-image large liquid imgLiquid_bgSize imgLiquid_ready">
                    <img src={img} alt="" />
                  </figure>
                </div>
                <div className="post-content">
                  <div className="post-paragraph">
                    {/* {body} */}
                    <div dangerouslySetInnerHTML={{ __html: body }} />
                  </div>
                </div>
                <hr className="line-separator" />
                <SocilaMediaShareLinks></SocilaMediaShareLinks>
              </article>
              <CommentsList nid={this.props.match.params.id}></CommentsList>
            </div>
          </div>
        </div>
      </div>
    );
  }


  componentDidMount() {
    const data = {
      id: this.props.match.params.id
    };

    fetchBlogDetails(data).then((response) => {
      this.setState({
        blog: response.data
      })
      document.title = `Pigeons World | ${response.data.title}`;
    });
  }

  componentDidUpdate(prevProps) {
    //Typical usage, don't forget to compare the props
    if (this.props.match.params.id !== prevProps.match.params.id) {
      const data = {
        id: this.props.match.params.id
      };
      fetchBlogDetails(data).then((response) => {
        this.setState({
          blog: response.data
        })
        document.title = `Pigeons World | ${response.data.title}`;
      });
    }
  }

}

export default BlogDetails;