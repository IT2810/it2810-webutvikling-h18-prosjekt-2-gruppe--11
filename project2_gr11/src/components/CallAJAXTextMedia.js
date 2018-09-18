import {Component} from "react";
import React from "react";

export class CallAJAXTextMedia extends Component {
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

    render() {
        return (
            <div>
                {this._renderContent()}
            </div>

        )

    }
}