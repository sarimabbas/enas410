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
                    Collections
                </h1>
                <div className={classNames(styles.links)}>
                    Search<br/>
                    How to use<br/>
                    Object of the Day<br/>
                </div>
            </div>
        </Aux>
    )
}

export default sidebar;
