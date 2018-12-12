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

        console.log(this.props)
        // hiding the logo completely
        let fade = this.props.scrollThresholdMet ? styles.transparent : styles.opaque;
        // yo on line 23 put back "fade" if you want floto to fade out
        return(
            <Aux>
                <div className={classNames(styles.floto)}
                    style={{
                        position: this.props.positionType,
                        top: this.props.top
                    }}>
                    <h1 className={classNames(styles.text)} 
                        style={{
                            paddingBottom: this.props.paddingBottom,
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