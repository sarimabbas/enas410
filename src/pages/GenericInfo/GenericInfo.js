import React from 'react'

// components
import Aux from '../../hoc/Aux';
import NavSimple from '../../components/Nav/NavSimple';
import Footer from '../../components/Footer/Footer';

// styles
import classNames from 'classnames';
import styles from './GenericInfo.module.css'

const genericInfo = (props) => {
    return (
        <Aux>
            <NavSimple/>
            <section className={classNames(styles.section)}>
                <div className={classNames(styles.wrapper)}>
                    <div className={classNames(styles.sidebar)}>
                        <h1 className={classNames(styles.heading)}>
                            Visit
                        </h1>
                        <div className={classNames(styles.links)}>
                            <span>Hours {'&'} Admission</span>
                            <span>Maps {'&'} Virtual Tour</span>
                            <span>Direction {'&'} Parking</span>
                        </div>
                    </div>
                    <div className={classNames(styles.content)}>
                        {props.children}
                    </div>
                </div>
            </section>
            <Footer/>
        </Aux>
    )
}

export default genericInfo;