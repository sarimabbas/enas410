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
                    {/* heading */}
                    About
                    {/* end heading */}
                </h3>
                <div className={classNames(styles.links)}>
                    <NavLink activeClassName={styles.activeLink} to="/about/mission"><span>Mission {'&'} History</span></NavLink>
                    <NavLink activeClassName={styles.activeLink} to="/about/highlights"><span>Peabody Highlights</span></NavLink>
                    <NavLink activeClassName={styles.activeLink} to="/about/staff"><span>Staff</span></NavLink>
                    <NavLink activeClassName={styles.activeLink} to="/about/class"><span>Class</span></NavLink>
                    <NavLink activeClassName={styles.activeLink} to="/about/contact"><span>Contact Us</span></NavLink>
                </div>
            </div>
        </Aux>
    )
}

export default sidebar;
