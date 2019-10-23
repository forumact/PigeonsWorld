import React from 'react';
import { Field, reduxForm } from "redux-form";
import CloseIcon from "../assets/close-icon-small.png";
import { ItemCategory, ItemConditions } from "../const/const";
import { city } from '../helper/MainHelper';

const validate = values => {
  const errors = {}
  if (!values.username) {
    errors.username = 'Required'
  }
  if (!values.password) {
    errors.password = 'Required'
  }
  return errors
}

let UploaditemForm = props => {
  const { handleSubmit } = props
  return (
    <form id="upload_form" onSubmit={handleSubmit}>
      <div className="input-container">
        <label htmlFor="category" className="rl-label required">Select Category</label>
        <label htmlFor="category" className="select-block">
          <Field name="category" component="select">
            <option />
            {ItemCategory.map((item, index) => {
              return <option value={item} key={index}>{item}</option>
            })}
          </Field>
        </label>
      </div>
      <div className="input-container">
        <label htmlFor="item_name" className="rl-label required">Name of the Item (Max 40 Characters)</label>
        <Field name="item_name" component="input" type="text" placeholder="Enter them item name here..." />
      </div>
      <div className="input-container">
        <label htmlFor="item_description" className="rl-label required">Item Description</label>
        <Field name="item_description" component="textarea" type="text"
          placeholder="Enter them item description here..." />
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
      {/* <div className="input-container">
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
                <img src={CloseIcon} alt="close-icon"/>
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
                <img src={CloseIcon} alt="close-icon"/>
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
                <img src={CloseIcon} alt="close-icon"/>
              </a>
            </div>
          </div>
        </div> */}
      <div className="input-container half">
        <label htmlFor="price" className="rl-label required">Price</label>
        <Field name="price" component="input" type="text"
          placeholder="Enter them Price here..." />
      </div>
      <div className="input-container half">
        <label htmlFor="item_dimensions" className="rl-label required">Item Dimensions</label>
        <Field name="item_dimensions" component="input" type="text"
          placeholder="Enter them item dimensions here..." />
      </div>
      <div className="clearfix"></div>
      <div className="input-container half">
        <label htmlFor="item_conditions" className="rl-label required">Item Conditions</label>
        <label htmlFor="item_conditions" className="select-block">
          <Field name="item_conditions" component="select">
            <option />
            {ItemConditions.map((item, index) => {
              return <option value={item} key={index}>{item}</option>
            })}
          </Field>
        </label>
      </div>
      <div className="input-container half">
        <label htmlFor="city" className="rl-label required">City</label>
        <label htmlFor="city" className="select-block">
          <Field name="city" component="select">
            <option />
            {city.map((item, index) => {
              return <option value={item} key={index}>{item}</option>
            })}
          </Field>
        </label>
      </div>
      <div className="input-container">
        <label htmlFor="item_tags" className="rl-label required">Item Tags</label>
        <Field name="item_tags" component="input" type="text"
          placeholder="Enter them item tags separated by a comma..." />
      </div>
      <hr className="line-separator" />
      <button className="button big dark">Submit Item <span className="primary">for Review</span></button>
    </form>
  );
}


UploaditemForm = reduxForm({
  // a unique name for the form
  form: 'uploaditem',  
  validate
})(UploaditemForm)

export default UploaditemForm