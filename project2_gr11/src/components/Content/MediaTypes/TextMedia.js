import React, { Component } from 'react';

function textFormatter(t) {
    let s = '';
    for(let i = 0; i < t.text.length; i++){
        s+= t.text[i] + '<br/>';
    };
    const el = <p dangerouslySetInnerHTML={{__html: s}} />;
    return el;
}

function randomNumber() {
    let number = Math.floor((Math.random() * 4) + 1);
    return number;
}

export class TextMedia extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            texts: [],
            selectedTextMedia: ''
        };
        this.renderTextContent = this.renderTextContent.bind(this);
    }
        componentDidMount() {
            let textNr = randomNumber();
            let chosenText = 'poems';

            //AJAX call for text and image media
            fetch('textMedia/'+ chosenText + '/'+ textNr +'.json')
            .then( response => response.json())
            .then(
                (result)  => {
                    this.setState({
                        isLoaded: true,
                        texts: result
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                })
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
                <div>{this.renderTextContent()}</div>
            );
        }
}