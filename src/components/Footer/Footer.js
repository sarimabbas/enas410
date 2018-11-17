import React from 'react';
import classNames from 'classnames';
import styles from './Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const footer = (props) => {
    return (
        <section className={classNames("section")}>
            <hr className={classNames(styles.separator)}></hr>
            <div className="container">
                {/* footer */}
                <div className={styles.footer}>
                    {/* info */}
                    <div className={styles.info}>
                        <span className="is-size-7 line-height-0">
                            <b>Yale Peabody Museum of Natural History</b><br/>
                            170 Whitney Ave<br/>
                            New Haven, CT 06511<br/>
                            (203) 432-8987
                        </span>
                        <br/><br/>
                        <p className="is-size-7 has-text-weight-bold">Open today: 10:30 am–6 pm</p>
                    </div>
                    {/* links  */}
                    <div className={styles.links}>
                        {/* first col */}
                        <div>
                            <p className="is-size-7">About Us</p>
                            <p className="is-size-7">Press</p>
                            <p className="is-size-7">Contact Us</p>
                            <p className="is-size-7">FAQs</p>
                        </div>
                        {/* second col */}
                        <div>
                            <p className="is-size-7">Membership</p>
                            <p className="is-size-7">Volunteering</p>
                            <p className="is-size-7">Employment</p>
                            <p className="is-size-7">Internships</p>
                        </div>
                        {/* third col */}
                        <div>
                            <p className="is-size-7">Accessibility</p>
                            <p className="is-size-7">Terms {"&"} Conditions</p>
                            <p className="is-size-7">Privacy Policy</p>
                        </div>
                    </div>
                    {/* social & copyright */}
                    <div className={styles.social}>
                        <div className={styles.icons}>
                            <FontAwesomeIcon icon={["fab", "facebook"]}></FontAwesomeIcon>
                            <FontAwesomeIcon icon={["fab", "instagram"]}></FontAwesomeIcon>
                            <FontAwesomeIcon icon={["fab", "twitter"]}></FontAwesomeIcon>
                            <FontAwesomeIcon icon={["fab", "youtube"]}></FontAwesomeIcon>
                        </div>
                        <br/>
                        <p className="is-size-7">Copyright &copy; 2018, Yale Peabody Museum of Natural History</p>
                    </div>
                {/* end footer */}
                </div>
            </div>
        </section>
    )
}

export default footer;