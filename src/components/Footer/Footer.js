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
                            <span className={styles.link}>About Us</span>
                            <span className={styles.link}>Press</span>
                            <span className={styles.link}>Contact Us</span>
                            <span className={styles.link}>FAQs</span>
                        </div>
                        {/* second col */}
                        <div>
                            <span className={styles.link}>Membership</span>
                            <span className={styles.link}>Volunteering</span>
                            <span className={styles.link}>Employment</span>
                            <span className={styles.link}>Internships</span>
                        </div>
                        {/* third col */}
                        <div>
                            <span className={styles.link}>Accessibility</span>
                            <span className={styles.link}>Terms {"&"} Conditions</span>
                            <span className={styles.link}>Privacy Policy</span>
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