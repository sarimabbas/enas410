import React from 'react';
import Aux from '../../../hoc/Aux';


import classNames from 'classnames';
import styles from './Cafe.module.css';

// routing
import { Link } from 'react-router-dom';

// assets
import CAFE from './cafe.jpg';

const cafe = (props) => {
    return (
        <Aux>
            <h1 className={classNames(styles.title)}>Peabody Café</h1>
            <div className={classNames(styles.imageContainer)}>
                <img className={classNames(styles.image)} src={CAFE}></img>
            </div>
            <p>
                We are excited to announce the Peabody Cafe, coming to you Spring 2019! The cafe will be a space in the museum for visitors to take a break and refuel in addition to a study spot for Yale and New Haven students.
            </p>
        </Aux>
    )
}

export default cafe;