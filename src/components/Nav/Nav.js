import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Overlay from './Overlay';

// styles
import styles from './Nav.module.css'
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scrollThresholdMet : false,
            fadedOnce: false,
            showOverlay: false,
        }

        this.handleScroll = this.handleScroll.bind(this);
        this.showSettings = this.showSettings.bind(this);
    }

    showSettings = (event) => {
        this.setState({
            showOverlay: true,
        })
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }   

    handleScroll = (event) => {
        let scrollTop = document.scrollingElement.scrollTop
        const scrollThreshold = window.innerHeight; //! if changed here, make sure to change in Floto.js

        if (!this.state.scrollThresholdMet && scrollTop > scrollThreshold) {
            this.setState({
                scrollThresholdMet : true,
                fadedOnce: true,
            })
        } 

        if (this.state.scrollThresholdMet && scrollTop <= scrollThreshold) {
            this.setState({
                scrollThresholdMet: false,
            })
        }
    }

    render() {

        // fade logic
        let barFade, logoFade= NaN;
        if (this.state.fadedOnce) {
            barFade = this.state.scrollThresholdMet ? styles.barOpaque : styles.barTransparent;
            logoFade = this.state.scrollThresholdMet ? styles.logoOpaque : styles.logoTransparent;
        }

        let overlay = this.state.showOverlay ? <Overlay/> : null;
        let overlayFade = this.state.showOverlay ? styles.logoTransparent : null;

        return (
            <Aux>
                <div className={classNames(styles.nav, barFade, overlayFade)} >
                    <div className={classNames(styles.logo, logoFade)}>
                        <span className={classNames(styles.link)}>
                            Yale Peabody Museum of Natural History
                        </span>
                    </div>
                    <div className={classNames(styles.links)}>
                        <span className={classNames(styles.link)}>Visit</span>
                        <span className={classNames(styles.link)}>Exhibitions</span>
                        <span className={classNames(styles.link)}>Learn</span>
                        <span className={classNames(styles.link)}>Collections</span>
                        <span className={classNames(styles.link)}>About</span>
                        <FontAwesomeIcon href="#" onClick={this.showSettings} icon={["fas", "bars"]} className={classNames(styles.link)}>
                        </FontAwesomeIcon>
                    </div>
                </div>
                { overlay }
            </Aux>
        )
    }
}

export default nav;