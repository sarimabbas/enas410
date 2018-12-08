import React from 'react';
import styles from './SpotlightCard.module.css';
import classNames from 'classnames';

const spotlightcard = (props) => {
    return (
        <div className={classNames("spotlight")}>
            <div className={styles.imageContainer}>
                <img src={props.image} alt="Spotlight" className="imageKing"></img>
            </div>
            <h3 className={styles.title}>{props.title}</h3>
            <p className={styles.description}>{props.description}</p>
        </div>
    )
}

export default spotlightcard;