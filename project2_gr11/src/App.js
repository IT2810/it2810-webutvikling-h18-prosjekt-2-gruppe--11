/*
 Base of the entire site (The presentation)
  */

// Libraries
import React, { Component } from 'react';
import './App.css';

// Comment
import { MediaTypeMenu } from "./components/MediaTypeMenu";

// Menu bar
import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';

// Rendering media into a box
import MediaBuilder from './containers/MediaBuilder/MediaBuilder';

// Menu-stuff
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

// what is dis
function textFormatter(t) {
    let s = '';
    for(let i = 0; i < t.text.length; i++){
        s+= t.text[i] + '<br/>';
    };
    const el = <p dangerouslySetInnerHTML={{__html: s}} />;
    return el;
}

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            images: '',
            texts: []
        };
    }
    
    // Returns a number from 1-4
    randomNumber() {
        let number = Math.floor((Math.random() * 4) + 1);
        return number;
    }

    componentDidMount() {
        let nr = this.randomNumber();
        //AJAX call for text and image media
        Promise.all([
            fetch('imageMedia/plainCats/' + nr + '.svg'),
            fetch("textMedia/poems/4.json")
        ])
            .then(( [response1, response2] ) => Promise.all([response1.text() ,response2.json()])
            .then(( [svg, jsonText] ) => {
                this.setState({
                    isLoaded: true,
                    images: svg,
                    texts: jsonText
                });
            },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            ))
        }

        renderTextContent() {
            const { error, isLoaded, texts } = this.state;
            if (error) {
                return <div>Error: {error.message}</div>;
            } else if (!isLoaded) {
                return <div>Loading...</div>;
            } else {

                //TODO: index chooses text
                return (
                    <div className="textfield">
                        <h2>{texts.title}</h2>
                        <div>{textFormatter(texts)}</div>
                        <p>-{texts.author}</p>
                    </div>
                );
            }
        }

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
                    <MediaBuilder/>
                </main>
          
                {/*Render random image*/}
                <div dangerouslySetInnerHTML={{__html: this.state.images}} />

                <div className="textContainer">
                </div>

                {/*AJAX test render of text title*/}
                <div className="textContainer">
                    {this.renderTextContent()}
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