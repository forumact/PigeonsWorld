import React from "react";
import PropTypes from "prop-types";

const Placeholder = ({ error, touched }) => (
  <div className={`placeholder-preview ${error && touched ? "has-error" : ""}`}>    
    <p>Click or drag image file to this area to upload.</p>
  </div>
);

Placeholder.propTypes = {
  error: PropTypes.string,
  touched: PropTypes.bool
};

export default Placeholder;
