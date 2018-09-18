import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

    //AJAX for fetching text
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            texts: [],
        };
    }

    //Make your AJAX calls here, my dudes
    componentDidMount() {

        //AJAX call for text media
        fetch("textMedia/1/poems.json")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        texts: result.texts,
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )

    }

    _renderContent() {
        const {error, isLoaded, texts} = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            //TODO: index chooses text
            return (
                <div className="textfield">
                    <h2>{texts[0].title}</h2>
                </div>
            );
        }
    }
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
                        {this._renderContent()}
                    </div>
                </div>
            );
        }
    }


export default App;
