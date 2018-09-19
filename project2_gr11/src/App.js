import React, { Component } from 'react';
import './App.css';
import { MediaTypeMenu } from "./components/MediaTypeMenu";

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

    componentDidMount() {
        //AJAX call for text and image media
        Promise.all([
            fetch('imageMedia/plainCats/1.svg'),
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

        return (
            <div className="App">
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
