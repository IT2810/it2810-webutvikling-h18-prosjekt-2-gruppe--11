/*
 Base of the entire site (The presentation)
  */

// Libraries
import React, { Component } from 'react';

import { MediaTypeMenu } from "./components/MediaTypeMenu/MediaTypeMenu";
import {Layout} from './components/Layout/Layout';

import "./Style.css";

class App extends Component {
    render() {
        return (
             <div id="content">
                 <div className="title"><h1> KATTegorier </h1></div>

                 <div className="layout"><Layout/></div>

                 {/*RADIOBUTTONS*/}
                <div id="mediaTypeMenu" className="menu">
                    <MediaTypeMenu/>
                </div>

                <div className="audio">
                  {/*Random audio*/}
                    <audio controls>
                        <source src="soundMedia/surpriseSounds/1.mp3" type="audio/mpeg" />
                        Your browser does not support the audio element.
                    </audio>
                </div>
            </div>
        )
    }
}

export default App;