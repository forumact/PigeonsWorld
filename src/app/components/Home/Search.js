import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { PigeonCategory } from "../../const";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // query: "",
      // results: ["arulraj", "murugavel", "barathi"]
      search: "",
      categories: "All"
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // getInfo = () => {
  //   seach(this.state.query).then(({ data }) => {
  //     this.setState({
  //       results: data.data
  //     });
  //   });
  // };

  handleInputChange = event => {
    const { name, value } = event.target;
    let formv = {
      [name]: value
    };
    this.setState(formv);
  };

  handleSubmit(e) {
    e.preventDefault();
    this.props.history.push(
      `/search/${this.state.categories}/${this.state.search}`
    );
  }

  render() {
    return (
      <form
        className="search-widget-form"
        onSubmit={this.handleSubmit}
        autoComplete="off"
      >
        <input
          type="text"
          name="search"
          placeholder="Search for..."
          ref={input => (this.search = input)}
          onChange={this.handleInputChange}
        />
        <label htmlFor="categories" className="select-block">
          <select
            name="categories"
            id="categories"
            onChange={this.handleInputChange}
          >
            {PigeonCategory.map(cat => {
              return (
                <option value={cat} key={cat}>
                  {cat}
                </option>
              );
            })}
          </select>
        </label>
        <button className="button medium dark">Search Now!</button>
      </form>
    );
  }
}

export default withRouter(Search);
