import React, { Component } from 'react'
//import { useTitle } from "../helper/MainHelper";
import HeadLine from "../components/HeadLine";
import FavouriteCard from "../components/FavouriteCard";
import { fetchFlag } from '../Networks';


class YourFavourites extends Component {

  constructor() {
    super();

    this.state = {
      yourfavourites: [],
    }
  }

  render() {
    const title = "Your Favourites";
    return (
      <div>
        <HeadLine title={title}></HeadLine>
        <div className="section-wrap">
          <div className="section">
            <div className="content full">
              <div className="headline primary">
                <h4>{this.state.yourfavourites.length} Favourites Found</h4>
                <div className="clearfix"></div>
              </div>
              <div className="product-showcase">
                <div className="product-list list full">
                  {(this.state.yourfavourites || []).map(fav => {
                    return <FavouriteCard key={fav.id} fav={fav}></FavouriteCard>
                  })}
                </div>
              </div>
              <div className="clearfix"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    const data = {
      id: this.props.match.params.pid
    };

    fetchFlag(data).then((response) => {
      this.setState({
        yourfavourites: response.data
      })
    });
  }

}
export default YourFavourites;