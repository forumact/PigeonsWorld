import React, { Component } from "react";
//import { useTitle } from "../helper/MainHelper";
import { connect } from "react-redux";
import HeadLine from "../components/HeadLine";
import FavouriteCard from "../components/FavouriteCard";
import { GET_USER_FAVOURITES } from "../Redux/actions";

class Favourites extends Component {
  // constructor() {
  //   super();

  //   this.state = {
  //     userFavourites: [],
  //   }
  // }

  render() {
    const title = "Favourites";
    return (
      <div>
        <HeadLine title={title}></HeadLine>
        <div className="section-wrap">
          <div className="section">
            <div className="content full">
              <div className="headline primary">
                <h4>{this.props.userFavourites.length} Favourites Found</h4>
                <div className="clearfix"></div>
              </div>
              <div className="product-showcase">
                <div className="product-list list full">
                  {(this.props.userFavourites || []).map(fav => {
                    return (
                      <FavouriteCard key={fav.id} fav={fav}></FavouriteCard>
                    );
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
    const uid = this.props.match.params.uid;
    this.props.getUserFavourites(uid);
  }
}

const mapStateToProps = state => {
  return {
    userFavourites: state.userFavourites
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getUserFavourites: uid => {
      dispatch({ type: GET_USER_FAVOURITES, payload: { uid: uid } });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Favourites);
