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
                                <Link to="/visit/admission">Admission {'&'} Hours</Link>
                                <Link to="/map">Floor Plan {'&'} Virtual Tour</Link>
                                <Link to="/visit/directions">Directions {'&'} Parking</Link>
                            </div>
                        </div>
                        <div className={classNames(styles.group)}>
                            <span className={classNames(styles.heading)}>
                                Exhibits
                            </span>
                            <div className={classNames(styles.links)}>
                                <Link to="/exhibits/current">Exhibits On View</Link>
                                <Link to="/exhibits/temporary">Temporary Exhibits</Link>
                                <Link to="/exhibits/upcoming">Past Exhibits</Link>
                                <Link to="/exhibits/calendar">Events Calendar</Link>
                            </div>
                        </div>
                        <div className={classNames(styles.group)}>
                            <span className={classNames(styles.heading)}>
                                Learn
                            </span>
                            <div className={classNames(styles.links)}>
                                <Link to="/learn/k12">K-12 Programs</Link>
                                <Link to="https://evolutions.peabody.yale.edu/">Peabody Evolutions</Link>
                                <Link to="/learn/yale">Yale Student Opportunities</Link>
                                <Link to="/learn/adult">Adult Programs</Link>
                            </div>,
                        </div>
                        <div className={classNames(styles.group)}>
                            <span className={classNames(styles.heading)}>
                                Collections
                            </span>
                            <div className={classNames(styles.links)}>
                                <Link to="/collections/search">Search the Collections</Link>
                                <Link to="/collections/how-to-use">How to Use</Link>
                                <Link to="/collections/daily-object">Object of the Day</Link>
                            </div>
                        </div>
                        <div className={classNames(styles.group)}>
                            <span className={classNames(styles.heading)}>
                                About
                            </span>
                            <div className={classNames(styles.links)}>
                                <Link to="/about/highlights">Peabody Highlights</Link>
                                <Link to="/about/mission">Mission {'&'} History</Link>
                                <Link to="/about/contact">Contact Us</Link>
                                <Link to="/about/staff">Staff</Link>
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