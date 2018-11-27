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
            width: "'wdth' 1000",
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
        const shrinkSpeed = 6;

        // set the font-width as a function of scroll and max font width
        const fontMax = 1000;
        let normalized = ((scrollTop - 0.0) / (document.documentElement.scrollHeight) - 0.0) * shrinkSpeed
       
        let widthNo = ((1 - normalized) * fontMax).toString();
        let width = "'wdth' " + widthNo

        this.setState({
            width : width,
        })

        console.log(width)


        // hiding the logo completely
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
        // hiding the logo completely
        let fade = this.state.scrollThresholdMet ? styles.transparent : styles.opaque;

        return(
            <Aux>
                <div className={classNames(styles.floto, fade)}>
                    <h1 className={classNames(styles.text)} 
                        style={{fontVariationSettings: this.state.width}}>
                        Peabody
                    </h1>
                </div>
            </Aux>
        )
    }
}

export default floto;