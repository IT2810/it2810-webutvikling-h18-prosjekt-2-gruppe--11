/*
 Base of the entire site (The presentation)
  */

// Libraries
import React, { Component } from 'react';

// Comment
import { MediaTypeMenu } from "./components/MediaTypeMenu/MediaTypeMenu";

//
import { Content } from "./components/Content/Content";

// Menu bar
import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            images: '',
            texts: [],

            sideDrawerOpen: false
        };
    }

    // Menu-stuff
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
        
      // If sidedrawer is open. close if backdrop is clicked
        if(this.state.sideDrawerOpen) {
            backdrop = <Backdrop click={this.backDropClickHandler}/>;
        }
        return (
             <div style={{height: '100%'}}>
                {/*Menu-stuff*/}
                <div style={{padding: '15px', textAlign: 'center'}}><h1> Mediautstilling </h1></div>
                <Toolbar drawerClickHandler={this.drawerToggleClickHandler}/>
                <SideDrawer show={this.state.sideDrawerOpen}/>
                {backdrop}
                <main style={{marginTop: '64px'}}>
                    <p> This is the page content!</p>
                </main>

                 {/*Random media*/}
                 <div>
                     <Content/>
                 </div>


                 {/*RADIOBUTTONS*/}
                <div id="mediaTypeMenu">
                    <MediaTypeMenu/>
                </div>

                <div>
                  {/*Random audio*/}
                    <audio controls>
                        <source src="soundMedia/surpriseSounds/1.mp3" type="audio/mpeg" />
                        Your browser does not support the audio element.
                    </audio>
                </div>
            </div>
        )
    }
}

export default App;