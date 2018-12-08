import React from 'react';
import styles from './SpotlightCard.module.css';
import classNames from 'classnames';

const spotlightcard = (props) => {
    return (
        <div className={classNames("spotlight")}>
            <div className={styles.imageContainer}>
                <img src={props.image} alt="Spotlight" className={styles.image}></img>
            </div>
            <h2 className={styles.title}>{props.title}</h2>
            <p className={styles.description}>{props.description}</p>
        </div>
    )
}

export default spotlightcard;