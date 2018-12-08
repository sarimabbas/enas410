import React from 'react'

// components
import Aux from '../../hoc/Aux';
import Sidebar from './Sidebar';
import Generic from '../Generic/Generic';

// sub pages
import Directions from './Directions/Directions';
import Admission from './Admission/Admission';
import Cafe from './Cafe/Cafe';
 

// styles
import styles from './Visit.module.css'
import classNames from 'classnames';

// routing
import { Route } from 'react-router-dom';

const visit = (props) => {
    return (    
        <Aux>
            <Generic>
                <div className={classNames(styles.grid)}>
                    <Sidebar></Sidebar>
                    <div className={classNames(styles.content)}>
                        <Route path={'/visit/directions'} component={Directions} />
                        <Route path={'/visit/admission'} component={Admission} />
                        <Route path={'/visit/cafe'} component={Cafe} />
                    </div>
                    <div></div>
                </div>
            </Generic>
        </Aux>
    )
}

export default visit;