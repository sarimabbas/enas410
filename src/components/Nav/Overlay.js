import React from 'react';
import Aux from '../../hoc/Aux';
import { Link } from 'react-router-dom';

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
                                <Link to="/map">Map</Link>
                                <Link to="/visit/admission">Admission {'&'} Hours</Link>
                                <Link to="/visit/directions">Directions {'&'} Parking</Link>
                            </div>
                        </div>
                        <div className={classNames(styles.group)}>
                            <span className={classNames(styles.heading)}>
                                Exhibits
                            </span>
                            <div className={classNames(styles.links)}>
                                <Link to="/exhibits/current">Current</Link>
                                <Link to="/exhibits/upcoming">Upcoming</Link>
                                <Link to="/exhibits/past">Past</Link>
                                <Link to="/exhibits/calendar">Calendar</Link>
                            </div>
                        </div>
                        <div className={classNames(styles.group)}>
                            <span className={classNames(styles.heading)}>
                                Learn
                            </span>
                            <div className={classNames(styles.links)}>
                                <Link to="/learn/adult">Adult</Link>
                                <Link to="/learn/yale">Yale</Link>
                                <Link to="/learn/group">Group</Link>
                            </div>
                        </div>
                        <div className={classNames(styles.group)}>
                            <span className={classNames(styles.heading)}>
                                Collections
                            </span>
                            <div className={classNames(styles.links)}>
                                <Link to="/collections/search">Search</Link>
                                <Link to="/collections/random">Random</Link>
                            </div>
                        </div>
                        <div className={classNames(styles.group)}>
                            <span className={classNames(styles.heading)}>
                                About
                            </span>
                            <div className={classNames(styles.links)}>
                                <Link to="/about/highlights">Highlights</Link>
                                <Link to="/about/history">History</Link>
                                <Link to="/about/staff">Staff</Link>
                                <Link to="/about/contact">Contact</Link>
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