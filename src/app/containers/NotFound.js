import React from 'react';
import HeadLine from "../components/HeadLine";
import {useTitle} from "../helper/MainHelper";

const NotFound = () => {
    const title = '404'
    useTitle(title);
    return (
        <div>
            <HeadLine title={title}></HeadLine>
            <div className="section-wrap">
                <div className="section">
                    <p>Sorry! The page your were looking Doesn't exists.</p>
                </div>
            </div>
        </div>
    );
}

export default NotFound;