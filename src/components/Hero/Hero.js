import React from 'react';
import styles from './Hero.module.css';

// sample images
import slide1 from './assets/slide1.jpg'; 

const hero = (props) => {
    return (
        <section className={styles.hero}>
            <div className={styles.heroInner}>
                <div className={styles.text}>
                    <h1>Behind the Squid</h1>
                    <h2>Peabody Spotlights</h2>
                </div>
            </div>
        </section>
    )
}

export default hero;