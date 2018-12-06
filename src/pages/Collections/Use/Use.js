import React from 'react';
import Aux from '../../../hoc/Aux';


import classNames from 'classnames';
import styles from './use.module.css';

// routing
import { Link } from 'react-router-dom';

// assets


const search = (props) => {
    return (
        <Aux>
            <h1 className={classNames(styles.title)}>Using the Collections</h1>
            <img src={sample}></img>
        </Aux>
    )
}

export default search;