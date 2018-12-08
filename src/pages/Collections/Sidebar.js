import React from 'react';
import Aux from '../../hoc/Aux';

import classNames from 'classnames';
import styles from '../Sidebar.module.css';

// routing
import { NavLink } from 'react-router-dom';

const sidebar = (props) => {

    return (
        <Aux>
            <div className={classNames(styles.sidebar)}>
                <h3 className={classNames(styles.heading)}>
                    Collections
                </h3>
                <div className={classNames(styles.links)}>
                    <NavLink activeClassName={styles.activeLink} to="/collections/search"><span>Search the Collections</span></NavLink>
                    <NavLink activeClassName={styles.activeLink} to="/collections/how-to-use"><span>How to Use</span></NavLink>
                    <NavLink activeClassName={styles.activeLink} to="/collections/daily-object"><span>Object of the Day</span></NavLink>
                </div>
            </div>
        </Aux>
    )
}

export default sidebar;
