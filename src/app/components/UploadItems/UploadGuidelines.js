import React from 'react'

export default function UploadGuidelines() {
  return (
    <div className="form-box-item full">
      <h4>Upload Guidelines</h4>
      <hr className="line-separator" />
      <div className="plain-text-box">
        <div className="plain-text-box-item">
          <p className="text-header">File Upload:</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
                    ut labore.</p>
        </div>
        <div className="plain-text-box-item">
          <p className="text-header">Photos and Images:</p>
          <p>Lorem ipsum dolor sit amet.<br />Consectetur adipisicing elit, sed do.</p>
          <p>Eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className="plain-text-box-item">
          <p className="text-header">Guide with Links:</p>
          <p><a href="/" className="primary">Click here for the link.</a></p>
        </div>
      </div>
    </div>
  )
}
