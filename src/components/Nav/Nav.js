import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Overlay from './Overlay';

// styles
import styles from './Nav.module.css'
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// routing
import { Link } from 'react-router-dom';

class nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showOverlay: false,
        }

        this.showSettings = this.showSettings.bind(this);
    }

    showSettings = (event) => {
        if (this.state.showOverlay) {
            this.setState({
                showOverlay: false,
            })
        } else {
            this.setState({
                showOverlay: true,
            })
        }
    }

    render() {

        console.log(this.props);

        // fade logic
        let barFade, logoFade= NaN;
        if (this.props.fadedOnce) {
            barFade = this.props.scrollThresholdMet ? styles.barOpaque : styles.barTransparent;
            logoFade = this.props.scrollThresholdMet ? styles.logoOpaque : styles.logoTransparent;
        }

        // overlay logic
        let overlay = this.state.showOverlay ? <Overlay clickHandler={this.showSettings} /> : null;
        let overlayFade = this.state.showOverlay ? styles.logoTransparent : null;

        return (
            <Aux>
                <div className={classNames(styles.nav, barFade, overlayFade)} >
                    <div className={classNames(styles.logo, logoFade)}>
                    <a href="/" className={classNames(styles.link)}>
                            Yale Peabody Museum of Natural History
                    </a>
                    </div>
                    <div className={classNames(styles.right)}>
                        <div className={classNames(styles.links)}>
                            <Link to="/visit" className={classNames(styles.link, styles.linkFirst)}>Visit</Link>
                            <Link to="/exhibits" className={classNames(styles.link)}>Exhibits</Link>
                            <Link to="/learn" className={classNames(styles.link)}>Learn</Link>
                            <Link to="/collections" className={classNames(styles.link)}>Collections</Link>
                            <Link to="/about" className={classNames(styles.link)}>About</Link>
                        </div>
                        <div>
                            <FontAwesomeIcon href="#" onClick={this.showSettings} icon={["fas", "bars"]} className={classNames(styles.link)}>
                            </FontAwesomeIcon>
                        </div>
                    </div>
                </div>
                { overlay }
            </Aux>
        )
    }
}

export default nav;