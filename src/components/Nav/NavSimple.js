import React, { Component } from 'react';

// components
import Aux from '../../hoc/Aux';
import Overlay from './Overlay';

// styles
import styles from './Nav.module.css'
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class navSimple extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showOverlay: false,
        }
        this.showSettings = this.showSettings.bind(this);
    }

    showSettings = (event) => {
        this.setState({
            showOverlay: true,
        })
    }

    render() {

        let overlay = this.state.showOverlay ? <Overlay /> : null;
        let overlayFade = this.state.showOverlay ? styles.logoTransparent : null;

        return (
            <Aux>
                <div className={classNames(styles.nav, styles.barOpaque, overlayFade)} >
                    <div className={classNames(styles.logo, styles.logoOpaque)}>
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
                {overlay}
            </Aux>
        )
    }
}

export default navSimple