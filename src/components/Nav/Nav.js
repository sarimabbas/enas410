import React, { Component } from 'react';
import Aux from '../../hoc/Aux';

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
        }

        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }   

    handleScroll = (event) => {
        let scrollTop = document.scrollingElement.scrollTop
        const scrollThreshold = 650; //! if changed here, make sure to change in Floto.js

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

        return (
            <Aux>
                <div className={classNames(styles.nav, barFade)} >
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
                        <FontAwesomeIcon icon={["fas", "bars"]} className={classNames(styles.link)}></FontAwesomeIcon>
                    </div>
                </div>
            </Aux>
        )
    }
}

export default nav;