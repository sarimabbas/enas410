import React from 'react';
import Aux from '../../../hoc/Aux';


import classNames from 'classnames';
import styles from './Directions.module.css';

// routing
import { Link } from 'react-router-dom';

// assets
import sample from './sample.png';

const directions = (props) => {
    return (
        <Aux>
            <h1 className={classNames(styles.title)}>Directions {'&'} Parking</h1>
            <img src={sample}></img>
        </Aux>
    )
}

export default directions;