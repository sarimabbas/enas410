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
                    Learn
                </h3>
                <div className={classNames(styles.links)}>
                    <NavLink activeClassName={styles.activeLink} to="/learn/k12"><span>K-12 Programs</span></NavLink>
                    <a href="https://evolutions.peabody.yale.edu"><span>Peabody Evolutions</span></a>
                    <NavLink activeClassName={styles.activeLink} to="/learn/yale"><span>Yale Student Opportunities</span></NavLink>
                    <NavLink activeClassName={styles.activeLink} to="/learn/adult"><span>Adult Programs</span></NavLink>
                </div>
            </div>
        </Aux>
    )
}

export default sidebar;
