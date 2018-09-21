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
            selectedSound: '',
            isToggleOn: true
        };

        this.handleCatChange = this.handleCatChange.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleSoundChange = this.handleSoundChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        //this.testCat = this.testCat.bind(this);
    }

    //
    componentWillUpdate() {
        console.log('[Radio button will update]');
    }

    handleCatChange(event) {
        this.setState(
            {
                selectedCat: event.target.value
            }
        );
    }

    handleTextChange(event) {
        this.setState(
            {
                selectedText: event.target.value
            }
        );
    }

    handleSoundChange(event) {
        this.setState(
            {
                selectedSound: event.target.value
            }
        );
    }

    handleSubmit(event) {
        //TODO: handle submit
        alert("Selected cat: " + this.state.selectedCat + "\nSelected text: " + this.state.selectedText + "\nSelected song: " + this.state.selectedSound);
        event.preventDefault();
    }

  /*  testCat(event) {
        event.preventDefault();
        this.setState(state =>({
            isToggleOn: !state.isToggleOn

        }));
        console.log(this.state.isToggleOn);
    }*/

    render() {
        const { selectedCat, selectedText, selectedSound } = this.state;
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <RadioButtons ifChecked={selectedCat} typesChange={this.handleCatChange} categoryName="cats" lists={cats} titleMedia="Cat Types: "/>
                    <RadioButtons ifChecked={selectedText} typesChange={this.handleTextChange} categoryName="texts" lists={texts} titleMedia="Text Types: "/>
                    <RadioButtons ifChecked={selectedSound} typesChange={this.handleSoundChange} categoryName="sounds" lists={sounds} titleMedia="Sound Types: "/>
                    <input type="submit" value="Generate" />
                </form>
                <div>
                <TextMedia/>
                </div>

            </div>
        );
    }
}
