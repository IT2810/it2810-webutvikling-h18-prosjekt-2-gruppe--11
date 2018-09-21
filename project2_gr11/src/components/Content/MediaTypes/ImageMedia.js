import React, { Component } from 'react';

function randomNumber() {
    let number = Math.floor((Math.random() * 4) + 1);
    return number;
}

export class ImageMedia extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            imageSVG: '',
            selectedImageMedia: props.sim
        };
    }

    componentWillMount () {
        console.log(this.state.selectedImageMedia);
        let imageNr = randomNumber();

        fetch('imageMedia/'+ this.state.selectedImageMedia +'/' + imageNr + '.svg')
            .then(response => response.text())
            .then(svg => {
                    return this.setState({
                        imageSVG: svg
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
            <div dangerouslySetInnerHTML={{__html: this.state.imageSVG}} />
        );
    }

}