import React, { Component } from 'react';

function textFormatter(t) {
    let s = '';
    for(let i = 0; i < t.text.length; i++){
        s+= t.text[i] + '<br/>';
    };
    const el = <p dangerouslySetInnerHTML={{__html: s}} />;
    return el;
}

export class TextMedia extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            texts: [],
            textPath: '',
            savedText: {}
        };
        this.renderTextContent = this.renderTextContent.bind(this);
        this.getText = this.getText.bind(this);
    }

    getText() {
        let chosenURL = this.props.textURL;
        const { savedText, textPath } = this.state;
        //if the chosen URL is not equal to the textPath
        if( !(chosenURL === textPath) ){
            //Check if the chosenURL already is fetched in savedTexts
            if(chosenURL in savedText) {
                this.setState({
                    textPath: chosenURL,
                    savedText: savedText[chosenURL]
                });
            } else {
                //if not fetched yet
                fetch(chosenURL)
                    .then(response => response.json())
                    .then(
                        (result) => {
                            this.setState({
                                isLoaded: true,
                                texts: result,
                                textPath: chosenURL,
                                savedText: this.state.savedText[chosenURL] = result
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
        }
    }

    componentDidMount() {
        this.getText();
    }

    componentDidUpdate() {
        const chosenURL = this.props.textURL;
        const { textPath } = this.state;
        if( !(chosenURL === textPath) ) {
            this.getText();
        }
    }


        renderTextContent() {
            const { error, isLoaded, texts } = this.state;
            if (error) {
                return <div>Error: {error.message}</div>;
            } else if (!isLoaded) {
                return <div>Loading...</div>;
            } else {

                //TODO: function for checking what radio button is clicked to handle text
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