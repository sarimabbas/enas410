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
            <h1>School and Group Visits</h1>
            <div className={classNames("workshop")}>
                {/* <img src={workshop} alt="workshop" className={styles.image}></img> */}
                <h2>General Information {'&'} Reservations</h2>
                <p className={styles.description}>
                    The Yale Peabody Museum invites you to explore four billion years of natural history through our captivating exhibits and exciting programs! Schedule your field trip as either a self-guided visit or have the Museum’s Education Department provide an engaging science, history or art program for your school, scout or community youth group. Reservations are required at least two weeks in advance for all group visits and educational programs.  The Museum is open Tuesday through Sunday and is wheelchair accesssible.  Most visitors tour the museum in 2-3 hours.  Some exhibits may be temporarily unavailable during your visit if a program is scheduled in that space.
                </p>
                <h3>Self-Guided Visits</h3>
                <p>
                    A self-guided group visit to the Museum is a great way to see the museum’s many exciting exhibits.  Activity sheets can be downloaded to help focus on certain exhibits or subject matter, or explore the museum at your own pace.  Large groups may want to schedule a visit at less busy times, such as the fall and winter seasons, and after 1PM, especially in the spring.  An adult chaperone is required for every eight students.  Access to all halls is not guaranteed.
                </p>
                <h3>Docent Led Programs</h3>
                <p>
                    The Yale Peabody Museum of Natural History offers docent led programs to school, scout and community youth groups.  All programs are approximately 45 minutes long and feature the museum’s exhibits and specimens.  Due to limited space in our galleries, program size is capped at 25 students.  A minimum of one chaperone is required for each 8 students.  School programs are aligned with Connecticut Science Core Framework or NGS standards for grades K to 12.  Pre and post visit resources are available for select programs.
                    <br/><br/>Learn more about our docent led programs:
                    <br/><a href="http://peabody.yale.edu/education/school-programs-topic">School Programs by Topic</a>
                    <br/><a href="Museum Highlights Tours">Museum Highlights Tours</a>
                </p>
                <h3>Making Reservations</h3>
                <p>
                    To access our on-line reservation form, <a href="http://peabody.yale.edu/education/school-program-registration-form">CLICK HERE</a>.
                    <br/><br/>You can also make a reservation by contacting our Education Office at peabody.education@yale.edu or (203) 432-3775, weekdays between 9:00 am and 2:00 pm.
                    <br/><br/>All groups must reserve their visit or program at least two weeks in advance. You will receive a confirmation from the Education Office, which must be presented at the admissions desk at the time of your visit
                </p>
                <h2>Group Admission/Program Fees and Policies</h2>
                <h3>Fees</h3>
                <b>School {'&'} Youth Group Programs</b>
                <p>
                    $200 for 1 program (includes museum admission) with up to 25 students and 5 adults (including teachers, aides and chaperones)
                </p>
                <p>A minimum of 1 chaperone must be provided for every 8 students </p>
                <p>Additional chaperones - $10 (discounted regular admission)</p>
                <p>Multiple Programs/Same Visit/Same Class: Regular fee for first program, $50 fee for additional program</p>

                <br/>
                <b>School {'&'} Youth Group Self-Guided/Group Admission</b>
                <p>$5 per student</p>
                <p>
$10 per chaperone
A minimum of 1 chaperone must be provided for every 8 students
Teachers and staff admitted free with school ID</p>
                
                
                
                
                
                <h3>Payment Policies</h3>
                <h3>Refunds</h3>
                <p><i>All program and admissions income goes directly to support the Yale Peabody Museum and its education initiatives.</i></p>

            </div>
        </Aux>
    )
}

export default group;
