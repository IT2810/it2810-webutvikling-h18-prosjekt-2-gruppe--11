import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { CallAJAXTextMedia } from "./components/CallAJAXTextMedia";
import { MediaTypeMenu } from "./components/MediaTypeMenu";

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
                <div dangerouslySetInnerHTML={{__html: this.state.texts}} />

                <div className="textContainer">
                </div>

                    {/*AJAX test render of text title*/}
                    <div className="textContainer">
                        <CallAJAXTextMedia/>
                    </div>

                {/*RADIOBUTTONS*/}
                <div id="mediaTypeMenu">
                    <MediaTypeMenu/>
                </div>

                <div>
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
