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
                    Learn
                </h1>
                <div className={classNames(styles.links)}>
                    <Link to="/learn/adult"><span>Adult</span></Link>
                    <Link to="/learn/group"><span>Group</span></Link>
                    <Link to="/learn/yale"><span>Yale</span></Link>
                </div>
            </div>
        </Aux>
    )
}

export default sidebar;
