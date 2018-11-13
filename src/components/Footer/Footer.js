import React from 'react';
import classNames from 'classnames';
import styles from './Footer.module.css';


const footer = (props) => {
    return (
        <section className={classNames("section", "has-background-white-ter")}>
            <div className="container">
                <div className={styles.footer}>
                    <div className={styles.logo}>
                        <h1 className="title is-uppercase is-size-5-mobile is-marginless">Yale Peabody</h1>
                        <span className="is-size-7 line-height-0">
                            <b>Yale Peabody Museum of Natural History</b><br/>
                            170 Whitney Ave<br/>
                            New Haven, CT 06511
                        </span>
                        <br/><br/>
                        <p className="is-size-7 has-text-weight-bold">Open today: 10:30 am–6 pm</p>
                    </div>
                    <div className={styles.info1}>
                        <p className="is-size-7">About Us</p>
                        <p className="is-size-7">Visit</p>
                        <p className="is-size-7">Exhibitions {"&"} Events</p>
                        <p className="is-size-7">Art {"&"} Artists</p>
                        <p className="is-size-7">Learn</p>
                        <p className="is-size-7">Support</p>
                    </div>
                    <div className={styles.info2}>
                        <p className="is-size-7">About Us</p>
                        <p className="is-size-7">Visit</p>
                        <p className="is-size-7">Exhibitions {"&"} Events</p>
                        <p className="is-size-7">Art {"&"} Artists</p>
                        <p className="is-size-7">Learn</p>
                        <p className="is-size-7">Support</p>
                    </div>
                    <div className={styles.copyright}>©️ Yale Peabody, 2018. All rights reserved.</div>
                </div>
            </div>
        </section>
    )
}

export default footer;