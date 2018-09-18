import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import { CallAJAXTextMedia } from "./components/CallAJAXTextMedia";
import { RadioButtons } from "./components/RadioButtons";

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
                    {/*AJAX test render of text title*/}
                    <div className="textContainer">
                        {/*<CallAJAXTextMedia/>*/}
                    </div>

                    {/*RADIOBUTTONS*/}
                    <div>
                        <RadioButtons typesTitle="Cat Types:" lists={cats} typesName="catTypes" />
                        <RadioButtons typesTitle="Text Types:" lists={texts} typesName="textTypes" />
                        <RadioButtons typesTitle="Sounds Types:" lists={sounds} typesName="soundTypes" />
                    </div>
                </div>
            );
        }
    }


export default App;
