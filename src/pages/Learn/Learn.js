import React from 'react'

// components
import Aux from '../../hoc/Aux';
import Sidebar from './Sidebar';
import Generic from '../Generic/Generic';

// sub pages
import Adult from './Adult/Adult';
import Group from './Group/Group';
import Yale from './Yale/Yale';

// styles
import styles from './Learn.module.css'
import classNames from 'classnames';

// routing
import { Route } from 'react-router-dom';

const learn = (props) => {
    return (    
        <Aux>
            <Generic>
                <div className={classNames(styles.grid)}>
                    <Sidebar></Sidebar>
                    <div className={classNames(styles.content)}>
                        <Route path={'/learn/adult'} component={Adult} />
                        <Route path={'/learn/k12'} component={Group} />
                        <Route path={'/learn/yale'} component={Yale} />
                    </div>
                </div>
            </Generic>
        </Aux>
    )
}

export default learn;