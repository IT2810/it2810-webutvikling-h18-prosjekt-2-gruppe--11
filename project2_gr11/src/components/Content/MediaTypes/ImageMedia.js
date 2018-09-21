import React, { Component } from 'react';

function randomNumber() {
    let number = Math.floor((Math.random() * 4) + 1);
    return number;
}

export class ImageMedia extends Component {
    constructor(props) {
        super(props);
        const testMe = this.props.sim;
        this.state = {
            error: null,
            isLoaded: false,
            imageSVG: '',
            selectedImageMedia: testMe
        };
    }

    componentDidMount() {
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

    // Ensure that is only updates when nextprops show
    componentDidUpdate(nextProps, nextState) {
        if (nextProps.data !== this.props.data) {
            this.images = nextState.images({
                images: this.props.data
            });
        }
    }

    // ^comfirms if that works
    componentWillUpdate() {
        console.log('[Image will update]');
    }

    render() {
        return (
            <div dangerouslySetInnerHTML={{__html: this.state.imageSVG}} />
        );
    }

}