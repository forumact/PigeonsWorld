import React from 'react';
import {useTitle} from "../helper/MainHelper";
import HeadLine from "../components/HeadLine";
import FavouriteCard from "../components/FavouriteCard";

const YourFavourites = () => {
    const title = 'Your Favourites';
    useTitle(title);
    return (
        <div>
            <HeadLine title={title}></HeadLine>
            <div className="section-wrap">
                <div className="section">
                    <div className="content full">
                        <div className="headline primary">
                            <h4>124 Favourites Found</h4>
                            <div className="view-selectors">
                                <a href="/" className="view-selector grid">&nbsp;</a>
                                <a href="/" className="view-selector list active">&nbsp;</a>
                            </div>
                            <form id="shop_filter_form" name="shop_filter_form">
                                <label htmlFor="price_filter" className="select-block">
                                    <select name="price_filter" id="price_filter">
                                        <option value="0">Price (High to Low)</option>
                                        <option value="1">Price (Low to High)</option>
                                    </select>
                                </label>
                                <label htmlFor="itemspp_filter" className="select-block">
                                    <select name="itemspp_filter" id="itemspp_filter">
                                        <option value="0">12 Items Per Page</option>
                                        <option value="1">6 Items Per Page</option>
                                    </select>
                                </label>
                            </form>
                            <div className="clearfix"></div>
                        </div>
                        <div className="product-showcase">
                            <div className="product-list list full">
                                {Array(10).fill(1).map((el, i) =>
                                    <FavouriteCard></FavouriteCard>
                                )}

                            </div>
                        </div>
                        <div className="clearfix"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default YourFavourites;