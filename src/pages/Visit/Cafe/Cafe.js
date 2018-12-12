import React from 'react';
import Aux from '../../../hoc/Aux';


import classNames from 'classnames';
import styles from './Cafe.module.css';

// assets
import CAFE from './cafe.jpg';

const cafe = (props) => {
    return (
        <Aux>
            <h1>Peabody Café</h1>
            <p></p>
            <div className={classNames(styles.imageContainer)}>
                <img className={classNames(styles.image)} alt="cafe" src={CAFE}></img>
            </div>
            <p>
                We are excited to announce the Peabody Café, coming to you Spring 2019! The café will be a space in the museum for visitors to take a break and refuel in addition to a study spot for Yale and New Haven students. It will also feature The Magic Mural, a wall on which visitors' dinosaur drawings will be displayed.
            </p>
        </Aux>
    )
}

export default cafe;