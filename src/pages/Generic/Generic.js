import React from 'react'

// components
import Aux from '../../hoc/Aux';
import NavSimple from '../../components/Nav/NavSimple';
import Footer from '../../components/Footer/Footer';

// styles
import classNames from 'classnames';
import styles from './Generic.module.css'

const generic = (props) => {
    return (
        <Aux>
            <NavSimple/>
            <section className={classNames("section", styles.section)}>
                <div className={classNames("container")}>
                    {props.children}
                </div>
            </section>
            <Footer/>
        </Aux>
    )
}

export default generic;