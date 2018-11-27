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
                        <a href="/" className={classNames(styles.link)}>
                            Yale Peabody Museum of Natural History
                        </a>
                    </div>
                    <div className={classNames(styles.links)}>
                        <a href="/visit" className={classNames(styles.link)}>Visit</a>
                        <a className={classNames(styles.link)}>Exhibitions</a>
                        <a className={classNames(styles.link)}>Learn</a>
                        <a className={classNames(styles.link)}>Collections</a>
                        <a className={classNames(styles.link)}>About</a>
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