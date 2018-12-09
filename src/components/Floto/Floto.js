import React, { Component } from 'react';
import Aux from '../../hoc/Aux';

// styles
import styles from './Floto.module.css'
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class floto extends Component {
    // constructor(props) {
    //     super(props)
    // }
    
    render() {
        // hiding the logo completely
        let fade = this.props.scrollThresholdMet ? styles.transparent : styles.opaque;

        return(
            <Aux>
                <div className={classNames(styles.floto, fade)}
                    style={{
                        position: this.props.positionType,
                        top: this.props.top
                    }}>
                    <h1 className={classNames(styles.text)} 
                        style={{
                            fontVariationSettings: this.props.width,
                        }}>
                        Peabody
                    </h1>
                </div>
            </Aux>
        )
    }
}

export default floto;