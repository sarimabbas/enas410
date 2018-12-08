import React from 'react';
import Aux from '../../../hoc/Aux';


import classNames from 'classnames';
import styles from './Admission.module.css';

// routing
import { Link } from 'react-router-dom';

// assets
import sample from './sample.png';

const admission = (props) => {
    return (
        <Aux>
            <h1 className={classNames(styles.title)}>Admission {'&'} Hours</h1>
            <h3>Hours</h3>
            <p>
                Monday: Closed
                <br/>Tuesday - Saturday 10:00 am to 5:00 pm
                <br/>Sunday: 12:00 pm to 5:00 pm
                <br/>
                <br/><i>The Museum is open on the following Mondays: Martin Luther King, Jr. Day, Presidents Day, Yale Commencement, and Columbus Day.</i>
                <br/>
                <br/><i>The Museum is closed on the following holidays: New Year's Day, Easter Sunday, Independence Day, Thanksgiving Day, Christmas Eve, and Christmas Day.</i>
            </p>
        </Aux>
    )
}

export default admission;