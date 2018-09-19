import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            texts: ''
        };
    }

    componentDidMount() {
        fetch('imageMedia/plainCats/1.svg')
            .then(response => response.text())
            .then(svg => {
                return this.setState({
                    texts: svg
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

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <div dangerouslySetInnerHTML={{__html: this.state.texts}} />;
            </div>
        )
    }
}

export default App;