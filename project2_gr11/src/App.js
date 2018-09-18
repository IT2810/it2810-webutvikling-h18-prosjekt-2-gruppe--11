import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import { CallAJAXTextMedia } from "./components/CallAJAXTextMedia";
import { GenerateRadioBtn } from "./components/GenerateRadioBtn";

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

                    {/*RADIOBUTTON TEST*/}
                    <GenerateRadioBtn />
                </div>
            );
        }
    }


export default App;
