import React, { Component } from 'react';

const cats = [
    { text: "Spotted", val: "spotted" },
    { text: "Striped", val: "striped" },
    { text: "Plain", val: "plain" }
];

const texts = [
    { text: "Poems", val: "poems" },
    { text: "Songs", val: "songs" },
    { text: "Quotes", val: "quotes" }
];

const sounds = [
    { text: "Feminine Voice", val: "fVoice" },
    { text: "Masculine Voice", val: "mVoice" },
    { text: "Child Voice", val: "cVoice" }
];

export class MediaTypeMenu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedCat: '',
            selectedText: '',
            values: []
        };

        this.handleCatChange = this.handleCatChange.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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

    handleSubmit(event) {
        alert("Selected cat: " + this.state.selectedCat + "\nSelected text: " + this.state.selectedText);
        event.preventDefault();
    }

    render() {
        const { selectedCat, selectedText } = this.state;
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <MakeRadioButtons ifChecked={selectedCat} typesChange={this.handleCatChange} categoryName="cats" lists={cats} titleMedia="Cat Types: "/>
                    <MakeRadioButtons ifChecked={selectedText} typesChange={this.handleTextChange} categoryName="texts" lists={texts} titleMedia="Text Types: "/>
                    <input type="submit" value="Generate"/>
                </form>

                <div>{selectedCat}</div>
                <div>{selectedText}</div>
            </div>
        );
    }

}

class MakeRadioButtons extends Component {

    render() {
        const titleMedia = this.props.titleMedia;
        const mediaList = this.props.lists;
        const category = this.props.categoryName;
        const typesChange = this.props.typesChange;
        const ifChecked = this.props.ifChecked;

        return (
            <div className="mediaTypeRB">
                <h2>{titleMedia}</h2>
                {mediaList.map(item => (
                    <label>
                        <input type="radio" name={category} value={item.val} onChange={typesChange} checked={ifChecked === item.val}/>
                        {item.text}<br />
                    </label>
                ))}
            </div>
        );
    }

}