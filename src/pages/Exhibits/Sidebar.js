import React from 'react';
import Aux from '../../hoc/Aux';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import styles from '../Sidebar.module.css';

const sidebar = (props) => {

    return (
        <Aux>
            <div className={classNames(styles.sidebar)}>
                <h3 className={classNames(styles.heading)}>
                    Exhibits
                </h3>
                <div className={classNames(styles.links)}>
                    <NavLink activeClassName={styles.activeLink} to="/exhibits/on-view"><span>Exhibits On View</span></NavLink>
                    <NavLink activeClassName={styles.activeLink} to="/exhibits/temporary"><span>Temporary Exhibits</span></NavLink>
                    <NavLink activeClassName={styles.activeLink} to="/exhibits/past"><span>Past Exhibits</span></NavLink>
                    <NavLink activeClassName={styles.activeLink} to="/exhibits/calendar"><span>Events Calendar</span></NavLink>
                </div>
            </div>
        </Aux>
    )
}

export default sidebar;
