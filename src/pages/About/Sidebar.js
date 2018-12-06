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
                    {/* heading */}
                    Sidebar
                    {/* end heading */}
                </h1>
                <div className={classNames(styles.links)}>
                    {/* links */}
                    {/* end links */}
                </div>
            </div>
        </Aux>
    )
}

export default sidebar;
