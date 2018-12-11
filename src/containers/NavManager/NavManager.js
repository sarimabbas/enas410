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
            paddingBottom: "7vh",
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
        const scrollThreshold = window.innerHeight - 64;
        const shrinkSpeed = 5.20;

        // set the font-width as a function of scroll and max font width
        const fontMax = 1000;
        let normalized = ((scrollTop - 0.0) / (document.documentElement.scrollHeight) - 0.0) * shrinkSpeed
       
        let widthNo = ((1 - normalized) * fontMax).toString();

        let fontWeight = 800 - (200 / window.innerHeight * scrollTop);


        
        let width = "'wdth' " + widthNo + ", 'wght' " + fontWeight; 
        let paddingBottom = 7 - (7 / window.innerHeight * scrollTop);
    

        this.setState({
            width : width,
            paddingBottom : paddingBottom + "vh",
        })

        // console.log(width)

        // don't follow on scroll once width threshold has been met
        const pos = scrollThreshold / 1.8;
        // if (scrollTop > pos) {
        //     this.setState({
        //         positionType: "absolute",
        //         top: pos
        //     })
        // } else {
        //     this.setState({
        //         positionType: "fixed",
        //         top: 0
        //     })
        // }

        // hiding the logo completely after a threshold
        if (!this.state.scrollThresholdMet && scrollTop > scrollThreshold - 280) {
            this.setState({
                scrollThresholdMet: true,
                fadedOnce: true,
            })
        }

        if (this.state.scrollThresholdMet && scrollTop <= scrollThreshold - 280) {
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
                    paddingBottom={this.state.paddingBottom}
                />
                <Nav scrollThresholdMet={this.state.scrollThresholdMet} 
                     fadedOnce={this.state.fadedOnce}/>
            </Aux>
        )
     

    }

}

export default navmanager;