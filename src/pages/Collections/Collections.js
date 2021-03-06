import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom';
import classNames from 'classnames';

// components
import Aux from '../../hoc/Aux';
import Generic from '../Generic/Generic';
import Sidebar from './Sidebar';

//sub pages
import Search from './Search/Search';
import Random from './Random/Random';
import Use from './Use/Use';

// styles
import styles from './Collections.module.css'

const collections = (props) => {
    return (    
        <Aux>
            <Generic>
                <div className={classNames(styles.grid)}>
                    <Sidebar></Sidebar>
                    <div className={classNames(styles.content)}>
                    <Switch>
                        <Redirect exact from="/collections" to="/collections/search"/>
                        <Route path={'/collections/search'} component={Search} />
                        <Route path={'/collections/daily-object'} component={Random} />
                        <Route path={'/collections/how-to-use'} component={Use} />
                    </Switch>
                    </div>
                    <div></div>
                </div>
            </Generic>
        </Aux>
    )
}

export default collections;