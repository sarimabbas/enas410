import React from 'react'
import { Route } from 'react-router-dom';
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
                    {/* start sub pages components here */}
                        <Route path={'/visit/calendar'} component={Calendar} />
                        <Route path={'/visit/on-view'} component={OnView} />
                        <Route path={'/visit/admission'} component={Past} />
                        <Route path={'/visit/cafe'} component={Temporary} />
                    { /* end sub pages components here */ }
                    </div>
                </div>
            </Generic>
        </Aux>
    )
}

export default exhibits;