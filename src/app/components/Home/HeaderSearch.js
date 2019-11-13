import React, { Component } from "react";
import SearchIcon from "../../assets/search-icon.png";
import { withRouter } from "react-router-dom";

class HeaderSearch extends Component {
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

  handleInputChange = event => {
    const { name, value } = event.target;
    let formv = {
      [name]: value
    };
    this.setState(formv);
  };

  handleSubmit(e) {
    e.preventDefault();
    const { categories, search } = this.state;
    this.setState({
      search: ""
    });
    this.props.history.push(`/search/${categories}/${search}`);
  }

  render() {
    return (
      <form
        className="search-form"
        autoComplete="off"
        onSubmit={this.handleSubmit}
      >
        <input
          type="text"
          className="rounded"
          name="search"
          id="search_products"
          placeholder="Search products here..."
          value={this.state.search}
          onChange={this.handleInputChange}
        />
        <input type="image" src={SearchIcon} alt="search-icon" />
      </form>
    );
  }
}

export default withRouter(HeaderSearch);
