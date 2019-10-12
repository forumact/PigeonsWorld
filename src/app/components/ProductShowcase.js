import React, { Component } from 'react';
import ProductCard from "./ProductCard";

class ProductShowcase extends Component {
    render() {
        return (
            <div id="product-sideshow-wrap">
                <div id="product-sideshow">
                    <div className="product-showcase">
                        <div className="headline primary">
                            <h4>Latest Online Products</h4>
                        </div>
                        <div id="pl-1" className="product-list grid column4-wrap">
                            {Array(10).fill(1).map((el, i) =>
                                <ProductCard key={i}></ProductCard>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductShowcase;