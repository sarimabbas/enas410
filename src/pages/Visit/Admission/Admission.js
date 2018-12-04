import React from 'react';
import Aux from '../../../hoc/Aux';


import classNames from 'classnames';
import styles from './Admission.module.css';

// routing
import { Link } from 'react-router-dom';

// assets
import sample from './sample.png';

const admission = (props) => {
    return (
        <Aux>
            <h1 className={classNames(styles.title)}>Admission {'&'} Hours</h1>
            <img src={sample}></img>
        </Aux>
    )
}

export default admission;