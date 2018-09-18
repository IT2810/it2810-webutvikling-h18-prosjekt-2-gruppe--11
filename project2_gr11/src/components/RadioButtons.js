import React, { Component } from 'react';

export class RadioButtons extends Component {
    render() {
        return (
            <div>
                <h2>{this.props.typesTitle}</h2>
                {this.props.lists.map(item => (
                    <label>
                        <input type="radio" name={this.props.typesName} value={item.val} />
                        {item.text}
                        <br />
                    </label>
                ))}
            </div>
        );
    }
}