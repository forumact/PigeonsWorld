import React from 'react';
import HeadLine from "../components/HeadLine";
import BlogCard from "../components/BlogCard";
import {useTitle} from "../helper/MainHelper";

const Blog = () => {
    const title = "Blog";
    useTitle(title);
    return (
        <div>
            <HeadLine title={title}></HeadLine>
            <div className="section-wrap">
                <div className="section">
                    <div className="blog-post-preview v1 column3-wrap">
                        {Array(9).fill(1).map((el, i) =>
                            <BlogCard key={i}></BlogCard>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Blog;