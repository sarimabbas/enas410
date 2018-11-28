import React from 'react';
import Aux from '../../hoc/Aux';

// styles
import styles from './Overlay.module.css'
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const overlay = (props) => {
    return (
        <Aux>
            <div className={classNames(styles.overlay)}>
                <div className={classNames(styles.content)}>
                    <div className={classNames(styles.groups)}>
                        <div className={classNames(styles.group)}>
                            <span className={classNames(styles.heading)}>
                                Visit
                            </span>
                            <div className={classNames(styles.links)}>
                                <a href="#">Hours {'&'} Admission</a>
                                <a href="#">Hours {'&'} Admission</a>
                                <a href="#">Hours {'&'} Admission</a>
                                <a href="#">Hours {'&'} Admission</a>
                                <a href="#">Hours {'&'} Admission</a>
                            </div>
                        </div>
                        <div className={classNames(styles.group)}>
                            <span className={classNames(styles.heading)}>
                                Exhibitions
                            </span>
                            <div className={classNames(styles.links)}>
                                <a href="#">Hours {'&'} Admission</a>
                                <a href="#">Hours {'&'} Admission</a>
                                <a href="#">Hours {'&'} Admission</a>
                                <a href="#">Hours {'&'} Admission</a>
                                <a href="#">Hours {'&'} Admission</a>
                            </div>
                        </div>
                        <div className={classNames(styles.group)}>
                            <span className={classNames(styles.heading)}>
                                Learn
                            </span>
                            <div className={classNames(styles.links)}>
                                <a href="#">Hours {'&'} Admission</a>
                                <a href="#">Hours {'&'} Admission</a>
                                <a href="#">Hours {'&'} Admission</a>
                                <a href="#">Hours {'&'} Admission</a>
                                <a href="#">Hours {'&'} Admission</a>
                            </div>
                        </div>
                        <div className={classNames(styles.group)}>
                            <span className={classNames(styles.heading)}>
                                Collections
                            </span>
                            <div className={classNames(styles.links)}>
                                <a href="#">Hours {'&'} Admission</a>
                                <a href="#">Hours {'&'} Admission</a>
                                <a href="#">Hours {'&'} Admission</a>
                                <a href="#">Hours {'&'} Admission</a>
                                <a href="#">Hours {'&'} Admission</a>
                            </div>
                        </div>
                        <div className={classNames(styles.group)}>
                            <span className={classNames(styles.heading)}>
                                About
                            </span>
                            <div className={classNames(styles.links)}>
                                <a href="#">Hours {'&'} Admission</a>
                                <a href="#">Hours {'&'} Admission</a>
                                <a href="#">Hours {'&'} Admission</a>
                                <a href="#">Hours {'&'} Admission</a>
                                <a href="#">Hours {'&'} Admission</a>
                            </div>
                        </div>
                        <div className={classNames(styles.group)}>
                            <FontAwesomeIcon onClick={props.clickHandler} href="#" icon={["fas", "times"]}>
                            </FontAwesomeIcon>
                        </div>
                    </div>
                </div>
            </div>
        </Aux>
    )
}

export default overlay;