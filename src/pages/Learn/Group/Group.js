import React from 'react'

// components
import Aux from '../../../hoc/Aux';

// styles
import classNames from 'classnames';
import styles from './Group.module.css'

// images
import workshop from './assets/adult_workshop.jpg';
import talks from './assets/adult_talks.jpg';
import natsci from './assets/adult_natsci.jpg';

const group = (props) => {
    return (
        <Aux>
            <h1 className={classNames(styles.title)}>School and Group Visits</h1>
            <div className={classNames("workshop")}>
                {/* <img src={workshop} alt="workshop" className={styles.image}></img> */}
                <h1 className={styles.subtitle}>General Information{'&'} Reservations</h1>
                <p className={styles.description}>
                    The Yale Peabody Museum invites you to explore four billion years of natural history through our captivating exhibits and exciting programs! Schedule your field trip as either a self-guided visit or have the Museum’s Education Department provide an engaging science, history or art program for your school, scout or community youth group. Reservations are required at least two weeks in advance for all group visits and educational programs.  The Museum is open Tuesday through Sunday and is wheelchair accesssible.  Most visitors tour the museum in 2-3 hours.  Some exhibits may be temporarily unavailable during your visit if a program is scheduled in that space.
                </p>
                <h3>Self-Guided Visits</h3>
                <p>
                    A self-guided group visit to the Museum is a great way to see the museum’s many exciting exhibits.  Activity sheets can be downloaded to help focus on certain exhibits or subject matter, or explore the museum at your own pace.  Large groups may want to schedule a visit at less busy times, such as the fall and winter seasons, and after 1PM, especially in the spring.  An adult chaperone is required for every eight students.  Access to all halls is not guaranteed.
                </p>
            </div>
        </Aux>
    )
}

export default group;
