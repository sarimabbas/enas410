import React from 'react';
import Aux from '../../../hoc/Aux';


import classNames from 'classnames';
import styles from './Temporary.module.css';

// routing
import { Link } from 'react-router-dom';

const temporary = (props) => {
    return (
        <Aux>
            <h1 className={classNames(styles.title)}>Temporary</h1>
        </Aux>
    )
}

export default temporary;