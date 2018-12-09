import React, { Component } from 'react';
import Aux from '../../hoc/Aux';

// manage the floto and the navbar
import Floto from '../../components/Floto/Floto';
import Nav from '../../components/Nav/Nav';

class navmanager extends Component {
    constructor(props) {
        super(props)
        this.state = {
            scrollThresholdMet: false,
            width: "'wdth' 1000" + ", 'wght' 800",
            positionType: "fixed",
            top: 0,
            fadedOnce: false,
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = (event) => {
        let scrollTop = document.scrollingElement.scrollTop
        const scrollThreshold = window.innerHeight;
        const shrinkSpeed = 4;

        // set the font-width as a function of scroll and max font width
        const fontMax = 1000;
        let normalized = ((scrollTop - 0.0) / (document.documentElement.scrollHeight) - 0.0) * shrinkSpeed
       
        let widthNo = ((1 - normalized) * fontMax).toString();
        let width = "'wdth' " + widthNo + ", 'wght' 800"; 

        this.setState({
            width : width,
        })

        // console.log(width)

        // don't follow on scroll once width threshold has been met
        const pos = scrollThreshold / 2;
        if (scrollTop > pos) {
            this.setState({
                positionType: "absolute",
                top: pos
            })
        } else {
            this.setState({
                positionType: "fixed",
                top: 0
            })
        }

        // hiding the logo completely after a threshold
        if (!this.state.scrollThresholdMet && scrollTop > scrollThreshold) {
            this.setState({
                scrollThresholdMet: true,
                fadedOnce: true,
            })
        }

        if (this.state.scrollThresholdMet && scrollTop <= scrollThreshold) {
            this.setState({
                scrollThresholdMet: false,
            })
        }

        // console.log(this.state)
    }

    render() {
        return(
            <Aux>
                <Floto 
                    scrollThresholdMet={this.state.scrollThresholdMet}
                    positionType={this.state.positionType}
                    top={this.state.top}
                    width={this.state.width}
                />
                <Nav scrollThresholdMet={this.state.scrollThresholdMet} 
                     fadedOnce={this.state.fadedOnce}/>
            </Aux>
        )
     

    }

}

export default navmanager;