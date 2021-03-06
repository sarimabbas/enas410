import React from 'react'

// components
import Aux from '../../hoc/Aux';
import Sidebar from './Sidebar';
import Generic from '../Generic/Generic';

// sub pages
import Directions from './Directions/Directions';
import Admission from './Admission/Admission';
import Cafe from './Cafe/Cafe';
import GroupVisits from './GroupVisits/GroupVisits'
 

// styles
import styles from './Visit.module.css'
import classNames from 'classnames';

// routing
import { Route, Redirect, Switch } from 'react-router-dom';

const visit = (props) => {
    return (    
        <Aux>
            <Generic>
                <div className={classNames(styles.grid)}>
                    <Sidebar></Sidebar>
                    <div className={classNames(styles.content)}>
                        <Switch>
                            <Redirect exact from="/visit" to="/visit/admission"/>
                            <Route path={'/visit/directions'} component={Directions} />
                            <Route path={'/visit/admission'} component={Admission} />
                            <Route path={'/visit/cafe'} component={Cafe} />
                            <Route path={'/visit/group-visits'} component={GroupVisits} />
                        </Switch>
                    </div>
                    <div></div>
                </div>
            </Generic>
        </Aux>
    )
}

export default visit;