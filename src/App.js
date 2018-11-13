import React, { Component } from 'react';
import Nav from './components/Nav/Nav1';
import Masthead from './components/Masthead/Masthead';
import './App.css';

// import debug from './Debug.module.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Nav/>
                <Masthead/>
            </div>
        );
    }
}
    
export default App;
    