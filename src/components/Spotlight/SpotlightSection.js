import React from 'react';
import SpotlightCardRow from './SpotlightCardRow';
import styles from './SpotlightSection.module.css';

const spotlightsection = (props) => {
    return (
        <section className="section">
            <div className="container">
                <div className={styles.top}>
                    <h1 className={styles.title}>Peabody Highlights</h1>
                    <p><a href="/about/highlights" className={styles.more}>See More</a></p>
                </div>
                <SpotlightCardRow />
            </div>
        </section>
    )
}

export default spotlightsection;
