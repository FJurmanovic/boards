import React, { Component } from 'react';

import { DndProvider } from 'react-dnd';
import { HTML5Backend } from "react-dnd-html5-backend";

import './app.scss';

import Boards from './boards';

class App extends Component {
    render() {
        return(
            <DndProvider backend={HTML5Backend}>
                <Boards />
            </DndProvider>
        );
    }
}

export default App;