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

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            texts: ''
        };
    }

    randomNumber() {
        let number = Math.floor((Math.random() * 4) + 1);
        return number;
    }

    componentDidMount() {
        let nr = this.randomNumber()
        fetch('imageMedia/plainCats/'+nr+'.svg')
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
