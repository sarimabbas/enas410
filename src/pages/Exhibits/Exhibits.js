import React from 'react'
import { Route, Redirect } from 'react-router-dom';
import classNames from 'classnames';

// components
import Aux from '../../hoc/Aux';
import Generic from '../Generic/Generic';
import Sidebar from './Sidebar';

// import sub pages here
import Calendar from './Calendar/Calendar';
import OnView from './OnView/OnView';
import Past from './Past/Past';
import Temporary from './Temporary/Temporary';

// styles
import styles from './Exhibits.module.css'

const exhibits = (props) => {
    return (    
        <Aux>
            <Generic>
                <div className={classNames(styles.grid)}>
                    <Sidebar></Sidebar>
                    <div className={classNames(styles.content)}>
                        <Redirect to="/exhibits/on-view"/>
                        <Route path={'/exhibits/calendar'} component={Calendar} />
                        <Route path={'/exhibits/on-view'} component={OnView} />
                        <Route path={'/exhibits/past'} component={Past} />
                        <Route path={'/exhibits/temporary'} component={Temporary} />
                    </div>
                    <div></div>
                </div>
            </Generic>
        </Aux>
    )
}

export default exhibits;