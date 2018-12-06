import React from 'react';
import Aux from '../../hoc/Aux';

import classNames from 'classnames';
import styles from '../Sidebar.module.css';

// routing
import { Link } from 'react-router-dom';

const sidebar = (props) => {

    return (
        <Aux>
            <div className={classNames(styles.sidebar)}>
                <h1 className={classNames(styles.heading)}>
                    Visit
                </h1>
                <div className={classNames(styles.links)}>
                    <Link to="/map"><span>Map</span></Link>
                    <Link to="/visit/admission"><span>Admission {'&'} Hours</span></Link>
                    <Link to="/visit/directions"><span>Directions {'&'} Parking</span></Link>
                </div>
            </div>
        </Aux>
    )
}

export default sidebar;
