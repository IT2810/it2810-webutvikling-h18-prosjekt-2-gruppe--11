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
             <div>
                 <Layout />
            </div>
        )
    }
}

export default App;