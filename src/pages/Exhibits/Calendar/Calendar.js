import React from 'react';
import Aux from '../../../hoc/Aux';

const calendar = (props) => {
    return (
        <Aux>
            <h1>Calendar</h1>
            <div data-tockify-component="calendar" data-tockify-calendar="peabody"></div>
            <script data-cfasync="false" data-tockify-script="embed" src="https://public.tockify.com/browser/embed.js"></script>
        </Aux>
    )
}

export default calendar;