import React from 'react'

import Aux from '../../hoc/Aux';
import Hero from '../../components/Hero/Hero'
import SpotlightSection from '../../components/Spotlight/SpotlightSection'
import Footer from '../../components/Footer/Footer'

import NavManager from '../../containers/NavManager/NavManager';

const home = (props) => {
    return (
        <Aux>
            <NavManager/>
            <Hero/>
            <SpotlightSection/>
            <Footer/>
        </Aux>
    )
}

export default home