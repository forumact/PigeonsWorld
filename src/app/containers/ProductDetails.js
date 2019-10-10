import React from 'react';
import HeadLine from "../components/HeadLine";
import CommentsList from "../components/CommentsList";
import Pigeon1 from "../assets/pigeon1.jpg";
import { useTitle } from '../helper/MainHelper';
import ProductInfo from '../components/ProductInfo';

const ProductDetails = () => {
    const title = "New Nintendo 3XHD Black";
    useTitle('Product Details');
    return (
        <div>
            <HeadLine title={title}></HeadLine>
            <div className="section-wrap">
                <div className="section">
                    <div className="sidebar right">
                        <ProductInfo></ProductInfo>
                    </div>
                    <div className="content left">
                        <article className="post">
                            <div className="post-image">
                                <figure
                                    className="product-preview-image large liquid imgLiquid_bgSize imgLiquid_ready">
                                    <img src={Pigeon1} alt="" />
                                </figure>
                            </div>
                            <div className="post-content">
                                <div className="post-paragraph">
                                    <h3 className="post-title">Discover the New Funtendo!</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                        consequat. Duis aute irure dolor in henderit in voluptate velit esse cillum
                                        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                        cillum dolore eu fugiat nulla pariatur.</p>
                                </div>
                                <div className="post-paragraph">
                                    <h3 className="post-title small">Colors Available:</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                        consequat. Duis aute irure dolor in henderit in voluptate velit esse cillum
                                        dolore eu fugiat nulla pariatur. </p>
                                </div>
                            </div>
                            <hr className="line-separator" />
                            <div className="share-links-wrap">
                                <p className="text-header small">Share this:</p>
                                <ul className="share-links hoverable">
                                    <li><a href="/" className="fb">FB</a></li>
                                    <li><a href="/" className="twt">Twt</a></li>
                                    <li><a href="/" className="db">Db</a></li>
                                    <li><a href="/" className="rss">Rss</a></li>
                                    <li><a href="/" className="gplus">Gplus</a></li>
                                </ul>
                            </div>
                        </article>
                        <CommentsList></CommentsList>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default ProductDetails;