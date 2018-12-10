import React from 'react'
import classNames from 'classnames';

// components
import Aux from '../../../hoc/Aux';

// import sub pages here

// styles
import styles from './Highlights.module.css'

//images
import dinosnore from './dinosnores_nhm.jpg';

const highlights = (props) => {
    return (    
        <Aux> 
            <h1>Peabody Highlights</h1>
            <section className={classNames(styles.row)}>
                <div className={classNames("workshop")}>
                    <h1 className={styles.subtitle}>‘Dino-Snore’ enlivens history for children</h1>
                    <img src={dinosnore} className={classNames("imageKing")} alt="Dino-Snore"></img>
                    <p className={styles.description}>
                    The Great Hall of the Peabody Museum of Natural History came alive the night of Nov. 13 with running children and tired parents from the greater New Haven area at the semiannual “Dino-Snore.” Sleeping bags, air mattresses and tents surrounded the dinosaur bones, and the museum was teeming with children in pajamas and slippers...</p>
                </div>
                <div className={classNames("talks")}>
                    <h1 className={styles.subtitle}>Talks {'&'} Lectures</h1>
                    {/* <img src={talks} alt="talks" className={styles.image}></img> */}
                    <p className={styles.description}>
                        The Peabody Museum hosts talks and lectures on a regular basis, featuring Museum staff,
                        Yale University faculty and distinguished speakers from around the world.  The schedule
                        and subject matter is always changing, so be sure to check this list for the latest
                        upcoming events. These include talks in the John H. Ostrom Program Series, an annual
                        volunteer-run effort with a specific theme that ties the series together. Other
                        presentations address new areas of research, or highlight our temporary and permanent
                        exhibitions. All lectures that take place after 5:00 pm are free and open to the public
                        unless otherwise noted.</p>
                </div>
                <div className={classNames("natsci")}>
                    <h1 className={styles.subtitle}>Natural Science Illustration Program</h1>
                    {/* <img src={natsci} alt="natsci" className={styles.image}></img> */}
                    <p className={styles.description}>
                        Be a part of an ongoing series of unique art classes and workshops held at the Peabody
                        Museum!  Select from a range of classes in drawing and painting or register for course
                        requirements toward a Certificate in Natural Science Illustration.</p>
                </div>
            </section>
        </Aux>
    )
}

export default highlights;