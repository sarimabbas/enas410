import React from 'react';
import Aux from '../../../hoc/Aux';


import classNames from 'classnames';
import styles from './Cafe.module.css';

// routing
import { Link } from 'react-router-dom';

// assets
import sample from './sample.png';

const cafe = (props) => {
    return (
        <Aux>
            <h1 className={classNames(styles.title)}>Peabody Café</h1>
            <div className={classNames(styles.imageContainer)}>
                <img className={classNames(styles.image)} src={sample}></img>
            </div>
        </Aux>
    )
}

export default cafe;