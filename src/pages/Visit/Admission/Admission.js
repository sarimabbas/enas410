import React from 'react';
import Aux from '../../../hoc/Aux';

const admission = (props) => {
    return (
        <Aux>
            <h1>Admission {'&'} Hours</h1>
            <h3>Hours</h3>
            <p>
                Monday: Closed
                <br/>Tuesday–Saturday 10:00 am to 5:00 pm
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