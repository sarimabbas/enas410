import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import { Link } from 'react-router-dom';
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

// styles
import styles from './Overlay.module.css'
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// component
class overlay extends Component {

    render() {
        return (
            <Aux>
                <div className={classNames(styles.overlay)}>

                    {/* controls */}
                    <div className={classNames(styles.controls)}>
                        <div className={classNames(styles.cross)}>
                            <FontAwesomeIcon onClick={this.props.clickHandler}
                                            href="#" 
                                            icon={["fas", "times"]}>
                            </FontAwesomeIcon>
                        </div>
                    </div>


                    {/* wrap */}
                    <div className={classNames(styles.leftRight)}>

                         {/* floto */}
                        <div className={classNames(styles.left)}>

                            <h1 className={styles.text}>Peabody</h1>

                        </div>

                        {/* links */}
                        <div className={classNames(styles.right)}>

                            <div className={classNames(styles.grid)}>

                                <div>
                                    <span className={classNames(styles.heading)}>
                                    <Link to="/visit">Visit</Link>
                                    </span>
                                    <div className={classNames(styles.links)}>
                                        <Link to="/visit/admission">Admission {'&'} Hours</Link>
                                        <Link to="/map">Floor Plan {'&'} Virtual Tour</Link>
                                        <Link to="/visit/cafe">Peabody Café</Link>
                                        <Link to="/visit/directions">Directions {'&'} Parking</Link>
                                        <Link to="/visit/group-visits">Group Visits</Link>
                                    </div>
                                </div>

                                <div>
                                    <span className={classNames(styles.heading)}>
                                        <Link to="/exhibits">Exhibits</Link>
                                    </span>
                                    <div className={classNames(styles.links)}>
                                        <Link to="/exhibits/current">Exhibits On View</Link>
                                        <Link to="/exhibits/temporary">Temporary Exhibits</Link>
                                        <Link to="/exhibits/upcoming">Past Exhibits</Link>
                                        <Link to="/exhibits/calendar">Events Calendar</Link>
                                    </div>
                                </div>

                                <div>
                                    <span className={classNames(styles.heading)}>
                                        <Link to="/learn">Learn</Link>
                                    </span>
                                    <div className={classNames(styles.links)}>
                                        <Link to="/learn/k12">K-12 Programs</Link>
                                        <Link to="https://evolutions.peabody.yale.edu/">Peabody Evolutions</Link>
                                        <Link to="/learn/yale">Yale Student Opportunities</Link>
                                        <Link to="/learn/adult">Adult Programs</Link>
                                    </div>
                                </div>

                                <div>
                                    <span className={classNames(styles.heading)}>
                                        <Link to="/collections">Collections</Link>
                                    </span>
                                    <div className={classNames(styles.links)}>
                                        <Link to="/collections/search">Search the Collections</Link>
                                        <Link to="/collections/how-to-use">How to Use</Link>
                                        <Link to="/collections/daily-object">Object of the Day</Link>
                                    </div>
                                </div>

                                <div>
                                    <span className={classNames(styles.heading)}>
                                        <Link to="/about">About</Link>
                                    </span>
                                    <div className={classNames(styles.links)}>
                                        <Link to="/about/highlights">Peabody Highlights</Link>
                                        <Link to="/about/mission">Mission {'&'} History</Link>
                                        <Link to="/about/contact">Contact Us</Link>
                                        <Link to="/about/staff">Staff</Link>
                                    </div>
                                </div>

                            </div>

                        </div>



                    </div>


                   
                </div>
            </Aux>
        )
    }
}
export default overlay;