import React, {Component} from 'react';
import './css/App.css';
import './css/Style.css';
import './css/Banner.css';
import Header from "./app/components/Header";
import Footer from "./app/components/Footer";
import MainMenu from "./app/components/MainMenu";
import Routes from "./app/components/Routes";
import {withRouter} from 'react-router-dom'
import SimpleLineIcon from "react-simple-line-icons";
import {HideHeaderRegion} from "./app/helper/MainHelper";
import {Provider} from "react-redux";
import {getStore} from './app/Redux/store';

const store = getStore();

class App extends Component {
  render() {
    const current_path = this.props.location.pathname;
    return (
        <Provider store={store}>
          <div className="App">
            {!(HideHeaderRegion.indexOf(current_path) > -1) ? (
                <>
                  <Header/>
                  <MainMenu/>
                  <Routes/>
                  <Footer/>
                </>
            ) : (
                <Routes/>
            )}
            <SimpleLineIcon name={'bulb'} className={'hide'}/>
          </div>
        </Provider>
    );
  }
}

export default withRouter(App);
