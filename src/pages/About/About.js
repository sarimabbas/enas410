import React from 'react'
import { Route, Redirect } from 'react-router-dom';
import classNames from 'classnames';

// components
import Aux from '../../hoc/Aux';
import Generic from '../Generic/Generic';
import Sidebar from './Sidebar';

// import sub pages here
import History from './History/History'
import Contact from './Contact/Contact'
import Staff from './Staff/Staff'

// styles
import styles from './About.module.css'

const about = (props) => {
    return (
        <Aux>
            <Generic>
                <div className={classNames(styles.grid)}>
                    <Sidebar></Sidebar>
                    <div className={classNames(styles.content)}>
                    {/* start sub pages components here */}
                        <Redirect to="/about/mission"/>
                        <Route path={'/about/mission'} component={History} />
                        <Route path={'/about/contact'} component={Contact} />
                        <Route path={'/about/staff'} component={Staff} />
                        <Route path={'/about/highlights'} component={History} />
                    { /* end sub pages components here */ }
                    </div>
                    <div></div>
                </div>
            </Generic>
        </Aux>
    )
}

export default about;