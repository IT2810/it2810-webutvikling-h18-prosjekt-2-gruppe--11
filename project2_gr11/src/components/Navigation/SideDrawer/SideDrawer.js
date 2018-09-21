import React from 'react';

import './SideDrawer.css';

const sideDrawer = props => {
    let drawerClasses = 'side-drawer';
    if (props.show) {
        drawerClasses = 'side-drawer open';
    }
    return (
    <nav className={drawerClasses}>
        <ul>
            <li><a id="tab0" tabIndex="0" role="button " onClick={props.click}>Tab 1</a></li>
            <li><a id="tab1" tabIndex="1" role="button " onClick={props.click}>Tab 2</a></li>
            <li><a id="tab2" tabIndex="2" role="button" onClick={props.click}>Tab 3</a></li>
            <li><a id="tab3" tabIndex="3" role="button" onClick={props.click}>Tab 4</a></li>
        </ul>
    </nav>
    );
};

export default sideDrawer;