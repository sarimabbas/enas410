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
                    Visit
                </h3>
                <div className={classNames(styles.links)}>
                    <NavLink activeClassName={styles.activeLink} to="/visit/admission"><span>Admission {'&'} Hours</span></NavLink>
                    <NavLink activeClassName={styles.activeLink} to="/floor-plan"><span>Interactive Floor Plan</span></NavLink>
                    <NavLink activeClassName={styles.activeLink} to="/visit/cafe"><span>Peabody Café</span></NavLink>
                    <NavLink activeClassName={styles.activeLink} to="/visit/directions"><span>Directions {'&'} Parking</span></NavLink>
                    <NavLink activeClassName={styles.activeLink} to="/visit/group-visits"><span>Group Visits</span></NavLink>
                </div>
            </div>
        </Aux>
    )
}

export default sidebar;
