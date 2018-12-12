import React, { Component } from 'react';

// components
import Aux from '../../hoc/Aux';
import Overlay from './Overlay';


// styles
import styles from './Nav.module.css'
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// routing
import { Link } from 'react-router-dom';

class navSimple extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showOverlay: false,
        }
        this.showSettings = this.showSettings.bind(this);
    }

    showSettings = (event) => {
        if (this.state.showOverlay) {
            document.ontouchmove = function (e) {
                return true;
            }
            this.setState({
                showOverlay: false,
            })
        } else {
            document.ontouchmove = function (e) {
                e.preventDefault();
            }
            this.setState({
                showOverlay: true,
            })
        }
    }

    render() {

        let overlay = this.state.showOverlay ? <Overlay clickHandler={this.showSettings}/> : null;
        let overlayFade = this.state.showOverlay ? styles.logoTransparent : null;

        return (
            <Aux>
                <div className={classNames(styles.nav, styles.barOpaque, overlayFade)} >
                    <div className={classNames(styles.logo, styles.logoOpaque)}>
                        <a href="/" className={classNames(styles.link, styles.museumTitle)}>
                            Peabody Museum of Natural History
                        </a>
                    </div>
                    <div className={classNames(styles.right)}>
                        <div className={classNames(styles.links)}>
                            <Link to="/visit" className={classNames(styles.link)}>Visit</Link>
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
                {overlay}
            </Aux>
        )
    }
}

export default navSimple