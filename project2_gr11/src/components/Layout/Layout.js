import React, {Component} from 'react';
import Toolbar from "../Navigation/Toolbar/Toolbar";
import classes from './Layout.css';
import {Content} from "../Content/Content";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";
import Backdrop from "../Navigation/Backdrop/Backdrop";
import {ImageMedia} from "../MediaTypes/ImageMedia";

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
            currentState: 0,
            currentTab1: <ImageMedia key={'dattradi'} catURL='spottedCats'/>
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
        console.log("Page nr: " + num);
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

        //TEST TODO
        let t = [
            'imageMedia/spottedCats/' + n[0] + '.svg',
            'imageMedia/plainCats/' + n[1] + '.svg',
            'imageMedia/stripedCats/' + n[2] + '.svg',
            'imageMedia/plainCats/' + n[3] + '.svg'
        ]

        let tabs = [
            <ImageMedia key={'1'} catURL={t[0]}/>,
            <ImageMedia key={'2'} catURL={t[1]}/>,
            <ImageMedia key={'3'} catURL={t[2]}/>,
            <ImageMedia key={'4'} catURL={t[3]}/>,
        ];
        
    return(
        <div>
            <div>
                <Toolbar drawerClickHandler={this.drawerToggleClickHandler} click={this.handleTEST}/>
                <SideDrawer show={this.state.sideDrawerOpen} click={this.handleTEST}/>
                {backdrop}
            </div>
            <main className={classes.Content} id="randomElement">
                {tabs[this.state.currentState]}
            </main>
        </div>
    );
    }
}
