import React, { Component } from 'react';
import CloseIcon from '../assets/close-icon-small.png';

class UploadItem extends Component {
   render() {
      return (
         <div className="dashboard-content">
            <div className="headline simple primary">
               <h4>Upload Item</h4>
            </div>
            <div className="form-box-items wrap-3-1 left">
               <div className="form-box-item full">
                  <h4>Item Specifications</h4>
                  <hr className="line-separator" />
                  <form id="upload_form">
                     <div className="input-container">
                        <label for="category" className="rl-label required">Select Category</label>
                        <label for="category" className="select-block">
                           <select name="category" id="category">
                              <option value="0">Illustration</option>
                              <option value="1">Photoshop</option>
                              <option value="2">Vector</option>
                           </select>
                        </label>
                     </div>
                     <div className="input-container">
                        <label for="item_name" className="rl-label required">Name of the Item (Max 40 Characters)</label>
                        <input type="text" id="item_name" name="item_name" placeholder="Enter them item name here..." />
                     </div>
                     <div className="input-container">
                        <label for="item_description" className="rl-label required">Item Description</label>
                        <textarea id="item_description" name="item_description" placeholder="Enter them item description here..."></textarea>
                     </div>
                     <div className="input-container">
                        <label className="rl-label required">Upload Main File</label>
                        <div className="upload-file">
                           <div className="upload-file-actions">
                              <a href="/" className="button dark-light">Upload File...</a>
                              <p>Pack of Cartoon Illustrations.zip</p>
                           </div>
                           <div className="upload-file-progress">
                              <div className="upload-bar">
                              </div>
                              <p className="text-header">46%</p>
                              <a href="/" className="button dark-light square">
                                 <img src={CloseIcon} alt="close-icon" />
                              </a>
                           </div>
                        </div>
                     </div>
                     <div className="input-container">
                        <label className="rl-label required">Upload Main Image</label>
                        <div className="upload-file">
                           <div className="upload-file-actions">
                              <a href="/" className="button dark-light">Upload File...</a>
                              <p>Cartoon Illustrations.jpeg</p>
                           </div>
                           <div className="upload-file-progress">
                              <div className="upload-bar">
                              </div>
                              <p className="text-header">100%</p>
                              <a href="/" className="button dark-light square">
                                 <img src={CloseIcon} alt="close-icon" />
                              </a>
                           </div>
                        </div>
                     </div>
                     <div className="input-container">
                        <label className="rl-label">Additional Screenshots </label>
                        <div className="upload-file">
                           <div className="upload-file-actions">
                              <a href="/" className="button dark-light">Upload File...</a>
                              <p>Screenshot 01.jpeg</p>
                           </div>
                           <div className="upload-file-progress">
                              <div className="upload-bar">
                              </div>
                              <p className="text-header">68%</p>
                              <a href="/" className="button dark-light square">
                                 <img src={CloseIcon} alt="close-icon" />
                              </a>
                           </div>
                        </div>
                        <div className="upload-file multiupload">
                           <div className="upload-file-actions">
                              <a href="/" className="button dark-light">Upload File...</a>
                              <p>Screenshot 02.jpeg</p>
                           </div>
                           <div className="upload-file-progress">
                              <div className="upload-bar">
                                 <div className="upload-pg4 xmlinefill"></div>
                              </div>
                              <p className="text-header">73%</p>
                              <a href="/" className="button dark-light square">
                                 <img src={CloseIcon} alt="close-icon" />
                              </a>
                           </div>
                        </div>
                        <div className="upload-file multiupload">
                           <div className="upload-file-actions">
                              <a href="/" className="button dark-light">Upload File...</a>
                              <p>Screenshot 03.jpeg</p>
                           </div>
                           <div className="upload-file-progress">
                              <div className="upload-bar">
                              </div>
                              <p className="text-header">92%</p>
                              <a href="/" className="button dark-light square">
                                 <img src={CloseIcon} alt="close-icon" />
                              </a>
                           </div>
                        </div>
                     </div>
                     <div className="input-container half">
                        <label for="files_included" className="rl-label required">Files Included</label>
                        <input type="text" id="files_included" name="files_included" placeholder="Enter them files included here..." />
                     </div>
                     <div className="input-container half">
                        <label for="item_dimensions" className="rl-label required">Item Dimensions</label>
                        <input type="text" id="item_dimensions" name="item_dimensions" placeholder="Enter them item dimensions here..." />
                     </div>
                     <div className="clearfix"></div>
                     <div className="input-container half">
                        <label for="sv" className="rl-label required">Minimum Software Version</label>
                        <label for="sv" className="select-block">
                           <select name="sv" id="sv">
                              <option value="0">Adobe Suite CS6</option>
                              <option value="1">Adobe Suite CS7</option>
                           </select>
                        </label>
                     </div>
                     <div className="input-container half">
                        <label for="vr" className="rl-label required">Vector or Raster</label>
                        <label for="vr" className="select-block">
                           <select name="vr" id="vr">
                              <option value="0">Vectorized</option>
                              <option value="1">Rasterized</option>
                           </select>
                        </label>
                     </div>
                     <div className="input-container">
                        <label for="item_tags" className="rl-label required">Item Tags</label>
                        <input type="text" id="item_tags" name="item_tags" placeholder="Enter them item tags separated by a comma..." />
                     </div>
                     <hr className="line-separator" />
                     <button className="button big dark">Submit Item <span className="primary">for Review</span></button>
                  </form>
               </div>
            </div>
            <div className="form-box-items wrap-1-3 right">
               <div className="form-box-item full">
                  <h4>Upload Queue</h4>
                  <hr className="line-separator" />
                  <div className="pg-bar-list">
                     <div className="pg-bar-list-item">
                        <div className="pg-bar-list-item-info">
                           <p className="text-header">Professional Business Card</p>
                           <p className="text-header">86%</p>
                           <p className="timestamp">4 days ago</p>
                        </div>
                     </div>
                     <div className="pg-bar-list-item">
                        <div className="pg-bar-list-item-info">
                           <p className="text-header">Professional Business Card</p>
                           <p className="text-header">92%</p>
                           <p className="timestamp">12 days ago</p>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="form-box-item full">
                  <h4>Upload Guidelines</h4>
                  <hr className="line-separator" />
                  <div className="plain-text-box">
                     <div className="plain-text-box-item">
                        <p className="text-header">File Upload:</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
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
            </div>
            <div className="clearfix"></div>
         </div>
      );
   }
}

export default UploadItem;