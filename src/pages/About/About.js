import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom';
import classNames from 'classnames';

// components
import Aux from '../../hoc/Aux';
import Generic from '../Generic/Generic';
import Sidebar from './Sidebar';

// import sub pages here
import History from './History/History'
import Contact from './Contact/Contact'
import Staff from './Staff/Staff'
import Classpage from './Classpage/Classpage'
import Highlights from './Highlights/Highlights'

import Design from './Classpage/pages/Design'
import Audio from './Classpage/pages/Audio'
import Mural from './Classpage/pages/Mural'
import Egypt from './Classpage/pages/Egypt'
import Dome from './Classpage/pages/Dome'
import Cafe from './Classpage/pages/Cafe'


// styles
import styles from './About.module.css'

const about = (props) => {
    return (
        <Aux>
            <Generic>
                <div className={classNames(styles.grid)}>
                    <Sidebar></Sidebar>
                    <div className={classNames(styles.content)}>
                        <Switch>
                            <Redirect exact from="/about" to="/about/mission"/>
                            <Route path={'/about/mission'} component={History} />
                            <Route path={'/about/contact'} component={Contact} />
                            <Route path={'/about/staff'} component={Staff} />

                            <Route path={'/about/class'} exact component={Classpage} />
                            <Route path={'/about/class/design'} exact component={Design} />
                            <Route path={'/about/class/audio'} exact component={Audio} />
                            <Route path={'/about/class/cafe'} exact component={Cafe} />
                            <Route path={'/about/class/dome'} exact component={Dome} />
                            <Route path={'/about/class/egypt'} exact component={Egypt} />
                            <Route path={'/about/class/mural'} exact component={Mural} />

                            <Route path={'/about/highlights'} component={Highlights} />
                        </Switch>
                    </div>
                    <div></div>
                </div>
            </Generic>
        </Aux>
    )
}

export default about;