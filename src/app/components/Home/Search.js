import React, { Component } from "react";
import Suggestions from "./Suggestions";
import { PigeonCategory } from "../../const";
import { seach } from "../../Networks";

class Search extends Component {
  state = {
    query: "",
    results: []
  };

  getInfo = () => {
    //axios.get(`${API_URL}?api_key=${API_KEY}&prefix=${this.state.query}&limit=7`)
    seach(this.state.query).then(({ data }) => {
      this.setState({
        results: data.data
      });
    });
  };

  handleInputChange = () => {
    this.setState(
      {
        query: this.search.value
      },
      () => {
        if (this.state.query && this.state.query.length > 3) {
          if (this.state.query.length % 2 === 0) {
            this.getInfo();
          }
        } else if (!this.state.query) {
        }
      }
    );
  };

  render() {
    return (
      <form className="search-widget-form" autoComplete="off">
        <input
          type="text"
          name="category_name"
          placeholder="Search for..."
          ref={input => (this.search = input)}
          onChange={this.handleInputChange}
        />
        <label htmlFor="categories" className="select-block">
          <select name="categories" id="categories">
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
        <Suggestions results={this.state.results} />
      </form>
    );
  }
}

export default Search;
