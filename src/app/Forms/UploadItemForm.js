import React, { Component } from "react";
import { ItemCategory, ItemConditions, city } from "../const";
import FileUpload from "../components/FileUpload";
import { productCreate, productUpdate, fetchProductDetails } from "../Networks";

class UploadItemForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item_category: "",
      item_name: "",
      item_description: "",
      item_picture: "",
      item_picture2: "",
      item_price: "",
      item_dimensions: "",
      item_conditions: "",
      item_city: "",
      item_tags: "",
      item_nid: 0
    };
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
    };
    this.setState(formv);
  }

  handleInputFileChange(field, value) {
    this.setState({ [field]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
    const file = document.querySelector(".file");
    file.value = "";
    console.log(this.state.item_nid);
    if (this.state.item_nid) {
      productUpdate(this.state).then(response => {});
    } else {
      productCreate(this.state).then(response => {
        console.log(response);
        this.setState({
          item_name: "",
          item_category: "",
          item_description: "",
          item_picture: "",
          item_picture2: "",
          item_price: "",
          item_dimensions: "",
          item_conditions: "",
          item_city: "",
          item_tags: "",
          item_nid: 0
        });
      });
    }
    return false;
  }

  render() {
    const fileApi = "/api/v1/file/upload/node/pegion/field_pegion";

    return (
      <form id="upload_form" onSubmit={this.handleSubmit} autoComplete="off">
        <div className="input-container">
          <label htmlFor="item_name" className="rl-label required">
            Name of the Item (Max 150 Characters)
          </label>
          <input
            name="item_name"
            type="text"
            placeholder="Enter them item name here..."
            value={this.state.item_name}
            onChange={this.handleInputChange}
            maxLength="150"
          ></input>
        </div>
        <div className="input-container">
          <label htmlFor="category" className="rl-label required">
            Select Category
          </label>
          <label htmlFor="category" className="select-block">
            <select
              name="item_category"
              value={this.state.item_category}
              onChange={this.handleInputChange}
            >
              <option />
              {ItemCategory.map((item, index) => {
                return (
                  <option value={item} key={index}>
                    {item}
                  </option>
                );
              })}
            </select>
          </label>
        </div>
        <div className="input-container">
          <label htmlFor="item_description" className="rl-label required">
            Item Description
          </label>
          <textarea
            rows="4"
            cols="50"
            name="item_description"
            placeholder="Enter them item description here..."
            value={this.state.item_description}
            onChange={this.handleInputChange}
          ></textarea>
        </div>
        <div className="input-container">
          <label className="rl-label required">Upload Main File</label>
          <div className="upload-file">
            <div className="upload-file-actions">
              <FileUpload
                onChange={this.handleInputFileChange}
                targetField="item_picture"
                fileApi={fileApi}
              ></FileUpload>
              <input
                className="hide"
                name="item_picture"
                id="pic1"
                type="hidden"
                placeholder="Enter them item name here..."
                value={this.state.item_picture}
                onChange={this.handleInputChange}
              ></input>
              <p>Pack of Cartoon Illustrations.zip</p>
            </div>
          </div>
        </div>
        <div className="input-container">
          <label className="rl-label required">Upload Main Image</label>
          <div className="upload-file">
            <div className="upload-file-actions">
              <FileUpload
                onChange={this.handleInputFileChange}
                targetField="item_picture2"
                fileApi={fileApi}
              ></FileUpload>
              <input
                className="hide"
                name="item_picture2"
                id="pic1"
                type="hidden"
                placeholder="Enter them item name here..."
                value={this.state.item_picture2}
                onChange={this.handleInputChange}
              ></input>
              <p>Pack of Cartoon Illustrations.zip</p>
            </div>
          </div>
        </div>
        <div className="input-container half">
          <label htmlFor="price" className="rl-label required">
            Price
          </label>
          <input
            name="item_price"
            type="text"
            placeholder="Enter them Price here..."
            value={this.state.item_price}
            onChange={this.handleInputChange}
          ></input>
        </div>
        <div className="input-container half">
          <label htmlFor="item_dimensions" className="rl-label required">
            Item Dimensions
          </label>
          <input
            name="item_dimensions"
            type="text"
            placeholder="Enter them item dimensions here..."
            value={this.state.item_dimensions}
            onChange={this.handleInputChange}
          ></input>
        </div>
        <div className="clearfix"></div>
        <div className="input-container half">
          <label htmlFor="item_conditions" className="rl-label required">
            Item Conditions
          </label>
          <label htmlFor="item_conditions" className="select-block">
            <select
              name="item_conditions"
              form="carform"
              value={this.state.item_conditions}
              onChange={this.handleInputChange}
            >
              <option />
              {ItemConditions.map((item, index) => {
                return (
                  <option value={item} key={index}>
                    {item}
                  </option>
                );
              })}
            </select>
          </label>
        </div>
        <div className="input-container half">
          <label htmlFor="city" className="rl-label required">
            City
          </label>
          <label htmlFor="city" className="select-block">
            <select
              name="item_city"
              form="carform"
              value={this.state.item_city}
              onChange={this.handleInputChange}
            >
              <option />
              {city.map((item, index) => {
                return (
                  <option value={item} key={index}>
                    {item}
                  </option>
                );
              })}
            </select>
          </label>
        </div>
        <div className="input-container">
          <label htmlFor="item_tags" className="rl-label required">
            Item Tags
          </label>
          <input
            name="item_tags"
            type="text"
            placeholder="Enter them item tags separated by a comma..."
            value={this.state.item_tags}
            onChange={this.handleInputChange}
          ></input>
        </div>
        <hr className="line-separator" />
        {/* <button  type="submit" className="button big dark">Submit Item <span className="primary">for Review</span></button> */}
        <input
          type="submit"
          className="button big dark"
          value={this.state.item_nid > 0 ? "Update" : "Submit"}
        />
      </form>
    );
  }

  componentDidMount() {
    console.log(this.props);
    const data = {
      id: this.props.nid ? this.props.nid : ""
    };

    if (data.id) {
      fetchProductDetails(data).then(response => {
        this.setState({
          item_name: response.data.title,
          item_category: response.data.category,
          item_description: response.data.body,
          item_picture2: response.data.title,
          item_price: response.data.price,
          item_dimensions: response.data.title,
          item_conditions: response.data.condition,
          item_city: response.data.city,
          item_tags: response.data.title,
          item_picture: response.data.imguri,
          item_nid: response.data.nid
        });
        document.title = `Pigeons World | ${response.data.title}`;
      });
    }
  }
}

export default UploadItemForm;
