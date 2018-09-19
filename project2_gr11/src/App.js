import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { MediaTypeMenu } from "./components/MediaTypeMenu";

const cats = [
    { text: "Spotted", val: "spotted" },
    { text: "Striped", val: "striped" },
    { text: "Plain", val: "plain" }
];

const texts = [
    { text: "Poems", val: "poems" },
    { text: "Songs", val: "songs" },
    { text: "Quotes", val: "quotes" }
];

const sounds = [
    { text: "Feminine Voice", val: "fVoice" },
    { text: "Masculine Voice", val: "mVoice" },
    { text: "Child Voice", val: "cVoice" }
];

class App extends Component {

    //Form

        render()
        {
            return (
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <h1 className="App-title">Welcome to React</h1>
                    </header>
                    <p className="App-intro">
                        To get started, edit <code>src/App.js</code> and save to reload.
                    </p>
                    <div className="textContainer">
                    </div>

                    {/*RADIOBUTTONS*/}
                    <div id="mediaTypeMenu">
                        <MediaTypeMenu/>
                    </div>

                    <div>
                        <audio controls>
                            <source src="sound_media/surpriseSounds/1.mp3" type="audio/mpeg" />
                            Your browser does not support the audio element.
                        </audio>
                    </div>

                </div>
            );
        }
    }

export default App;
