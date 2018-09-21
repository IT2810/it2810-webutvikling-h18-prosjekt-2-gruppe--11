import React, {Component} from 'react';
import Toolbar from "../Navigation/Toolbar/Toolbar";
import classes from './Layout.css';
import {Content} from "../Content/Content";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";
import Backdrop from "../Navigation/Backdrop/Backdrop";
import {ImageMedia} from "../Content/MediaTypes/ImageMedia";

export class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sideDrawerOpen: false,
            currentState: null,
           // currentTab1: <ImageMedia key={'dattradi'} sim='plainCats'/>
        };
        this.handleTEST = this.handleTEST.bind(this);
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

    //TEST
    handleTEST(event) {
        event.preventDefault();
        const str = event.target.id;
        const num =  parseInt(str.slice(3), 10);
        console.log(num);
        this.setState({
            currentState: num,
        });
    }
    render() {
        let backdrop;

        // If sidedrawer is open. close if backdrop is clicked
        if(this.state.sideDrawerOpen) {
            backdrop = <Backdrop click={this.backDropClickHandler}/>;
        }

        // ferdig oppsett av verdier og sim til imageMedia
        let tabs = [
            <ImageMedia key={'1'} sim='spottedCats'/>,
            <ImageMedia key={'2'} sim='plainCats'/>,
            <ImageMedia key={'3'} sim='stripedCats'/>,
            <ImageMedia key={'4'} sim='plainCats'/>,
        ];
    return(
        <div>
            <div className="tabs">
                <Toolbar drawerClickHandler={this.drawerToggleClickHandler} click={this.handleTEST}/>
                <SideDrawer show={this.state.sideDrawerOpen} click={this.handleTEST}/>
                {backdrop}
            </div>
            <div id="randomElement">
                {/* Render imageMedia with the tabs key */}
                {tabs[this.state.currentState]}
            </div>
        </div>
    );
    }
}
