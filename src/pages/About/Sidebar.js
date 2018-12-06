import React from 'react';
import Aux from '../../hoc/Aux';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import styles from '../Sidebar.module.css';

const sidebar = (props) => {

    return (
        <Aux>
            <div className={classNames(styles.sidebar)}>
                <h1 className={classNames(styles.heading)}>
                    {/* heading */}
                    About
                    {/* end heading */}
                </h1>
                <div className={classNames(styles.links)}>
                    <Link to="/about/history"><span>History</span></Link>
                    <Link to="/about/contact"><span>Contact</span></Link>
                    <Link to="/about/staff"><span>Staff</span></Link>
                </div>
            </div>
        </Aux>
    )
}

export default sidebar;
