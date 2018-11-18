import React from 'react';
import styles from './SpotlightCardRow.module.css';
import classNames from 'classnames';
import SpotlightCard from './SpotlightCard';

// sample images
import sample1 from './assets/sample1.png';
import sample2 from './assets/sample2.png';
import sample3 from './assets/sample3.png';

// sample row content
const spotlightcardrow = (props) => {
    return (
        <div className={classNames(styles.row)}>
            <SpotlightCard
                image={sample1}
                title="Peabody Evolved"
                description="Following the Museum’s sesquicentennial
                in 2016, we are pleased to announce a
                major renovation project that will reinvent
                the Peabody for the 21st century and
                beyond, further establishing the Museum
                as a home for cutting-edge research,
                extraordinary education, and breathtaking
                exhibitions."
            ></SpotlightCard>
            <SpotlightCard
                image={sample2}
                title="History of the Dinosaur Hall"
                description="Dedicated in December 1925, the new
                building’s two-story Great Hall was
                specifically designed to accommodate
                some of O.C. Marsh’s dinosaurs, such
                the mounting of the giant Brontosaurus,
                completed in 1931 after six years of labor. "
            ></SpotlightCard>
            <SpotlightCard
                image={sample3}
                title="Behind the Giant Squid"
                description="Many Peabody memories start with the
                giant squid hanging in the lobby. The model
                is based on the first giant squid that was
                ever discovered, part of which—a tentacled
                arm—is stored in the collections of the
                Division of Invertebrate Zoology. The giant
                squid is one of over 13 million specimens in
                the Museum’s scientific collections."
            ></SpotlightCard>
        </div>
    )
}

export default spotlightcardrow;