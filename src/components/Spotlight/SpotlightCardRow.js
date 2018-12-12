import React from 'react';
import styles from './SpotlightCardRow.module.css';
import classNames from 'classnames';
import SpotlightCard from './SpotlightCard';
import { Link } from 'react-router-dom';

import bhullar from '../../pages/About/Highlights/assets/image3.jpg'
import briggs from '../../pages/About/Highlights/assets/image1.jpg'
import egypthall from '../../pages/About/Highlights/assets/image2.jpg'
import dinosnore from '../../pages/About/Highlights/assets/dinosnores_nhm.jpg'
import grass from '../../pages/About/Highlights/assets/grass.jpeg'
import scorpion from '../../pages/About/Highlights/assets/scorpion.jpg'

// sample row content
const spotlightcardrow = (props) => {
    return (
        <div className={classNames(styles.row)}>
            
            
            <div>
                <SpotlightCard
                    image={bhullar}
                    subtitle="Researcher Highlight"
                    title="Bhart-Anjan Bhullar"
                    description = "My group focuses on great transitions in the history of vertebrates. In the field and in the lab, we use the geological record of life to guide questions about major transformations across Vertebrata, especially at the origins of birds and mammals."
                ></SpotlightCard>
                    <p>
                        <Link to="about/highlights/2019-01-01-bhullar">Read More &rsaquo;</Link>
                    </p>
            </div>



            <div>
                
                
                <SpotlightCard
                image={briggs}
                subtitle="Researcher Highlight"
                title="Professor Derek Briggs"
                description = "Read about Professor Derek Briggs, whose research focuses on the preservation and evolutionary significance of exceptionally preserved fossils."
                ></SpotlightCard>
                <p><Link name="briggs" to="/about/highlights/2019-01-01-briggs">Read More &rsaquo;</Link></p>
            
        
            </div>


            <div><SpotlightCard
                image={grass}
                subtitle="Behind the Dioramas"
                title="Installing Grass"
                description = "Read about the details that Michael Anderson and his team considered in the construction and mainenance of the Peabody dioramas. This time: grass!"
            ></SpotlightCard>
            <p><Link to="/about/highlights/2018-11-26-grass">Read More &rsaquo;</Link></p></div>
           
           
            <div className={styles.hideSecond}><SpotlightCard
                image={egypthall}
                subtitle="Exhibit Update"
                title="New Ancient Egypt Hall"
                description="Visitors will have the opportunity to explore a dark tomb, wielding a flashlight like a true explorer, and uncover the mysteries of Ancient Egypt firsthand. Get excited!"
            ></SpotlightCard>
            <p><a href="/about/highlights/2019-01-01-egypt-hall">Read More &rsaquo;</a></p>
            </div>
            
            
            <div className={styles.hideFirst}><SpotlightCard
                image={dinosnore}
                title="Dino Snore Enlivens History for Children"
                subtitle="Event News"
                description="We had a great time at Dino Snore this past weekend and are glad so many visitors could join us! Read about it here!"
            ></SpotlightCard>
            <p><Link to="/about/highlights/2004-11-15-dino-snore">Read More &rsaquo;</Link></p>
            </div>
            
            
            <div className={styles.hideFirst}><SpotlightCard
                image={scorpion}
                subtitle="Behind the Dioramas"
                title="Live Model for Scorpion Painting"
                description="Read about the details that Michael Anderson and his team considered in the construction and mainenance of the Peabody dioramas. This time: scorpions!"
            ></SpotlightCard>
            <p><Link to="/about/highlights/2017-12-20-scorpion-painting">Read More &rsaquo;</Link></p>
            </div>
        </div>
    )
}

export default spotlightcardrow;