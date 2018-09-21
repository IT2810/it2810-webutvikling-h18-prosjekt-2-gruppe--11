// Libraries
import React, { Component } from 'react';
import {ImageMedia} from "./MediaTypes/ImageMedia";
import {TextMedia} from "./MediaTypes/TextMedia";
import {MediaTypeMenu} from "../MediaTypeMenu/MediaTypeMenu";

export class Content extends Component {
    render(){
        return (
            <div>
                <div className="imageContainer"><ImageMedia sim={'spottedCats'}/></div>
                <div className="textContainer"><TextMedia/></div>
            </div>
        );
    }
}