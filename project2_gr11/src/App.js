/*
 Base of the entire site (The presentation)
  */

// Libraries
import React, { Component } from 'react';


import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';

// TODO:
// TODO:
// TODO:

import MediaBuilder from './containers/MediaBuilder/MediaBuilder';


class App extends Component {
    state = {
        sideDrawerOpen: false
    };

    drawerToggleClickHandler = () => {
        this.setState((prevState) => {
            return {sideDrawerOpen: !prevState.sideDrawerOpen};
        });
    };

    backDropClickHandler = () => {
      this.setState({sideDrawerOpen: false});
    };

    render() {
        let backdrop;

        if(this.state.sideDrawerOpen) {
            backdrop = <Backdrop click={this.backDropClickHandler}/>;
        }

        return (
            <div style={{height: '100%'}}>
                <div style={{padding: '15px', textAlign: 'center'}}><h1> Mediautstilling </h1></div>
                <Toolbar drawerClickHandler={this.drawerToggleClickHandler}/>
                <SideDrawer show={this.state.sideDrawerOpen}/>
                {backdrop}
                <main style={{marginTop: '64px'}}>
                    <p> This is the page content!</p>
                    <MediaBuilder/>
                </main>
            </div>
        );
    }
}

export default App;