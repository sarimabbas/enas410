import React from 'react';
import SpotlightCardRow from './SpotlightCardRow';
import styles from './SpotlightSection.module.css';

const spotlightsection = (props) => {
    return (
        <section className="section">
            <div className="container">
                <div className={styles.top}>
                    <h1 className={styles.title}>Peabody Spotlights</h1>
                    <h3 className={styles.more}>See More</h3>
                </div>
                <SpotlightCardRow />
            </div>
        </section>
    )
}

export default spotlightsection;