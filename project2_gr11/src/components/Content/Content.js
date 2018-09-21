// Libraries
import React, { Component } from 'react';

// what is dis
function textFormatter(t) {
    let s = '';
    for(let i = 0; i < t.text.length; i++){
        s+= t.text[i] + '<br/>';
    };
    const el = <p dangerouslySetInnerHTML={{__html: s}} />;
    return el;
}

export class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            images: '',
            texts: [],
        }
    }

    // Returns a number from 1-4
    randomNumber() {
        let number = Math.floor((Math.random() * 4) + 1);
        return number;
    }

    componentDidMount() {
        let nr = this.randomNumber();
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

/*    componentDidUpdate(prevProps, prevState) {
        // only update chart if the data has changed
        if (prevProps.data !== this.props.data) {
            this.images = prevState.images({
                images: this.props.data
            });
        }
    }*/

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
    render(){
        return (
            <div>
                {/*Render random image*/}
                <div className="imageContainer">
                    <div className="svg" dangerouslySetInnerHTML={{__html: this.state.images}} />
                </div>

                <div className="textContainer"></div>

                {/*AJAX test render of text title*/}
                <div className="textContainer">
                    {this.renderTextContent()}
                </div>
            </div>
        );
    }
}