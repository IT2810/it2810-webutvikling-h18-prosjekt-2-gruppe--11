/*
Builder
 */

import React, { Component } from 'react';
import { RadioButtons } from "../RadioButtons/RadioButtons";
import {ImageMedia} from "../Content/MediaTypes/ImageMedia";
import {TextMedia} from "../Content/MediaTypes/TextMedia";

//Change radio button names and values here:
const cats = [
    { text: "Spotted", val: "spottedCats" },
    { text: "Striped", val: "stripedCats" },
    { text: "Plain", val: "plainCats" }
];

const texts = [
    { text: "Poems", val: "poems" },
    { text: "Songs", val: "songs" },
    { text: "Quotes", val: "quotes" }
];

const sounds = [
    { text: "Big Cats", val: "bigCat" },
    { text: "Small Cats", val: "smallCat" },
    { text: "Surprise Sounds", val: "surpriseSounds" }
];

export class MediaTypeMenu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedCat: '',
            selectedText: '',
            selectedSound: ''
        };

        this.handleCatChange = this.handleCatChange.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleSoundChange = this.handleSoundChange.bind(this);

        //this.testCat = this.testCat.bind(this);
    }

    handleCatChange(event) {
        this.setState(
            {
                selectedCat: event.target.value
            }
        );
        console.log("Selected cat: " + event.target.value);
    }

    handleTextChange(event) {
        this.setState(
            {
                selectedText: event.target.value
            }
        );
        console.log("Selected text: " + event.target.value);
    }

    handleSoundChange(event) {
        this.setState(
            {
                selectedSound: event.target.value
            }
        );
        console.log("Selected song: " + event.target.value);
    }

    render() {
        const { selectedCat, selectedText, selectedSound } = this.state;

        return (
            <div>
                <form>
                    <RadioButtons ifChecked={selectedCat} typesChange={this.handleCatChange} categoryName="cats" lists={cats} titleMedia="Cat Types: "/>
                    <RadioButtons ifChecked={selectedText} typesChange={this.handleTextChange} categoryName="texts" lists={texts} titleMedia="Text Types: "/>
                    <RadioButtons ifChecked={selectedSound} typesChange={this.handleSoundChange} categoryName="sounds" lists={sounds} titleMedia="Sound Types: "/>
                </form>

{/*                {(() => {
                    switch (this.state.selectedCat) {
                        case "spottedCats":   return <ImageMedia sim="spottedCats"/>;
                        case "plainCats": return <ImageMedia sim="plainCats"/>;
                        case "stripedCats":  return <ImageMedia sim="stripedCats"/>;
                        default:      return <ImageMedia sim="stripedCats"/>;
                    }
                })()}*/}

{/*                <div>
                    {selectedCat == 'spottedCats'?<ImageMedia sim="spottedCats"/>: <ImageMedia sim="plainCats"/> }
                </div>*/}

            </div>
        );
    }
}
