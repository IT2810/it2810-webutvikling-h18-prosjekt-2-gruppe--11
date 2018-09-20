import {Component} from "react";
import React from "react";

export class RadioButtons extends Component {

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
                    <label key={item.val}>
                        <input type="radio" name={category} value={item.val} onChange={typesChange} checked={ifChecked === item.val}/>
                        {item.text}<br />
                    </label>
                ))}
            </div>
        );
    }

}