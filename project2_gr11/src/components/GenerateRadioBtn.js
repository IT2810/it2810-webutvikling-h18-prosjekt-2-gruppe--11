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

export class GenerateRadioBtn extends Component {

    generateRB(typesTitle, list, typesName) {
        return (
            <div>
                <h2>{typesTitle}</h2>
                {list.map(item => (
                    <label>
                        <input type="radio" name={typesName} value={item.val} />
                        {item.text}
                        <br />
                    </label>
                ))}
            </div>
        );
    }

    render() {
        return (
            <div>
                <div>
                    {this.generateRB("Cat Types:", cats, "catTypes")}
                </div>
                <div>
                    {this.generateRB("Text Types:", texts, "textTypes")}
                </div>
            </div>
        );
    }
}