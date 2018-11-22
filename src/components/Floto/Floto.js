import React, { Component } from 'react';
import Aux from '../../hoc/Aux';

// styles
import styles from './Floto.module.css'
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class floto extends Component {
    constructor(props) {
        super(props)
        this.state = {
            scrollThresholdMet: false,
            size: "15vh",
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
        const scrollThreshold = 650;
        const shrinkSpeed = 1.5;

        // set the size as a function of scroll and max font size
        const fontMax = 15;
        let normalized = ((scrollTop - 0.0) / (document.documentElement.scrollHeight) - 0.0) * shrinkSpeed
        let size = ((1 - normalized) * fontMax).toString() + "vh";

        this.setState({
            size : size,
        })

        // set the threshold (for hiding the logo completely)
        if (!this.state.scrollThresholdMet && scrollTop > scrollThreshold) {
            this.setState({
                scrollThresholdMet: true,
            })
        }

        if (this.state.scrollThresholdMet && scrollTop <= scrollThreshold) {
            this.setState({
                scrollThresholdMet: false,
            })
        }
     
    }
    
    render() {
        let fade = this.state.scrollThresholdMet ? styles.transparent : styles.opaque;
        return(
            <Aux>
                <div className={classNames(styles.floto, fade)}>
                    <h1 className={classNames(styles.text)} style={{fontSize: this.state.size}}>Peabody</h1>
                </div>
            </Aux>
        )
    }
}

export default floto;