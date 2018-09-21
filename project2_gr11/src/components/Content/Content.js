// Libraries
import React, { Component } from 'react';
import {ImageMedia} from "./MediaTypes/ImageMedia";
import {TextMedia} from "./MediaTypes/TextMedia";

export class Content extends Component {
    render(){
        return (
            <div>
                <div className="imageContainer"><ImageMedia/></div>
                <div className="textContainer"><TextMedia/></div>
            </div>
        );
    }
}