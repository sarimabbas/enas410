import React from 'react';
import Aux from '../../hoc/Aux';

// styles
import styles from './Overlay.module.css'
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const overlay = (props) => {
    return (
        <Aux>
            <div className={classNames(styles.overlay)}>
                <div class={classNames(styles.headings)}>
                    <span className={classNames(styles.link)}>Visit</span>
                    <span className={classNames(styles.link)}>Exhibitions</span>
                    <span className={classNames(styles.link)}>Learn</span>
                    <span className={classNames(styles.link)}>Collections</span>
                    <span className={classNames(styles.link)}>About</span>
                </div>
                <div class={classNames(styles.links)}>

                </div>
            </div>
        </Aux>
    )
}

export default overlay;