// react
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import ScrollToTop from './hoc/ScrollToTop';

// pages
import Home from './pages/Home/Home'
import Visit from './pages/Visit/Visit'
import Exhibits from './pages/Exhibits/Exhibits'
import Learn from './pages/Learn/Learn'
import Collections from './pages/Collections/Collections'
import About from './pages/About/About'
import FloorMap from './pages/FloorMap/FloorMap'

// styles
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faBars, faSearch, faTimes } from '@fortawesome/free-solid-svg-icons'
library.add(faFacebook, faTwitter, faInstagram, faYoutube, faBars, faSearch, faTimes)

class App extends Component {
    render() {
        return (
            <div className="App">
                <Router>
                    <ScrollToTop>
                        <Switch>
                            <Route path="/" exact component={Home} />
                            <Route path="/visit" component={Visit} />
                            <Route path="/exhibits" component={Exhibits} />
                            <Route path="/learn" component={Learn} />
                            <Route path="/collections" component={Collections} />
                            <Route path="/about" component={About} />
                            <Route path="/floor-plan" component={FloorMap} />
                        </Switch>
                    </ScrollToTop>
                </Router>
            </div>
        );
    }
}
    
export default App;
