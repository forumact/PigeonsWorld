import React, { Component } from 'react'
import CloseIcon from "../assets/close-icon-small.png";
import { ItemCategory, ItemConditions, city } from "../const";
import FileUpload from '../components/FileUpload';
import { productCreate } from '../Networks';


class UploadItemForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      item_category: '',
      item_name: '',
      item_description: '',
      item_picture: '',
      item_price: '',
      item_dimensions: '',
      item_conditions: '',
      item_city: '',
      item_tags: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputFileChange = this.handleInputFileChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    let formv = {
      [name]: value
    }
    this.setState(formv);
  }

  handleInputFileChange(value) {
    this.setState({ 'item_picture': value });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
    productCreate(this.state).then((response) => {
      console.log(response);
      this.setState({
        item_category: '',
        item_name: '',
        item_description: '',
        item_picture: '',
        item_price: '',
        item_dimensions: '',
        item_conditions: '',
        item_city: '',
        item_tags: ''
      });
      console.log(this.props);
      //this.props.history.push(`/products/${response.data.nid}`);
    });
  }

  render() {
    return (
      <form id="upload_form" onSubmit={this.handleSubmit}>
        <div className="input-container">
          <label htmlFor="item_name" className="rl-label required">Name of the Item (Max 40 Characters)</label>
          <input name="item_name" type="text" placeholder="Enter them item name here..."
            value={this.state.item_name} onChange={this.handleInputChange}></input>
        </div>
        <div className="input-container">
          <label htmlFor="category" className="rl-label required">Select Category</label>
          <label htmlFor="category" className="select-block">
            <select name="item_category" value={this.state.category} onChange={this.handleInputChange}>
              {ItemCategory.map((item, index) => {
                return <option value={item} key={index}>{item}</option>
              })}
            </select>
          </label>
        </div>        
        <div className="input-container">
          <label htmlFor="item_description" className="rl-label required">Item Description</label>
          <textarea rows="4" cols="50" name="item_description" placeholder="Enter them item description here..."
            value={this.state.item_description} onChange={this.handleInputChange}></textarea>
        </div>
        <div className="input-container">
          <label className="rl-label required">Upload Main File</label>
          <div className="upload-file">
            <div className="upload-file-actions">
              {/* <a href="/" className="button dark-light">Upload File...</a> */}
              <FileUpload onChange={this.handleInputFileChange}></FileUpload>
              <input name="item_picture" id="pic1" type="text" placeholder="Enter them item name here..."
                value={this.state.item_picture} onChange={this.handleInputChange}></input>
              <p>Pack of Cartoon Illustrations.zip</p>
            </div>
            <div className="upload-file-progress">
              <div className="upload-bar">
              </div>
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
        <div className="input-container half">
          <label htmlFor="price" className="rl-label required">Price</label>
          <input name="item_price" type="text" placeholder="Enter them Price here..."
            value={this.state.price} onChange={this.handleInputChange}></input>
        </div>
        <div className="input-container half">
          <label htmlFor="item_dimensions" className="rl-label required">Item Dimensions</label>
          <input name="item_dimensions" type="text" placeholder="Enter them item dimensions here..."
            value={this.state.item_dimensions} onChange={this.handleInputChange}></input>
        </div>
        <div className="clearfix"></div>
        <div className="input-container half">
          <label htmlFor="item_conditions" className="rl-label required">Item Conditions</label>
          <label htmlFor="item_conditions" className="select-block">
            <select name="item_conditions" form="carform" value={this.state.item_conditions} onChange={this.handleInputChange}>
              <option />
              {ItemConditions.map((item, index) => {
                return <option value={item} key={index}>{item}</option>
              })}
            </select>
          </label>
        </div>
        <div className="input-container half">
          <label htmlFor="city" className="rl-label required">City</label>
          <label htmlFor="city" className="select-block">
            <select name="item_city" form="carform" value={this.state.city} onChange={this.handleInputChange}>
              <option />
              {city.map((item, index) => {
                return <option value={item} key={index}>{item}</option>
              })}
            </select>
          </label>
        </div>
        <div className="input-container">
          <label htmlFor="item_tags" className="rl-label required">Item Tags</label>
          <input name="item_tags" type="text" placeholder="Enter them item tags separated by a comma..."
            value={this.state.item_tags} onChange={this.handleInputChange}></input>
        </div>
        <hr className="line-separator" />
        {/* <button  type="submit" className="button big dark">Submit Item <span className="primary">for Review</span></button> */}
        <input type="submit" className="button big dark" value="Submit" />
      </form>
    )
  }
}

export default UploadItemForm;