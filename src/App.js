import React, { Component } from 'react';
import Nav from './components/Nav/Nav1';
import Masthead from './components/Masthead/Masthead';
import UpdateCard from './components/Update/UpdateCard';

import './App.css';

// import debug from './Debug.module.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Nav/>
                <Masthead/>
                <section class="section">
                    <div className="container">
                        <div class="columns">
                            <div class="column">
                                <UpdateCard />
                            </div>
                            <div class="column">
                                <UpdateCard />
                            </div>
                            <div class="column">
                                <UpdateCard />
                            </div>
                        </div>
                    </div>
                </section>
               
            </div>
        );
    }
}
    
export default App;
    