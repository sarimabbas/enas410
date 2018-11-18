import React, { Component } from 'react';

// custom components
import Nav from './components/Nav/Nav1';
import Masthead from './components/Masthead/Masthead';
import SpotlightSection from './components/Spotlight/SpotlightSection';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';



// import debug from './Debug.module.css';

// styles
import './App.css';

// icons with FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons'
library.add(faFacebook, faTwitter, faInstagram, faYoutube, faBars, faSearch)


class App extends Component {
    render() {
        return (
            <div className="App">
                <Hero/>
                <SpotlightSection/>
                <Footer/>
            </div>
        );
    }
}
    
export default App;
    