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

                <br/>
                <h2>School Programs by Topic</h2>


                <br/>
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
                <p>$10 per chaperone</p>
                <p>A minimum of 1 chaperone must be provided for every 8 students </p>
                <p>Teachers and staff admitted free with school ID</p>
                
                <br/>
                <b>Adult Group Self-Guided/Group Admission</b>
                <p>$10 per person</p>
                <p>To receive group rate, visit must be booked at least two weeks in advance and include at least 10 members</p>

                <br/>
                <b>Museum Highlights Tours (adult groups)</b>
                <p>$15 per person (includes museum admission) Maximum group size of 20 per tour.</p>
                <p>20% discount for senior groups</p>
                <p>Minimum group size of 10.</p>

                <br/>
                <b>Colleges and Universities</b>
                <p>Yale faculty and students with ID are admitted free </p>
                <p>College and university classes: group rates apply for self-guide or program reservations</p>
                <p>College students will be charged the student rate of $6 for individual admission</p>

                <br/>
                <b>All Groups</b>
                <p>Free bus parking</p>
                <p>All cars parking in the Peabody lot will be charged a $5 parking fee</p>
                <p>Parking for cars is limited, space not guaranteed</p>

                <br/>
                <h3>Payment Policies</h3>
                <p> Payment must be received prior to or on the day of your visit.  If we must contact you for payment after the date of the visit, an administrative fee of $25 will be added to the invoice. </p>
                <p>Accepted forms of payment include:
                    <br/>Credit card (VISA, MasterCard or Discover)
                    <br/>Check made out to Yale University
                    <br/>Cash (no change please)
                    <br/>Purchase order
                </p>
                <p>Coupons, Museum memberships, Yale IDs, or library passes will not be honored as part of the group rate; anyone using these will be considered an individual visitor by the admissions staff and not counted as part of the group. </p>
                <p><b>To pay by mail, address your payment to:</b>
                    <br/>Yale Peabody Museum of Natural History
                    <br/>Education Office
                    <br/>P.O. Box 208118
                    <br/>New Haven, CT 06520-8118
                    <br/>Attn: Elizabeth Steele
                </p>
                
                <br/>
                <h3>Refunds</h3>
                <p>Full refund for cancellation at least two weeks prior to program.</p>
                <p>No refunds/discount for fewer students than reservation.</p>
                <p>No refund for cancellation fewer than 5 business days before program.</p>
                <p>Groups that fail to show up will not receive a refund or will be billed for the program if payment has not already been received.</p>


                <br/>
                <p><i>All program and admissions income goes directly to support the Yale Peabody Museum and its education initiatives.</i></p>

            </div>
        </Aux>
    )
}

export default group;
