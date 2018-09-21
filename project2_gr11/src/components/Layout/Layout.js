import React, {Component} from 'react';
import Toolbar from "../Navigation/Toolbar/Toolbar";
import classes from './Layout.css';
import {Content} from "../Content/Content";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";
import Backdrop from "../Navigation/Backdrop/Backdrop";
import { ImageMedia } from "../Content/MediaTypes/ImageMedia";
import {MediaTypeMenu} from "../MediaTypeMenu/MediaTypeMenu";
import {TextMedia} from "../Content/MediaTypes/TextMedia";

function randomNumber() {
    let number = Math.floor((Math.random() * 4) + 1);
    return number;
}

let n = [randomNumber(), randomNumber(), randomNumber(), randomNumber()];

export class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sideDrawerOpen: false,
            currentState: 0
        };
        this.handleTabChange = this.handleTabChange.bind(this);

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
    handleTabChange(event) {
        event.preventDefault();
        const str = event.target.id;
        const num =  parseInt(str.slice(3), 10);
        console.log('tabNumber='+ num);
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

        //Cat urls test for tabs
        let t = [
            'imageMedia/plainCats/' + n[0] + '.svg',
            'imageMedia/spottedCats/' + n[1] + '.svg',
            'imageMedia/stripedCats/' + n[2] + '.svg',
            'imageMedia/plainCats/' + n[3] + '.svg'
        ];

        //tabs with pictures
        let catTabs = [
            <ImageMedia key={'1'} catURL={t[0]}/>,
            <ImageMedia key={'2'} catURL={t[1]}/>,
            <ImageMedia key={'3'} catURL={t[2]}/>,
            <ImageMedia key={'4'} catURL={t[3]}/>,
        ];

        let t2 = [
            'textMedia/poems/' + n[0] + '.json',
            'textMedia/poems/' + n[1] + '.json',
            'textMedia/poems/' + n[2] + '.json',
            'textMedia/poems/' + n[3] + '.json'
        ];

        //tabs with pictures
        let textTabs = [
            <TextMedia key={'1'} textURL={t2[0]}/>,
            <TextMedia key={'2'} textURL={t2[1]}/>,
            <TextMedia key={'3'} textURL={t2[2]}/>,
            <TextMedia key={'4'} textURL={t2[3]}/>,
        ];

        return(
            <div id="content">
                <div className="title"><h1> Mediautstilling </h1></div>
                <div className="tabs">
                    <Toolbar drawerClickHandler={this.drawerToggleClickHandler} click={this.handleTabChange}/>
                    <SideDrawer show={this.state.sideDrawerOpen} click={this.handleTabChange}/>
                    {backdrop}
                </div>

                <main className={classes.Content} id="randomElement">
                    {/* Render imageMedia with the tabs key */}
                    {catTabs[this.state.currentState]}
                </main>

                <div className="text">
                    {/*<Content/>*/}
                    {textTabs[this.state.currentState]}
                </div>

                {/*Radio buttons*/}
                <MediaTypeMenu/>

                <div className="audio">
                    {/*Random audio*/}
                    <audio controls>
                        <source src="soundMedia/surpriseSounds/1.mp3" type="audio/mpeg" />
                        Your browser does not support the audio element.
                    </audio>
                </div>

            </div>
        );
    }
}
