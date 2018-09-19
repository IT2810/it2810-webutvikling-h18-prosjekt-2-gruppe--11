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
            <li><a href="/">Tab 1</a></li>
            <li><a href="/">Tab 2</a></li>
            <li><a href="/">Tab 3</a></li>
            <li><a href="/">Tab 4</a></li>
        </ul>
    </nav>
    );
};

export default sideDrawer;