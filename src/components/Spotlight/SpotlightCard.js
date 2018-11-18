import React from 'react';
import styles from './SpotlightCard.module.css';
import classNames from 'classnames';

const spotlightcard = (props) => {
    return (
        <div className={classNames("spotlight")}>
            <img src={props.image} alt="Spotlight" className={styles.image}></img>
            <h1 className={styles.title}>{props.title}</h1>
            <p className={styles.description}>{props.description}</p>
        </div>
    )
}

export default spotlightcard;