// Libraries
import React, { Component } from 'react';
import {ImageMedia} from "./MediaTypes/ImageMedia";
import {TextMedia} from "./MediaTypes/TextMedia";

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
    render(){
        return (
            <div>
                <div>
                {/*Render random image*/}
                <ImageMedia/>
            </div>
                <div className="textContainer">
                {/*AJAX test render of text title*/}
                 <TextMedia/>
                </div>
            </div>
        );
    }
}