import React from 'react';
import 'bulma/css/bulma.css';
import styles from './Nav.module.css';
import logo from './logo.png';
import classNames from 'classnames';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons'
library.add(faBars, faSearch)



const nav = (props) => {
    return(
        <section className="hero">
            <div className="hero-body">
                <div className={classNames("container", styles.center)}>
                    <img src={logo} className={classNames(styles.logo)} alt="logo" />
                    <h1 className="title is-size-1-desktop is-uppercase has-text-weight-bold">Yale Peabody</h1>
                </div>
                <hr></hr>
                <div className={classNames("container", styles.vertical)}>
                    <FontAwesomeIcon icon="bars"/>
                    <div className={classNames("container", styles.center)}>
                        <p class="navbar-item has-text-black">Visit</p>
                        <p class="navbar-item has-text-black">Exhibitions</p>
                        <p class="navbar-item has-text-black">Programs</p>
                        <p class="navbar-item has-text-black">Collections</p>
                        <p class="navbar-item has-text-black">Research</p>
                        <p class="navbar-item has-text-black">About</p>
                        <p class="navbar-item has-text-black">Support</p>
                    </div>
                    <FontAwesomeIcon icon="search" />
                </div>
            </div>
        </section>
    )
}

export default nav;