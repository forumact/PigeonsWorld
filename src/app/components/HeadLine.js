import React, { Component } from 'react';

class HeadLine extends Component {
    render() {
        return (
            <div className="section-headline-wrap v2">
                <div className="section-headline">
                    <h2>{this.props.title}</h2>
                    <p>Home<span className="separator">/</span><span className="current-section">{this.props.title}</span></p>
                </div>
            </div>
        );
    }
}

export default HeadLine;