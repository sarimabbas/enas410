import React from 'react';
import Aux from '../../hoc/Aux';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import styles from './Sidebar.module.css';

const sidebar = (props) => {

    return (
        <Aux>
            <div className={classNames(styles.sidebar)}>
                <h1 className={classNames(styles.heading)}>
                    Exhibits
                </h1>
                <div className={classNames(styles.links)}>
                    <a href="#current">Current Exhibits</a>
                    <a href="#temporary">Temporary Exhibits</a>
                    <a href="#upcoming">Upcoming Exhibits</a>
                </div>
            </div>
        </Aux>
    )
}

export default sidebar;
