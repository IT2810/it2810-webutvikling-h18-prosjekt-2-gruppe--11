/*
 Base of the entire site (The presentation)
  */

// Libraries
import React, { Component } from 'react';

// Comment
import { MediaTypeMenu } from "./components/MediaTypeMenu/MediaTypeMenu";

import {Layout} from './components/Layout/Layout';

class App extends Component {
    render() {
        return (
             <div style={{height: '100%'}}>
                 <div style={{padding: '15px', textAlign: 'center'}}><h1> Mediautstilling </h1></div>
                 <div><Layout/></div>

                 {/*RADIOBUTTONS*/}
                <div id="mediaTypeMenu">
                    <MediaTypeMenu/>
                </div>

                <div>
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