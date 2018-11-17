import React, { Component } from 'react';
import Nav from './components/Nav/Nav1';
import Masthead from './components/Masthead/Masthead';
import UpdateCard from './components/Update/UpdateCard';
import Footer from './components/Footer/Footer';

import './App.css';

// import debug from './Debug.module.css';

// icons with FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons'
library.add(faFacebook, faTwitter, faInstagram, faYoutube, faBars, faSearch)



class App extends Component {
    render() {
        return (
            <div className="App">
                <Nav/>
                <Masthead/>
                <section className="section">
                    <div className="container">
                        <div className="columns">
                            <div className="column">
                                <UpdateCard />
                            </div>
                            <div className="column">
                                <UpdateCard />
                            </div>
                            <div className="column">
                                <UpdateCard />
                            </div>
                        </div>
                    </div>
                </section>
                <Footer/>
            </div>
        );
    }
}
    
export default App;
    