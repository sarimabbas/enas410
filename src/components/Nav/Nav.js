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

        if (!this.state.scrollThresholdMet && scrollTop > 500) {
            this.setState({
                scrollThresholdMet : true,
            })
        } 

        if (this.state.scrollThresholdMet && scrollTop <= 500) {
            this.setState({
                scrollThresholdMet: false,
            })
        }

        // console.log(scrollTop);
    }

    render() {
        
        let opaque = this.state.scrollThresholdMet ? styles.opaque : NaN;
        return (
            <Aux>
                <div className={classNames(styles.nav, opaque)}>
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