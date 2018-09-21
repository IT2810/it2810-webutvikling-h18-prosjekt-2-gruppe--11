import React, { Component } from 'react';

export class ImageMedia extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            imageSVG: '',
            imagePath: '',
            savedSVG: {}
        };
    }

    getImage() {
        let chosenURL = this.props.catURL;
        const { savedSVG, imagePath} = this.state;
        //if the chosen URL is not equal to the imagePath
        if( !(chosenURL === imagePath) ){
            //Check if the chosenURL already is fetched in savedSVGs
            if(chosenURL in savedSVG) {
                this.setState({
                imagePath: chosenURL,
                imageSVG: savedSVG[chosenURL]
                });
            } else {
                //if not fetched yet
                fetch(chosenURL)
                .then(response => response.text())
                .then(svg => {
                    return this.setState({
                        imageSVG: svg,
                        imagePath: chosenURL,
                        savedSVG: this.state.savedSVG[chosenURL] = svg
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
        this.getImage();
    }

    componentDidUpdate() {
        const chosenURL = this.props.catURL;
        const { imagePath } = this.state;
        if( !(chosenURL === imagePath) ) {
            this.getImage();
        }
    }

    render() {
        return (
            <div dangerouslySetInnerHTML={{__html: this.state.imageSVG}} />
        );
    }

}