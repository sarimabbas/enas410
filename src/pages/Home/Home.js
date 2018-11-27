import React from 'react'

import Aux from '../../hoc/Aux';
import Floto from '../../components/Floto/Floto'
import Nav from '../../components/Nav/Nav'
import Hero from '../../components/Hero/Hero'
import SpotlightSection from '../../components/Spotlight/SpotlightSection'
import Footer from '../../components/Footer/Footer'

const home = (props) => {
    return (
        <Aux>
            <Floto/>
            <Nav/>
            <Hero/>
            <SpotlightSection/>
            <Footer/>
        </Aux>
    )
}

export default home