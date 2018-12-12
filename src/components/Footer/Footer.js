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
                        <span>
                            <b>Yale Peabody Museum <br/> of Natural History</b><br/>
                            170 Whitney Ave<br/>
                            New Haven, CT 06511<br/>
                            (203) 432-8987
                        </span>
                        <p></p>
                        <span><b>Open today: 10:30 am–6 pm</b></span>
                    </div>
                    {/* links  */}
                    <div className={styles.links}>
                        {/* first col */}
                        {/* <div> */}
                            <span className={styles.link}>Visit</span>
                            <span className={styles.link}>Exhibits</span>
                            <span className={styles.link}>Learn</span>
                            <span className={styles.link}>Collections</span>
                            <span className={styles.link}>About</span>
                        {/* </div> */}
                        {/* second col */}
                        {/* <div> */}
                            <span className={styles.link}>FAQs</span>
                            <span className={styles.link}>Membership</span>
                            <span className={styles.link}>Volunteering</span>
                            <span className={styles.link}>Employment</span>
                            <span className={styles.link}>Internships</span>
                        {/* </div> */}
                        {/* third col */}
                        {/* <div> */}

                            <span className={styles.link}>Press</span>
                            <span className={styles.link}>Support</span>
                            <span className={styles.link}>Accessibility</span>
                            <span className={styles.link}>Privacy Policy</span>
                            <span className={styles.link}>Terms {"&"} Conditions</span>
                        {/* </div> */}

                    </div>
                    {/* social & copyright */}
                    <div className={styles.social}>
                        <div className={styles.icons}>
                            <a href="https://www.facebook.com/YalePeabodyMuseum/" style={{textDecoration: "none"}}><FontAwesomeIcon icon={["fab", "facebook"]} size="2x"></FontAwesomeIcon></a>
                            <a href ="https://www.instagram.com/enas410peabody/" style={{textDecoration: "none"}}><FontAwesomeIcon icon={["fab", "instagram"]} size="2x"></FontAwesomeIcon></a>
                            <a href="https://twitter.com/yalepeabody?lang=en" style={{textDecoration: "none"}}><FontAwesomeIcon icon={["fab", "twitter"]} size="2x" ></FontAwesomeIcon></a>
                            <a href ="https://www.youtube.com/channel/UC5c5hS-NG0ya1cyvn85koMA" style={{textDecoration: "none"}}><FontAwesomeIcon icon={["fab", "youtube"]} size="2x"></FontAwesomeIcon></a>                          
                        </div>
                        <br/><br/>
                        <span>Copyright &copy; 2018<br/>Yale Peabody Museum <br/> of Natural History</span>
                    </div>
                    <div></div>
                {/* end footer */}
                </div>
            </div>
        </section>
    )
}

export default footer;