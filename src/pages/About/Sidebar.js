import React from 'react';
import Aux from '../../hoc/Aux';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import styles from '../Sidebar.module.css';

const sidebar = (props) => {

    return (
        <Aux>
            <div className={classNames(styles.sidebar)}>
                <h2 className={classNames(styles.heading)}>
                    {/* heading */}
                    About
                    {/* end heading */}
                </h2>
                <div className={classNames(styles.links)}>
                    <NavLink activeClassName={styles.activeLink} to="/about/highlights"><span>Peabody Highlights</span></NavLink>
                    <NavLink activeClassName={styles.activeLink} to="/about/mission"><span>Mission {'&'} History</span></NavLink>
                    <NavLink activeClassName={styles.activeLink} to="/about/contact"><span>Contact Us</span></NavLink>
                    <NavLink activeClassName={styles.activeLink} to="/about/staff"><span>Staff</span></NavLink>
                </div>
            </div>
        </Aux>
    )
}

export default sidebar;
