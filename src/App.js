import React, { Component } from 'react';

// custom components
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import SpotlightSection from './components/Spotlight/SpotlightSection';

// styles
import './App.css';
import 'bulma/css/bulma.css';
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
                <Hero/>
                <SpotlightSection/>
                <Footer/>
            </div>
        );
    }
}
    
export default App;
    