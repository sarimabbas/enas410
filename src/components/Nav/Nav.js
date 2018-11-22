import React from 'react';
import Aux from '../../hoc/Aux';

// styles
import styles from './Nav.module.css'
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const nav = (props) => { 
    return (
        <Aux>
            <div className={classNames(styles.nav)}>
                <div className={classNames(styles.links)}>
                    <span className={classNames(styles.navLink)}>Visit</span>
                    <span className={classNames(styles.navLink)}>Exhibitions</span>
                    <span className={classNames(styles.navLink)}>Learn</span>
                    <span className={classNames(styles.navLink)}>Collections</span>
                    <span className={classNames(styles.navLink)}>About</span>
                    <FontAwesomeIcon icon={["fas", "bars"]} className={classNames(styles.navLink)}></FontAwesomeIcon>
                </div>
            </div>

        </Aux>
    )
}

export default nav;