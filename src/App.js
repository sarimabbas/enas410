import React, { Component } from 'react';

// routing
import { Route } from 'react-router-dom';

// pages
import Home from './pages/Home/Home'

// styles
import './App.css';
import 'bulma/css/bulma.css';
// import debug from './Debug.module.css';

// icons with FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faBars, faSearch, faTimes } from '@fortawesome/free-solid-svg-icons'
library.add(faFacebook, faTwitter, faInstagram, faYoutube, faBars, faSearch, faTimes)


class App extends Component {
    render() {
        return (
            <div className="App">
                <Route path="/" exact component={Home} />
            </div>
        );
    }
}
    
export default App;
    