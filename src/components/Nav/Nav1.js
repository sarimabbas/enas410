import React from 'react';
import 'bulma/css/bulma.css';
import styles from './Nav.module.css';
import logo from './logo.png';
import classNames from 'classnames';

const nav = (props) => {
    return(
        <section className="hero">
            <div className="hero-body">
                <div className={classNames("container", styles.center)}>
                    <img src={logo} className={classNames(styles.logo)} alt="logo" />
                    <h1 className="title is-size-1 is-uppercase has-text-weight-bold">Yale Peabody</h1>
                </div>
                <hr className="is-warning"></hr>
                <div className={classNames("container", styles.center)}>
                    <p class="navbar-item has-text-black">Visit</p>
                    <p class="navbar-item has-text-black">Exhibitions</p>
                    <p class="navbar-item has-text-black">Programs</p>
                    <p class="navbar-item has-text-black">Collections</p>
                    <p class="navbar-item has-text-black">Research</p>
                    <p class="navbar-item has-text-black">About</p>
                    <p class="navbar-item has-text-black">Support</p>
                </div>
            </div>
        </section>
    )
}

export default nav;