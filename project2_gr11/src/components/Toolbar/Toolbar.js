import React from 'react';

// DrawerToggleButton
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './Toolbar.css';
import TabOne from "./TabOne";

// Functional component
const toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar__navigation">
            <div className="toolbar__toggle-button">
                <DrawerToggleButton click={props.drawerClickHandler}/>
            </div>

            <div>
                <TabOne click={props.handleTabClick} />
            </div>

            <div className="spacer" />
            <div className="toolbar_navigation-items">
                <ul>
                    <li><a id="tab0" href="#" onClick={props.click}>Tab 1</a></li>
                    <li><a id="tab1" href="#" onClick={props.click}>Tab 2</a></li>
                    <li><a id="tab2" href="#" onClick={props.click}>Tab 3</a></li>
                    <li><a id="tab3" href="#" onClick={props.click}>Tab 4</a></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default toolbar;

