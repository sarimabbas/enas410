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
                    Interactive Floor Plan
                </h3>
                <div className={classNames(styles.links)}>
                    <NavLink activeClassName={styles.activeLink} to="/map/first-floor"><span>First Floor</span></NavLink>
                    <NavLink activeClassName={styles.activeLink} to="/map/second-floor"><span>Second Floor</span></NavLink>
                    <NavLink activeClassName={styles.activeLink} to="/map/third-floor"><span>Third Floor</span></NavLink>
                </div>
            </div>
        </Aux>
    )
}

export default sidebar;
