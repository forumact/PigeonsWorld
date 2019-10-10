import React, {Component} from 'react';
import './App.css';
import './css/Style.css';
import './css/Banner.css';
import Header from "./app/components/Header";
import Footer from "./app/components/Footer";
import MainMenu from "./app/components/MainMenu";
import Routes from "./app/components/Routes";
import {withRouter} from 'react-router-dom'
import SimpleLineIcon from "react-simple-line-icons";

class App extends Component {
    render() {
        const current_path = this.props.location.pathname;
        return (
            <div className="App">
                {(current_path !== '/login') ? (
                    <>
                        <Header></Header>
                        <MainMenu></MainMenu>
                        <Routes></Routes>
                        <Footer></Footer>
                    </>
                ) : (
                    <Routes></Routes>
                )}
                <SimpleLineIcon name={'bulb'}></SimpleLineIcon>
            </div>
        );
    }
}

export default withRouter(App);
