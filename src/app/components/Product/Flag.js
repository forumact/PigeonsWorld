import React, { Component } from "react";
import { flag } from "../../Networks";

class Flag extends Component {
  yourfavorites(e, id, flagstatus) {
    e.preventDefault();
    if (flagstatus === "Flagged") {
      console.log(id, "item already flagged");
      return false;
    }
    flag(id);
  }

  render() {
    const { id, flag } = this.props;
    if (flag == "stop") {
      return null;
    }
    return (
      <div className="preview-action">
        <a href="/">
          <div className="circle tiny secondary">
            <span
              onClick={e => this.yourfavorites(e, id, flag)}
              className="icon-heart"
            ></span>
          </div>
        </a>
        <a href="/">
          <p>Favourites1 +</p>
        </a>
      </div>
    );
  }
}

export default Flag;
