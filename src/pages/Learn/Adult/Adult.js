import React from 'react'

// components
import Aux from '../../../hoc/Aux';

// styles
import classNames from 'classnames';
import styles from './Adult.module.css'

// images
import workshop from './assets/adult_workshop.jpg';
import talks from './assets/adult_talks.jpg';
import natsci from './assets/adult_natsci.jpg';

const adult = (props) => {
    return (
        <Aux>
            <h1 className={classNames(styles.title)}>Adult Programs</h1>
            <h2>Workshops, Classes {'&'} General Interest</h2>
            <img src={workshop} alt="workshop" className={styles.image}></img>
            <p className={styles.description}> Come enjoy a wide variety of expert-led activities year-round at the Peabody Museum. Our programs for adults are centered on anthropology, life science, earth science and paleontology, and include many activities, such as walks, workshops, classes, field trips, discussions, and more. These programs and workshops have limited space, and fill up quickly, so be sure to reserve your spot soon!</p>
            <h2>Talks {'&'} Lectures</h2>
            <img src={talks} alt="talks" className={styles.image}></img>
            <p className={styles.description}> The Peabody Museum hosts talks and lectures on a regular basis, featuring Museum staff, Yale University faculty and distinguished speakers from around the world.  The schedule and subject matter is always changing, so be sure to check this list for the latest upcoming events. These include talks in the John H. Ostrom Program Series, an annual volunteer-run effort with a specific theme that ties the series together. Other presentations address new areas of research, or highlight our temporary and permanent exhibitions. All lectures that take place after 5:00 pm are free and open to the public unless otherwise noted.</p>
            <h2>Natural Science Illustration Program</h2>
            <img src={natsci} alt="natsci" className={styles.image}></img>
            <p className={styles.description}> Be a part of an ongoing series of unique art classes and workshops held at the Peabody Museum!  Select from a range of classes in drawing and painting or register for course requirements toward a Certificate in Natural Science Illustration.</p>
        </Aux>
    )
}

export default adult;