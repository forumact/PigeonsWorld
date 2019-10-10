import React, {Component} from 'react';
import LogoSmall from '../assets/logo_small.png';
class Footer extends Component {
    render() {
        return (
            <footer>
                <div id="footer-top-wrap">
                    <div id="footer-top">
                        <div className="company-info">
                            <figure className="logo small">
                                <img src={LogoSmall} alt="logo-small"/>
                            </figure>
                            <p>Lorem ipsum dolor sit amet, consectetur isicing elit, sed do eiusmod tempor incididunt ut
                                labo dolore magna ua.</p>
                            <ul className="company-info-list">
                                <li className="company-info-item">
                                    <span className="icon-present"></span>
                                    <p><span>850.296</span> Products</p>
                                </li>
                                <li className="company-info-item">
                                    <span className="icon-energy"></span>
                                    <p><span>1.207.300</span> Members</p>
                                </li>
                                <li className="company-info-item">
                                    <span className="icon-user"></span>
                                    <p><span>74.059</span> Sellers</p>
                                </li>
                            </ul>
                        </div>
                        <div className="link-info">
                            <p className="footer-title">Our Community</p>
                            <ul className="link-list">
                                <li className="link-item">
                                    <div className="bullet"></div>
                                    <a href="http://odindesign-themes.com/emerald-dragon/index.html#">How to Join us</a>
                                </li>
                                <li className="link-item">
                                    <div className="bullet"></div>
                                    <a href="http://odindesign-themes.com/emerald-dragon/index.html#">Buying and
                                        Selling</a>
                                </li>
                                <li className="link-item">
                                    <div className="bullet"></div>
                                    <a href="http://odindesign-themes.com/emerald-dragon/forum.html">Emerald Forum</a>
                                </li>
                                <li className="link-item">
                                    <div className="bullet"></div>
                                    <a href="http://odindesign-themes.com/emerald-dragon/blog-v1.html">Emerald Blog</a>
                                </li>
                                <li className="link-item">
                                    <div className="bullet"></div>
                                    <a href="http://odindesign-themes.com/emerald-dragon/index.html#">Free Goods</a>
                                </li>
                                <li className="link-item">
                                    <div className="bullet"></div>
                                    <a href="http://odindesign-themes.com/emerald-dragon/index.html#">Job
                                        Oportunities</a>
                                </li>
                            </ul>
                        </div>
                        <div className="link-info">
                            <p className="footer-title">Member Links</p>
                            <ul className="link-list">
                                <li className="link-item">
                                    <div className="bullet"></div>
                                    <a href="http://odindesign-themes.com/emerald-dragon/index.html#">Partner
                                        Program</a>
                                </li>
                                <li className="link-item">
                                    <div className="bullet"></div>
                                    <a href="http://odindesign-themes.com/emerald-dragon/index.html#">Starting a
                                        Shop</a>
                                </li>
                                <li className="link-item">
                                    <div className="bullet"></div>
                                    <a href="http://odindesign-themes.com/emerald-dragon/index.html#">Purchase
                                        Credits</a>
                                </li>
                                <li className="link-item">
                                    <div className="bullet"></div>
                                    <a href="http://odindesign-themes.com/emerald-dragon/index.html#">Withdrawals</a>
                                </li>
                                <li className="link-item">
                                    <div className="bullet"></div>
                                    <a href="http://odindesign-themes.com/emerald-dragon/index.html#">World Meetings</a>
                                </li>
                                <li className="link-item">
                                    <div className="bullet"></div>
                                    <a href="http://odindesign-themes.com/emerald-dragon/index.html#">How to Auction</a>
                                </li>
                            </ul>
                        </div>
                        <div className="link-info">
                            <p className="footer-title">Help and FAQs</p>
                            <ul className="link-list">
                                <li className="link-item">
                                    <div className="bullet"></div>
                                    <a href="http://odindesign-themes.com/emerald-dragon/index.html#">Help Center</a>
                                </li>
                                <li className="link-item">
                                    <div className="bullet"></div>
                                    <a href="http://odindesign-themes.com/emerald-dragon/index.html#">FAQs</a>
                                </li>
                                <li className="link-item">
                                    <div className="bullet"></div>
                                    <a href="http://odindesign-themes.com/emerald-dragon/index.html#">Terms and
                                        Conditions</a>
                                </li>
                                <li className="link-item">
                                    <div className="bullet"></div>
                                    <a href="http://odindesign-themes.com/emerald-dragon/index.html#">Products
                                        Licenses</a>
                                </li>
                                <li className="link-item">
                                    <div className="bullet"></div>
                                    <a href="http://odindesign-themes.com/emerald-dragon/index.html#">Security
                                        Information</a>
                                </li>
                            </ul>
                        </div>
                        <div className="twitter-feed">
                            <p className="footer-title">Twitter Feed</p>
                            <ul className="tweets"><p className="loading">Loading twitter feed...</p></ul>
                        </div>
                    </div>
                </div>
                <div id="footer-bottom-wrap">
                    <div id="footer-bottom">
                        <p><span>©</span><a href="http://odindesign-themes.com/emerald-dragon/index.html">Arulraj
                        </a> Template - All Rights Reserved 2019</p>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;